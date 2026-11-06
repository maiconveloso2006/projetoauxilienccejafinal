-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/06/2026 às 16:25
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `auxilioencceja`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `alternativas`
--

CREATE TABLE `alternativas` (
  `id_alternativa` bigint(20) NOT NULL,
  `id_questao` bigint(20) DEFAULT NULL,
  `texto` text DEFAULT NULL,
  `correta` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `atividades`
--

CREATE TABLE `atividades` (
  `id_atividade` int(11) NOT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `titulo` varchar(150) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `tipo` enum('QUIZ','VIDEO','PDF','EXERCICIO') DEFAULT NULL,
  `xp_recompensa` int(11) DEFAULT 0,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `auditoria`
--

CREATE TABLE `auditoria` (
  `id` bigint(20) NOT NULL,
  `tabela_nome` varchar(100) DEFAULT NULL,
  `registro_id` bigint(20) DEFAULT NULL,
  `operacao` enum('INSERT','UPDATE','DELETE') DEFAULT NULL,
  `valores_antigos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`valores_antigos`)),
  `valores_novos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`valores_novos`)),
  `criado_em` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `certificados`
--

CREATE TABLE `certificados` (
  `id_certificado` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `codigo` varchar(100) DEFAULT NULL,
  `emitido_em` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `configuracoes_usuario`
--

CREATE TABLE `configuracoes_usuario` (
  `id_config` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `tema` enum('CLARO','ESCURO') DEFAULT 'CLARO',
  `notificacoes_email` tinyint(1) DEFAULT 1,
  `notificacoes_push` tinyint(1) DEFAULT 1,
  `acessibilidade` tinyint(1) DEFAULT 0,
  `autenticacao_2f` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `conquistas`
--

CREATE TABLE `conquistas` (
  `id_conquista` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `xp_recompensa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `historico_login`
--

CREATE TABLE `historico_login` (
  `id_historico` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `dispositivo` varchar(150) DEFAULT NULL,
  `navegador` varchar(100) DEFAULT NULL,
  `status_login` enum('SUCESSO','ERRO') DEFAULT NULL,
  `data_login` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `logs_admin`
--

CREATE TABLE `logs_admin` (
  `id_log` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `acao` varchar(200) DEFAULT NULL,
  `tabela_afetada` varchar(100) DEFAULT NULL,
  `data_evento` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `materiais`
--

CREATE TABLE `materiais` (
  `id_material` int(11) NOT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `titulo` varchar(150) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `tipo` enum('PDF','VIDEO','APOSTILA') DEFAULT NULL,
  `link_arquivo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `materias`
--

CREATE TABLE `materias` (
  `id_materia` int(11) NOT NULL,
  `nome_materia` varchar(100) NOT NULL,
  `descricao` text DEFAULT NULL,
  `icone` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `notificacoes`
--

CREATE TABLE `notificacoes` (
  `id_notificacao` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `titulo` varchar(150) DEFAULT NULL,
  `mensagem` text DEFAULT NULL,
  `lida` tinyint(1) DEFAULT 0,
  `criada_em` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `perfis`
--

CREATE TABLE `perfis` (
  `id_perfil` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `progresso_estudos`
--

CREATE TABLE `progresso_estudos` (
  `id` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `questoes_respondidas` int(11) DEFAULT NULL,
  `acertos` int(11) DEFAULT NULL,
  `erros` int(11) DEFAULT NULL,
  `percentual` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `progresso_materias`
--

CREATE TABLE `progresso_materias` (
  `id_progresso` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `percentual` decimal(5,2) DEFAULT 0.00,
  `media` decimal(5,2) DEFAULT 0.00,
  `atividades_concluidas` int(11) DEFAULT 0,
  `atividades_pendentes` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `questoes`
--

CREATE TABLE `questoes` (
  `id_questao` bigint(20) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `enunciado` text NOT NULL,
  `nivel` enum('FACIL','MEDIO','DIFICIL') DEFAULT NULL,
  `explicacao` text DEFAULT NULL,
  `ativa` tinyint(1) DEFAULT 1,
  `criado_em` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ranking_usuarios`
--

CREATE TABLE `ranking_usuarios` (
  `id` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `pontos` bigint(20) DEFAULT 0,
  `posicao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `recuperacao_senha`
--

CREATE TABLE `recuperacao_senha` (
  `id_recuperacao` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expira_em` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usado` tinyint(1) DEFAULT 0,
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `expira_em` datetime DEFAULT NULL,
  `revogado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `respostas_usuario`
--

CREATE TABLE `respostas_usuario` (
  `id_resposta` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_questao` bigint(20) DEFAULT NULL,
  `id_alternativa` bigint(20) DEFAULT NULL,
  `correta` tinyint(1) DEFAULT NULL,
  `respondida_em` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `sessoes_usuario`
--

CREATE TABLE `sessoes_usuario` (
  `id_sessao` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `dispositivo` varchar(150) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `navegador` varchar(100) DEFAULT NULL,
  `data_login` timestamp NOT NULL DEFAULT current_timestamp(),
  `ativo` tinyint(1) DEFAULT 1,
  `refresh_token` varchar(500) DEFAULT NULL,
  `expira_em` datetime DEFAULT NULL,
  `ultima_atividade` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `simulados`
--

CREATE TABLE `simulados` (
  `id_simulado` bigint(20) NOT NULL,
  `titulo` varchar(200) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `tempo_minutos` int(11) DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `simulado_questoes`
--

CREATE TABLE `simulado_questoes` (
  `id_simulado` bigint(20) NOT NULL,
  `id_questao` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tentativas_simulado`
--

CREATE TABLE `tentativas_simulado` (
  `id_tentativa` bigint(20) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_simulado` bigint(20) DEFAULT NULL,
  `nota` decimal(5,2) DEFAULT NULL,
  `acertos` int(11) DEFAULT NULL,
  `erros` int(11) DEFAULT NULL,
  `tempo_gasto` int(11) DEFAULT NULL,
  `iniciado_em` datetime DEFAULT NULL,
  `finalizado_em` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `turmas`
--

CREATE TABLE `turmas` (
  `id_turma` int(11) NOT NULL,
  `nome_turma` varchar(100) DEFAULT NULL,
  `ano` int(11) DEFAULT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `nivel` enum('Básico','Intermediario','Avançado') DEFAULT 'Básico',
  `pontos_xp` int(11) DEFAULT 0,
  `dias_ativos` int(11) DEFAULT 0,
  `progresso_geral` decimal(5,2) DEFAULT 0.00,
  `matricula` varchar(30) DEFAULT NULL,
  `status_conta` enum('ATIVA','INATIVA','BLOQUEADA') DEFAULT 'ATIVA',
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_atividades`
--

CREATE TABLE `usuario_atividades` (
  `id_usuario_atividade` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_atividade` int(11) DEFAULT NULL,
  `status` enum('PENDENTE','CONCLUIDA') DEFAULT 'PENDENTE',
  `nota` decimal(5,2) DEFAULT NULL,
  `concluido_em` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_conquistas`
--

CREATE TABLE `usuario_conquistas` (
  `id_usuario_conquista` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_conquista` int(11) DEFAULT NULL,
  `conquistado_em` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_perfis`
--

CREATE TABLE `usuario_perfis` (
  `id_usuario` int(11) NOT NULL,
  `id_perfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_turma`
--

CREATE TABLE `usuario_turma` (
  `id_usuario_turma` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_turma` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_estatisticas_usuario`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_estatisticas_usuario` (
`id_usuario` int(11)
,`total_respostas` bigint(21)
,`acertos` decimal(25,0)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_ranking`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_ranking` (
`nome` varchar(150)
,`pontos` bigint(20)
,`posicao` int(11)
);

-- --------------------------------------------------------

--
-- Estrutura para view `vw_estatisticas_usuario`
--
DROP TABLE IF EXISTS `vw_estatisticas_usuario`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_estatisticas_usuario`  AS SELECT `respostas_usuario`.`id_usuario` AS `id_usuario`, count(0) AS `total_respostas`, sum(`respostas_usuario`.`correta`) AS `acertos` FROM `respostas_usuario` GROUP BY `respostas_usuario`.`id_usuario` ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_ranking`
--
DROP TABLE IF EXISTS `vw_ranking`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_ranking`  AS SELECT `u`.`nome` AS `nome`, `r`.`pontos` AS `pontos`, `r`.`posicao` AS `posicao` FROM (`ranking_usuarios` `r` join `usuarios` `u` on(`u`.`id_usuario` = `r`.`id_usuario`)) ;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `alternativas`
--
ALTER TABLE `alternativas`
  ADD PRIMARY KEY (`id_alternativa`);

--
-- Índices de tabela `atividades`
--
ALTER TABLE `atividades`
  ADD PRIMARY KEY (`id_atividade`),
  ADD KEY `id_materia` (`id_materia`);

--
-- Índices de tabela `auditoria`
--
ALTER TABLE `auditoria`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `certificados`
--
ALTER TABLE `certificados`
  ADD PRIMARY KEY (`id_certificado`);

--
-- Índices de tabela `configuracoes_usuario`
--
ALTER TABLE `configuracoes_usuario`
  ADD PRIMARY KEY (`id_config`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `conquistas`
--
ALTER TABLE `conquistas`
  ADD PRIMARY KEY (`id_conquista`);

--
-- Índices de tabela `historico_login`
--
ALTER TABLE `historico_login`
  ADD PRIMARY KEY (`id_historico`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `logs_admin`
--
ALTER TABLE `logs_admin`
  ADD PRIMARY KEY (`id_log`);

--
-- Índices de tabela `materiais`
--
ALTER TABLE `materiais`
  ADD PRIMARY KEY (`id_material`),
  ADD KEY `id_materia` (`id_materia`);

--
-- Índices de tabela `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id_materia`);

--
-- Índices de tabela `notificacoes`
--
ALTER TABLE `notificacoes`
  ADD PRIMARY KEY (`id_notificacao`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `perfis`
--
ALTER TABLE `perfis`
  ADD PRIMARY KEY (`id_perfil`);

--
-- Índices de tabela `progresso_estudos`
--
ALTER TABLE `progresso_estudos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `progresso_materias`
--
ALTER TABLE `progresso_materias`
  ADD PRIMARY KEY (`id_progresso`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_materia` (`id_materia`);

--
-- Índices de tabela `questoes`
--
ALTER TABLE `questoes`
  ADD PRIMARY KEY (`id_questao`),
  ADD KEY `idx_questao_materia` (`id_materia`);

--
-- Índices de tabela `ranking_usuarios`
--
ALTER TABLE `ranking_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_ranking_pontos` (`pontos`);

--
-- Índices de tabela `recuperacao_senha`
--
ALTER TABLE `recuperacao_senha`
  ADD PRIMARY KEY (`id_recuperacao`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `respostas_usuario`
--
ALTER TABLE `respostas_usuario`
  ADD PRIMARY KEY (`id_resposta`),
  ADD KEY `idx_resposta_usuario` (`id_usuario`);

--
-- Índices de tabela `sessoes_usuario`
--
ALTER TABLE `sessoes_usuario`
  ADD PRIMARY KEY (`id_sessao`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `simulados`
--
ALTER TABLE `simulados`
  ADD PRIMARY KEY (`id_simulado`);

--
-- Índices de tabela `simulado_questoes`
--
ALTER TABLE `simulado_questoes`
  ADD PRIMARY KEY (`id_simulado`,`id_questao`);

--
-- Índices de tabela `tentativas_simulado`
--
ALTER TABLE `tentativas_simulado`
  ADD PRIMARY KEY (`id_tentativa`),
  ADD KEY `idx_simulado_usuario` (`id_usuario`);

--
-- Índices de tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`id_turma`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `matricula` (`matricula`),
  ADD KEY `idx_usuario_email` (`email`);

--
-- Índices de tabela `usuario_atividades`
--
ALTER TABLE `usuario_atividades`
  ADD PRIMARY KEY (`id_usuario_atividade`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_atividade` (`id_atividade`);

--
-- Índices de tabela `usuario_conquistas`
--
ALTER TABLE `usuario_conquistas`
  ADD PRIMARY KEY (`id_usuario_conquista`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_conquista` (`id_conquista`);

--
-- Índices de tabela `usuario_perfis`
--
ALTER TABLE `usuario_perfis`
  ADD PRIMARY KEY (`id_usuario`,`id_perfil`);

--
-- Índices de tabela `usuario_turma`
--
ALTER TABLE `usuario_turma`
  ADD PRIMARY KEY (`id_usuario_turma`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_turma` (`id_turma`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alternativas`
--
ALTER TABLE `alternativas`
  MODIFY `id_alternativa` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `atividades`
--
ALTER TABLE `atividades`
  MODIFY `id_atividade` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `auditoria`
--
ALTER TABLE `auditoria`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `certificados`
--
ALTER TABLE `certificados`
  MODIFY `id_certificado` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `configuracoes_usuario`
--
ALTER TABLE `configuracoes_usuario`
  MODIFY `id_config` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `conquistas`
--
ALTER TABLE `conquistas`
  MODIFY `id_conquista` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `historico_login`
--
ALTER TABLE `historico_login`
  MODIFY `id_historico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `logs_admin`
--
ALTER TABLE `logs_admin`
  MODIFY `id_log` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `materiais`
--
ALTER TABLE `materiais`
  MODIFY `id_material` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `materias`
--
ALTER TABLE `materias`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `notificacoes`
--
ALTER TABLE `notificacoes`
  MODIFY `id_notificacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `perfis`
--
ALTER TABLE `perfis`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `progresso_estudos`
--
ALTER TABLE `progresso_estudos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `progresso_materias`
--
ALTER TABLE `progresso_materias`
  MODIFY `id_progresso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `questoes`
--
ALTER TABLE `questoes`
  MODIFY `id_questao` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ranking_usuarios`
--
ALTER TABLE `ranking_usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `recuperacao_senha`
--
ALTER TABLE `recuperacao_senha`
  MODIFY `id_recuperacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `respostas_usuario`
--
ALTER TABLE `respostas_usuario`
  MODIFY `id_resposta` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `sessoes_usuario`
--
ALTER TABLE `sessoes_usuario`
  MODIFY `id_sessao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `simulados`
--
ALTER TABLE `simulados`
  MODIFY `id_simulado` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tentativas_simulado`
--
ALTER TABLE `tentativas_simulado`
  MODIFY `id_tentativa` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `id_turma` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario_atividades`
--
ALTER TABLE `usuario_atividades`
  MODIFY `id_usuario_atividade` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario_conquistas`
--
ALTER TABLE `usuario_conquistas`
  MODIFY `id_usuario_conquista` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario_turma`
--
ALTER TABLE `usuario_turma`
  MODIFY `id_usuario_turma` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `atividades`
--
ALTER TABLE `atividades`
  ADD CONSTRAINT `atividades_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`);

--
-- Restrições para tabelas `configuracoes_usuario`
--
ALTER TABLE `configuracoes_usuario`
  ADD CONSTRAINT `configuracoes_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `historico_login`
--
ALTER TABLE `historico_login`
  ADD CONSTRAINT `historico_login_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `materiais`
--
ALTER TABLE `materiais`
  ADD CONSTRAINT `materiais_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`);

--
-- Restrições para tabelas `notificacoes`
--
ALTER TABLE `notificacoes`
  ADD CONSTRAINT `notificacoes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `progresso_materias`
--
ALTER TABLE `progresso_materias`
  ADD CONSTRAINT `progresso_materias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `progresso_materias_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`);

--
-- Restrições para tabelas `recuperacao_senha`
--
ALTER TABLE `recuperacao_senha`
  ADD CONSTRAINT `recuperacao_senha_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `respostas_usuario`
--
ALTER TABLE `respostas_usuario`
  ADD CONSTRAINT `fk_resposta_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `sessoes_usuario`
--
ALTER TABLE `sessoes_usuario`
  ADD CONSTRAINT `sessoes_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `usuario_atividades`
--
ALTER TABLE `usuario_atividades`
  ADD CONSTRAINT `usuario_atividades_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `usuario_atividades_ibfk_2` FOREIGN KEY (`id_atividade`) REFERENCES `atividades` (`id_atividade`);

--
-- Restrições para tabelas `usuario_conquistas`
--
ALTER TABLE `usuario_conquistas`
  ADD CONSTRAINT `usuario_conquistas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `usuario_conquistas_ibfk_2` FOREIGN KEY (`id_conquista`) REFERENCES `conquistas` (`id_conquista`);

--
-- Restrições para tabelas `usuario_turma`
--
ALTER TABLE `usuario_turma`
  ADD CONSTRAINT `usuario_turma_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `usuario_turma_ibfk_2` FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id_turma`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
