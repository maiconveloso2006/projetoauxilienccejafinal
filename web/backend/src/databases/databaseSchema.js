
class DatabaseSchema {
    static async initialize(dbStrategy) {
        console.log("Verificando estrutura do banco de dados...");

        const queries = [
            // ── Tabelas legadas da API (mantidas para compatibilidade) ─────────
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                login TEXT NOT NULL,
                password TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS estados (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                estado TEXT NOT NULL,
                regiao TEXT NULL,
                uf TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS municipios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                municipio TEXT NOT NULL,
                uf TEXT NOT NULL,
                populacao INTEGER
            )`,
            `CREATE TABLE IF NOT EXISTS bairros (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                bairro TEXT NOT NULL,
                regiao TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS dependencias (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                dependencia TEXT NOT NULL,
                capacidade TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS alunos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                telefone TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS cursos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                curso TEXT NOT NULL,
                duracao TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS clientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                cpf TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS logradouros (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                logradouro TEXT NOT NULL,
                tipo TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS docentes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                telefone TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS funcionarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                dependente TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS produtos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                estado TEXT NOT NULL,
                preco TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS disciplinas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                sigla TEXT NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS tarefas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                descricao TEXT,
                tempo INTEGER,
                flagurgente BOOLEAN DEFAULT FALSE,
                flagopcional BOOLEAN DEFAULT FALSE,
                statustarefa BOOLEAN DEFAULT FALSE
            )`,
            `CREATE TABLE IF NOT EXISTS mensagens (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                iduser INTEGER DEFAULT 0,
                idclient INTEGER DEFAULT 0,
                mensagem TEXT NOT NULL,
                visualizado BOOLEAN DEFAULT FALSE
            )`,

            // ── Tabelas do auxilioencceja ──────────────────────────────────────

            `CREATE TABLE IF NOT EXISTS perfis (
                id_perfil INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL
            )`,

            `CREATE TABLE IF NOT EXISTS turmas (
                id_turma INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_turma TEXT,
                ano INTEGER,
                descricao TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS conquistas (
                id_conquista INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                descricao TEXT,
                xp_recompensa INTEGER
            )`,

            `CREATE TABLE IF NOT EXISTS usuarios (
                id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL,
                cpf TEXT UNIQUE,
                data_nascimento TEXT,
                foto_perfil TEXT,
                nivel TEXT DEFAULT 'Basico',
                pontos_xp INTEGER DEFAULT 0,
                dias_ativos INTEGER DEFAULT 0,
                progresso_geral REAL DEFAULT 0,
                matricula TEXT UNIQUE,
                status_conta TEXT DEFAULT 'ATIVA',
                criado_em TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS usuario_perfis (
                id_usuario INTEGER NOT NULL,
                id_perfil INTEGER NOT NULL,
                PRIMARY KEY (id_usuario, id_perfil)
            )`,

            `CREATE TABLE IF NOT EXISTS usuario_turma (
                id_usuario_turma INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_turma INTEGER
            )`,

            `CREATE TABLE IF NOT EXISTS configuracoes_usuario (
                id_config INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER UNIQUE,
                tema TEXT DEFAULT 'CLARO',
                notificacoes_email INTEGER DEFAULT 1,
                notificacoes_push INTEGER DEFAULT 1,
                acessibilidade INTEGER DEFAULT 0,
                autenticacao_2f INTEGER DEFAULT 0
            )`,

            `CREATE TABLE IF NOT EXISTS historico_login (
                id_historico INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                ip TEXT,
                dispositivo TEXT,
                navegador TEXT,
                status_login TEXT,
                data_login TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS sessoes_usuario (
                id_sessao INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                dispositivo TEXT,
                ip TEXT,
                navegador TEXT,
                data_login TEXT DEFAULT CURRENT_TIMESTAMP,
                ativo INTEGER DEFAULT 1,
                refresh_token TEXT,
                expira_em TEXT,
                ultima_atividade TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS refresh_tokens (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                token TEXT,
                expira_em TEXT,
                revogado INTEGER DEFAULT 0
            )`,

            `CREATE TABLE IF NOT EXISTS recuperacao_senha (
                id_recuperacao INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER NOT NULL,
                token TEXT NOT NULL,
                expira_em TEXT NOT NULL,
                usado INTEGER DEFAULT 0,
                criado_em TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS notificacoes (
                id_notificacao INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                titulo TEXT,
                mensagem TEXT,
                lida INTEGER DEFAULT 0,
                criada_em TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS materias (
                id_materia INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_materia TEXT NOT NULL,
                descricao TEXT,
                icone TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS materiais (
                id_material INTEGER PRIMARY KEY AUTOINCREMENT,
                id_materia INTEGER,
                titulo TEXT,
                descricao TEXT,
                tipo TEXT,
                link_arquivo TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS atividades (
                id_atividade INTEGER PRIMARY KEY AUTOINCREMENT,
                id_materia INTEGER,
                titulo TEXT,
                descricao TEXT,
                tipo TEXT,
                xp_recompensa INTEGER DEFAULT 0,
                data_criacao TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS questoes (
                id_questao INTEGER PRIMARY KEY AUTOINCREMENT,
                id_materia INTEGER NOT NULL,
                enunciado TEXT NOT NULL,
                nivel TEXT,
                explicacao TEXT,
                ativa INTEGER DEFAULT 1,
                criado_em TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS alternativas (
                id_alternativa INTEGER PRIMARY KEY AUTOINCREMENT,
                id_questao INTEGER,
                texto TEXT,
                correta INTEGER DEFAULT 0
            )`,

            `CREATE TABLE IF NOT EXISTS simulados (
                id_simulado INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT,
                descricao TEXT,
                tempo_minutos INTEGER,
                ativo INTEGER DEFAULT 1
            )`,

            `CREATE TABLE IF NOT EXISTS simulado_questoes (
                id_simulado INTEGER NOT NULL,
                id_questao INTEGER NOT NULL,
                PRIMARY KEY (id_simulado, id_questao)
            )`,

            `CREATE TABLE IF NOT EXISTS tentativas_simulado (
                id_tentativa INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_simulado INTEGER,
                nota REAL,
                acertos INTEGER,
                erros INTEGER,
                tempo_gasto INTEGER,
                iniciado_em TEXT,
                finalizado_em TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS progresso_estudos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_materia INTEGER,
                questoes_respondidas INTEGER DEFAULT 0,
                acertos INTEGER DEFAULT 0,
                erros INTEGER DEFAULT 0,
                percentual REAL DEFAULT 0
            )`,

            `CREATE TABLE IF NOT EXISTS progresso_materias (
                id_progresso INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_materia INTEGER,
                percentual REAL DEFAULT 0,
                media REAL DEFAULT 0,
                atividades_concluidas INTEGER DEFAULT 0,
                atividades_pendentes INTEGER DEFAULT 0
            )`,

            `CREATE TABLE IF NOT EXISTS usuario_atividades (
                id_usuario_atividade INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_atividade INTEGER,
                status TEXT DEFAULT 'PENDENTE',
                nota REAL,
                concluido_em TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS respostas_usuario (
                id_resposta INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_questao INTEGER,
                id_alternativa INTEGER,
                correta INTEGER,
                respondida_em TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS ranking_usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                pontos INTEGER DEFAULT 0,
                posicao INTEGER
            )`,

            `CREATE TABLE IF NOT EXISTS certificados (
                id_certificado INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                codigo TEXT,
                emitido_em TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS usuario_conquistas (
                id_usuario_conquista INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                id_conquista INTEGER,
                conquistado_em TEXT DEFAULT CURRENT_TIMESTAMP
            )`,

            `CREATE TABLE IF NOT EXISTS logs_admin (
                id_log INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER,
                acao TEXT,
                tabela_afetada TEXT,
                data_evento TEXT
            )`,

            `CREATE TABLE IF NOT EXISTS auditoria (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tabela_nome TEXT,
                registro_id INTEGER,
                operacao TEXT,
                valores_antigos TEXT,
                valores_novos TEXT,
                criado_em TEXT
            )`
        ];

        for (const query of queries) {
            await dbStrategy.execute(query);
        }

        console.log("Estrutura do banco de dados verificada.");
    }

    /**
     * Inicializa o schema no MySQL usando IF NOT EXISTS para não sobrescrever dados.
     * Equivalente ao initialize() mas com sintaxe MySQL.
     */
    static async initializeMySQL(dbStrategy) {
        console.log("Verificando estrutura do banco MySQL...");

        const queries = [
            `CREATE TABLE IF NOT EXISTS users (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                login VARCHAR(150) NOT NULL,
                password VARCHAR(255) NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS perfis (
                id_perfil INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(50) NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS turmas (
                id_turma INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome_turma VARCHAR(100),
                ano INT,
                descricao TEXT
            )`,
            `CREATE TABLE IF NOT EXISTS conquistas (
                id_conquista INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100),
                descricao TEXT,
                xp_recompensa INT
            )`,
            `CREATE TABLE IF NOT EXISTS usuarios (
                id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(150) NOT NULL,
                email VARCHAR(150) NOT NULL UNIQUE,
                senha VARCHAR(255) NOT NULL,
                cpf VARCHAR(14) UNIQUE,
                data_nascimento DATE,
                foto_perfil VARCHAR(255),
                nivel ENUM('Básico','Intermediario','Avançado') DEFAULT 'Básico',
                pontos_xp INT DEFAULT 0,
                dias_ativos INT DEFAULT 0,
                progresso_geral DECIMAL(5,2) DEFAULT 0.00,
                matricula VARCHAR(30) UNIQUE,
                status_conta ENUM('ATIVA','INATIVA','BLOQUEADA') DEFAULT 'ATIVA',
                criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS usuario_perfis (
                id_usuario INT NOT NULL,
                id_perfil INT NOT NULL,
                PRIMARY KEY (id_usuario, id_perfil)
            )`,
            `CREATE TABLE IF NOT EXISTS usuario_turma (
                id_usuario_turma INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_turma INT
            )`,
            `CREATE TABLE IF NOT EXISTS configuracoes_usuario (
                id_config INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT UNIQUE,
                tema ENUM('CLARO','ESCURO') DEFAULT 'CLARO',
                notificacoes_email TINYINT(1) DEFAULT 1,
                notificacoes_push TINYINT(1) DEFAULT 1,
                acessibilidade TINYINT(1) DEFAULT 0,
                autenticacao_2f TINYINT(1) DEFAULT 0
            )`,
            `CREATE TABLE IF NOT EXISTS historico_login (
                id_historico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                ip VARCHAR(45),
                dispositivo VARCHAR(150),
                navegador VARCHAR(100),
                status_login ENUM('SUCESSO','ERRO'),
                data_login TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS sessoes_usuario (
                id_sessao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                dispositivo VARCHAR(150),
                ip VARCHAR(45),
                navegador VARCHAR(100),
                data_login TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                ativo TINYINT(1) DEFAULT 1,
                refresh_token VARCHAR(500),
                expira_em DATETIME,
                ultima_atividade DATETIME
            )`,
            `CREATE TABLE IF NOT EXISTS refresh_tokens (
                id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                token VARCHAR(500),
                expira_em DATETIME,
                revogado TINYINT(1) DEFAULT 0
            )`,
            `CREATE TABLE IF NOT EXISTS recuperacao_senha (
                id_recuperacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT NOT NULL,
                token VARCHAR(255) NOT NULL,
                expira_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                usado TINYINT(1) DEFAULT 0,
                criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS notificacoes (
                id_notificacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                titulo VARCHAR(150),
                mensagem TEXT,
                lida TINYINT(1) DEFAULT 0,
                criada_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS materias (
                id_materia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome_materia VARCHAR(100) NOT NULL,
                descricao TEXT,
                icone VARCHAR(100)
            )`,
            `CREATE TABLE IF NOT EXISTS materiais (
                id_material INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_materia INT,
                titulo VARCHAR(150),
                descricao TEXT,
                tipo ENUM('PDF','VIDEO','APOSTILA'),
                link_arquivo VARCHAR(255)
            )`,
            `CREATE TABLE IF NOT EXISTS atividades (
                id_atividade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_materia INT,
                titulo VARCHAR(150),
                descricao TEXT,
                tipo ENUM('QUIZ','VIDEO','PDF','EXERCICIO'),
                xp_recompensa INT DEFAULT 0,
                data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS questoes (
                id_questao BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_materia INT NOT NULL,
                enunciado TEXT NOT NULL,
                nivel ENUM('FACIL','MEDIO','DIFICIL'),
                explicacao TEXT,
                ativa TINYINT(1) DEFAULT 1,
                criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS alternativas (
                id_alternativa BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_questao BIGINT,
                texto TEXT,
                correta TINYINT(1) DEFAULT 0
            )`,
            `CREATE TABLE IF NOT EXISTS simulados (
                id_simulado BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                titulo VARCHAR(200),
                descricao TEXT,
                tempo_minutos INT,
                ativo TINYINT(1) DEFAULT 1
            )`,
            `CREATE TABLE IF NOT EXISTS simulado_questoes (
                id_simulado BIGINT NOT NULL,
                id_questao BIGINT NOT NULL,
                PRIMARY KEY (id_simulado, id_questao)
            )`,
            `CREATE TABLE IF NOT EXISTS tentativas_simulado (
                id_tentativa BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_simulado BIGINT,
                nota DECIMAL(5,2),
                acertos INT,
                erros INT,
                tempo_gasto INT,
                iniciado_em DATETIME,
                finalizado_em DATETIME
            )`,
            `CREATE TABLE IF NOT EXISTS progresso_estudos (
                id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_materia INT,
                questoes_respondidas INT DEFAULT 0,
                acertos INT DEFAULT 0,
                erros INT DEFAULT 0,
                percentual DECIMAL(5,2) DEFAULT 0
            )`,
            `CREATE TABLE IF NOT EXISTS progresso_materias (
                id_progresso INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_materia INT,
                percentual DECIMAL(5,2) DEFAULT 0.00,
                media DECIMAL(5,2) DEFAULT 0.00,
                atividades_concluidas INT DEFAULT 0,
                atividades_pendentes INT DEFAULT 0
            )`,
            `CREATE TABLE IF NOT EXISTS usuario_atividades (
                id_usuario_atividade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_atividade INT,
                status ENUM('PENDENTE','CONCLUIDA') DEFAULT 'PENDENTE',
                nota DECIMAL(5,2),
                concluido_em TIMESTAMP NULL
            )`,
            `CREATE TABLE IF NOT EXISTS respostas_usuario (
                id_resposta BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_questao BIGINT,
                id_alternativa BIGINT,
                correta TINYINT(1),
                respondida_em DATETIME
            )`,
            `CREATE TABLE IF NOT EXISTS ranking_usuarios (
                id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                pontos BIGINT DEFAULT 0,
                posicao INT
            )`,
            `CREATE TABLE IF NOT EXISTS certificados (
                id_certificado BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                codigo VARCHAR(100),
                emitido_em DATETIME
            )`,
            `CREATE TABLE IF NOT EXISTS usuario_conquistas (
                id_usuario_conquista INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                id_conquista INT,
                conquistado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS logs_admin (
                id_log BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                id_usuario INT,
                acao VARCHAR(200),
                tabela_afetada VARCHAR(100),
                data_evento DATETIME
            )`,
            `CREATE TABLE IF NOT EXISTS auditoria (
                id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                tabela_nome VARCHAR(100),
                registro_id BIGINT,
                operacao ENUM('INSERT','UPDATE','DELETE'),
                valores_antigos JSON,
                valores_novos JSON,
                criado_em DATETIME
            )`,
            `CREATE TABLE IF NOT EXISTS tarefas (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                titulo VARCHAR(150) NOT NULL,
                descricao TEXT,
                tempo INT,
                flagurgente TINYINT(1) DEFAULT 0,
                flagopcional TINYINT(1) DEFAULT 0,
                statustarefa TINYINT(1) DEFAULT 0
            )`,
            `CREATE TABLE IF NOT EXISTS mensagens (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                iduser INT DEFAULT 0,
                idclient INT DEFAULT 0,
                mensagem TEXT NOT NULL,
                visualizado TINYINT(1) DEFAULT 0
            )`
        ];

        for (const query of queries) {
            try {
                await dbStrategy.execute(query);
            } catch (err) {
                // Ignora erros de tabelas já existentes com estrutura diferente
                if (!err.message || !err.message.includes('already exists')) {
                    console.warn('Aviso ao criar tabela MySQL:', err.message);
                }
            }
        }

        console.log("Estrutura do banco MySQL verificada.");
    }
}

module.exports = { DatabaseSchema };
