# Auxílio Encceja — MySQL + phpMyAdmin

## 1. Inicie o XAMPP

Inicie **Apache** e **MySQL**.

## 2. Crie/importa o banco

No phpMyAdmin, importe o arquivo:

`web/banco de dados/auxilioencceja.sql`

O próprio SQL cria o banco `auxilioencceja`.

## 3. Backend

Entre na pasta `back` e execute:

```bash
npm install
npm start
```

O projeto já vem com `back/.env` configurado para:

- MySQL: `localhost:3306`
- Usuário: `root`
- Senha: vazia (padrão do XAMPP)
- Banco: `auxilioencceja`

## 4. Cadastro

O cadastro da tela `login.html` grava diretamente na tabela `usuarios`.

Depois de cadastrar, confira no phpMyAdmin:

`auxilioencceja` → `usuarios`

## 5. Progresso

Os endpoints de progresso usam o mesmo `id_usuario` da tabela `usuarios`, então o progresso fica associado ao aluno no MySQL.
