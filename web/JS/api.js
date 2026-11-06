(function () {
    function resolveDefaultApiUrl() {
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
            return window.location.origin;
        }
        return 'http://localhost:3600';
    }

    const DEFAULT_API_URL = resolveDefaultApiUrl();
    const API_BASE_URL = window.API_BASE_URL || localStorage.getItem('auxilio-api-url') || DEFAULT_API_URL;
    const SESSION_KEY = 'auxilio-current-user';
    const PROFILE_EXTRA_KEY = 'auxilio-user-profile-extra';

    function getCurrentUser() {
        try {
            return JSON.parse(localStorage.getItem(SESSION_KEY));
        } catch {
            return null;
        }
    }

    function setCurrentUser(user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }

    function clearCurrentUser() {
        localStorage.removeItem(SESSION_KEY);
        localStorage.removeItem(PROFILE_EXTRA_KEY);
    }

    function logout() {
        clearCurrentUser();
        return Promise.resolve();
    }

    function getProfileExtra() {
        try {
            return JSON.parse(localStorage.getItem(PROFILE_EXTRA_KEY)) || {};
        } catch {
            return {};
        }
    }

    function setProfileExtra(extra) {
        localStorage.setItem(PROFILE_EXTRA_KEY, JSON.stringify(extra));
    }

    function requireAuth(redirectUrl) {
        if (!getCurrentUser()) {
            window.location.href = redirectUrl || 'login.html';
            return false;
        }
        return true;
    }

    async function request(endpoint, options) {
        options = options || {};
        let response;

        try {
            response = await fetch(API_BASE_URL + endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                },
                ...options
            });
        } catch (err) {
            const viaArquivo = window.location.protocol === 'file:';
            let msg = 'Não foi possível conectar à API em ' + API_BASE_URL + '. ';
            if (viaArquivo) {
                msg += 'Não abra o HTML pelo Explorer (file://). ';
            }
            msg += 'Inicie o backend: abra o terminal na pasta backend, execute "npm install" e depois "npm start". ';
            msg += 'Acesse o login em http://localhost:3600/login.html';
            throw new Error(msg);
        }

        const contentType = response.headers.get('content-type') || '';
        const payload = contentType.includes('application/json')
            ? await response.json()
            : await response.text();

        if (!response.ok) {
            const message = (payload && payload.message) || payload || 'Erro ao comunicar com a API.';
            throw new Error(typeof message === 'string' ? message : 'Erro ao comunicar com a API.');
        }

        return payload;
    }

    async function list(resource) {
        const result = await request('/' + resource);
        return Array.isArray(result && result.data) ? result.data : [];
    }

    async function get(resource, id) {
        const result = await request('/' + resource + '/' + id);
        return Array.isArray(result && result.data) ? result.data[0] : (result && result.data);
    }

    async function create(resource, data) {
        return request('/' + resource, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async function update(resource, id, data) {
        return request('/' + resource + '/' + id, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    async function remove(resource, id) {
        return request('/' + resource + '/' + id, { method: 'DELETE' });
    }

    async function login(loginValue, password) {
        // Tenta primeiro na tabela "usuarios" (banco auxilioencceja)
        try {
            const result = await request('/api/usuarios');
            const usuarios = Array.isArray(result && result.data) ? result.data : [];
            const found = usuarios.find(function (u) {
                return u.email === loginValue && u.senha === password;
            });
            if (found) {
                // Normaliza para o formato esperado pelo frontend
                const user = {
                    id: found.id_usuario,
                    id_usuario: found.id_usuario,
                    name: found.nome,
                    nome: found.nome,
                    login: found.email,
                    email: found.email,
                    password: found.senha,
                    senha: found.senha,
                    nivel: found.nivel,
                    pontos_xp: found.pontos_xp,
                    dias_ativos: found.dias_ativos,
                    progresso_geral: found.progresso_geral,
                    matricula: found.matricula,
                    foto_perfil: found.foto_perfil,
                    status_conta: found.status_conta
                };
                setCurrentUser(user);
                return user;
            }
        } catch (e) {
            // Silencia e tenta tabela legada
        }

        // Fallback: tabela "users" legada
        const users = await list('users');
        const user = users.find(function (item) {
            return item.login === loginValue && item.password === password;
        });

        if (!user) {
            throw new Error('E-mail ou senha inválidos.');
        }

        setCurrentUser(user);
        return user;
    }

    function validateRegisterPayload(payload) {
        const name = String(payload.name || '').trim();
        const login = String(payload.login || '').trim().toLowerCase();
        const password = String(payload.password || '');

        if (!name || name.length < 3) {
            throw new Error('Informe o nome completo com pelo menos 3 caracteres.');
        }
        if (!login || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login)) {
            throw new Error('Informe um e-mail válido.');
        }
        if (password.length < 8) {
            throw new Error('A senha deve ter no mínimo 8 caracteres.');
        }
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            throw new Error('A senha deve conter letras maiúsculas, minúsculas e números.');
        }
        return { name, login, password };
    }

    async function register(payload) {
        const validated = validateRegisterPayload(payload);

        await create('users', {
            name: validated.name,
            login: validated.login,
            password: validated.password
        });

        if (payload.extra) {
            setProfileExtra(payload.extra);
        }

        return login(validated.login, validated.password);
    }

    async function updateProfile(updates) {
        const user = getCurrentUser();
        if (!user || !user.id) {
            throw new Error('Usuário não autenticado.');
        }

        const body = {};
        if (updates.name !== undefined) body.name = updates.name;
        if (updates.login !== undefined) body.login = updates.login;
        if (updates.password !== undefined) body.password = updates.password;

        if (Object.keys(body).length) {
            await update('users', user.id, body);
            const refreshed = await get('users', user.id);
            if (refreshed) {
                setCurrentUser(refreshed);
            } else {
                setCurrentUser({ ...user, ...body });
            }
        }

        if (updates.extra) {
            setProfileExtra({ ...getProfileExtra(), ...updates.extra });
        }

        return getCurrentUser();
    }

    async function changePassword(currentPassword, newPassword) {
        const user = getCurrentUser();
        if (!user) {
            throw new Error('Usuário não autenticado.');
        }

        if (user.password !== currentPassword) {
            throw new Error('Senha atual incorreta.');
        }

        return updateProfile({ password: newPassword });
    }

    async function deleteAccount() {
        const user = getCurrentUser();
        if (!user || !user.id) {
            throw new Error('Usuário não autenticado.');
        }

        await remove('users', user.id);
        clearCurrentUser();
    }

    async function sendMensagem(mensagem, meta) {
        meta = meta || {};
        const user = getCurrentUser();

        return create('mensagens', {
            iduser: (user && user.id) || meta.iduser || 0,
            idclient: meta.idclient || 0,
            mensagem: mensagem,
            visualizado: false
        });
    }

    function buildContactMessage(fields, pageLabel) {
        const prefix = pageLabel ? '[' + pageLabel + ']' : '[Contato - Auxílio Encceja]';
        const lines = [
            prefix,
            'Nome: ' + (fields.name || '-'),
            'E-mail: ' + (fields.email || '-'),
            'Telefone: ' + (fields.phone || '-'),
            'Assunto: ' + (fields.subject || '-'),
            '',
            fields.message || ''
        ];
        return lines.join('\n');
    }

    function readContactFields(form) {
        const get = function (id) {
            const el = form.querySelector('#' + id) || form.querySelector('[name="' + id + '"]');
            return el ? String(el.value || '').trim() : '';
        };
        return {
            name: get('name'),
            email: get('email'),
            phone: get('phone'),
            subject: get('subject') || document.title || 'Contato',
            message: get('message')
        };
    }

    async function submitPageContact(form, pageLabel) {
        const fields = readContactFields(form);
        if (!fields.name || !fields.email || !fields.message) {
            throw new Error('Preencha nome, e-mail e mensagem.');
        }
        const texto = buildContactMessage(fields, pageLabel);
        await sendMensagem(texto, { idclient: 0 });
        return fields;
    }

    function isTarefaConcluida(tarefa) {
        const v = tarefa && tarefa.statustarefa;
        return v === true || v === 1 || v === '1';
    }

    async function listTarefas() {
        return list('tarefas');
    }

    async function updateTarefa(id, data) {
        return update('tarefas', id, data);
    }

    async function toggleTarefa(tarefa) {
        return updateTarefa(tarefa.id, {
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            tempo: tarefa.tempo,
            flagurgente: tarefa.flagurgente,
            flagopcional: tarefa.flagopcional,
            statustarefa: !isTarefaConcluida(tarefa)
        });
    }

    async function getAcompanhamento(userId) {
        const user = getCurrentUser();
        const id = userId || (user && user.id) || 1;
        const result = await request('/api/acompanhamento/' + id);
        return result && result.data ? result.data : result;
    }

    async function updateAcompanhamentoAtividade(activityId, updates, userId) {
        const user = getCurrentUser();
        const id = userId || (user && user.id) || 1;
        const result = await request('/api/acompanhamento/' + id + '/atividades/' + activityId, {
            method: 'PUT',
            body: JSON.stringify(updates || {})
        });
        return result && result.data ? result.data : result;
    }

    window.Api = {
        baseUrl: API_BASE_URL,
        request,
        list,
        get,
        create,
        update,
        remove,
        login,
        register,
        validateRegisterPayload,
        updateProfile,
        changePassword,
        deleteAccount,
        sendMensagem,
        buildContactMessage,
        readContactFields,
        submitPageContact,
        listTarefas,
        updateTarefa,
        toggleTarefa,
        isTarefaConcluida,
        getAcompanhamento,
        updateAcompanhamentoAtividade,
        getCurrentUser,
        setCurrentUser,
        clearCurrentUser,
        logout,
        getProfileExtra,
        setProfileExtra,
        requireAuth
    };
})();
