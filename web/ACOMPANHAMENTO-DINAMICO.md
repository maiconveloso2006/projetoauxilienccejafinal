# Acompanhamento dinâmico

O acompanhamento agora usa `/api/acompanhamento/:userId` para carregar o usuário autenticado.

Um usuário recém-cadastrado inicia com:
- Progresso geral: 0%
- Atividades concluídas: 0
- Média geral: 0%
- Dias ativos: 0
- Pontos XP: 0
- Progresso de cada matéria: 0%
- Atividades concluídas por matéria: 0

As atividades disponíveis continuam aparecendo como pendentes; isso não representa progresso já realizado.

Quando o aluno concluir exercícios/simulados e o `progress-tracker.js` registrar os eventos, os números do acompanhamento serão recalculados no MySQL para aquele `id_usuario`.
