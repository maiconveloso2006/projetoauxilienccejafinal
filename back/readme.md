# Auxílio Encceja — Backend

Backend principal do projeto. A pasta `back` é o único backend mantido no projeto.

## Banco local

O backend está configurado por padrão para **MySQL/MariaDB**, compatível com o XAMPP e o phpMyAdmin:

- Host: `localhost`
- Porta: `3306`
- Usuário: `root`
- Senha: vazia (padrão do XAMPP)
- Banco: `auxilioencceja`

Importe primeiro o arquivo `web/banco de dados/auxilioencceja.sql` pelo phpMyAdmin.

## Executar

```bash
npm install
npm start
```

Depois acesse:

`http://localhost:3600/login.html`

## Cadastro

A tela de cadastro grava diretamente na tabela `usuarios` do banco `auxilioencceja`.

## Progresso

Os eventos de estudo são gravados no MySQL e relacionados ao `id_usuario` do aluno.
