const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeString(value) {
    return typeof value === 'string' ? value.trim() : '';
}

function validatePassword(password) {
    const pw = normalizeString(password);
    if (pw.length < 8) {
        return 'A senha deve ter no mínimo 8 caracteres.';
    }
    if (!/[a-z]/.test(pw)) {
        return 'A senha deve conter pelo menos uma letra minúscula.';
    }
    if (!/[A-Z]/.test(pw)) {
        return 'A senha deve conter pelo menos uma letra maiúscula.';
    }
    if (!/[0-9]/.test(pw)) {
        return 'A senha deve conter pelo menos um número.';
    }
    return null;
}

function validateUserCreatePayload(payload) {
    if (!payload || typeof payload !== 'object') {
        return { ok: false, message: 'Dados do usuário não informados.' };
    }

    const name = normalizeString(payload.name);
    const login = normalizeString(payload.login).toLowerCase();
    const password = normalizeString(payload.password);

    if (!name || name.length < 3) {
        return { ok: false, message: 'Informe o nome completo com pelo menos 3 caracteres.' };
    }

    if (!login) {
        return { ok: false, message: 'Informe um e-mail válido.' };
    }

    if (!EMAIL_REGEX.test(login)) {
        return { ok: false, message: 'O e-mail informado não é válido.' };
    }

    if (!password) {
        return { ok: false, message: 'Informe uma senha.' };
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
        return { ok: false, message: passwordError };
    }

    return {
        ok: true,
        data: { name, login, password }
    };
}

module.exports = {
    validateUserCreatePayload,
    validatePassword,
    EMAIL_REGEX
};
