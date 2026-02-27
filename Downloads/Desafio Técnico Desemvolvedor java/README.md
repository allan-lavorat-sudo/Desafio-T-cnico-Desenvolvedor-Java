# Sistema de Agenda de Contatos

Este repositório contém um sistema completo de agenda de contatos com backend em Node.js/Restify/Sequelize e frontend em Angular (versão 21+).

## Estrutura do projeto

```
/backend    - API RESTful (Node.js + Restify)
/frontend   - Aplicação Angular 21 (standalone components)
```

---
## Backend

### Pré-requisitos
- Node.js 18+ (ou similar)

### Como executar
1. Entre na pasta `backend`:
   ```bash
   cd backend
   ```
2. Instale dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor (padrão porta 3000):
   ```bash
   npm run start
   ```
   ou em modo de desenvolvimento com `nodemon`:
   ```bash
   npm run dev
   ```

O servidor utilizará SQLite e criará um arquivo `database.sqlite` na raiz de `backend/src`.

A API implementa as rotas:
```
POST   /contatos        # cria novo contato
GET    /contatos        # lista todos os contatos
GET    /contatos/:id    # consulta contato por id
PUT    /contatos/:id    # atualiza contato existente
DELETE /contatos/:id    # remove contato
```

A API permite CORS para uso do frontend.

---
## Frontend

### Pré-requisitos
- Node.js com npm
- Angular CLI (pode ser instalado globalmente com `npm install -g @angular/cli`)

### Como executar
1. Entre na pasta `frontend`:
   ```bash
   cd frontend
   ```
2. Instale dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento Angular:
   ```bash
   npx ng serve
   ```

Por padrão o frontend roda em `http://localhost:4200` e se comunica com a API no `http://localhost:3000`.

---
## Demonstração funcional

Com o servidor backend rodando e o frontend aberto, você poderá:

- Listar todos os contatos
- Cadastrar um novo contato (nome, telefone, e-mail, endereço e observações)
- Editar contatos existentes
- Excluir contatos
- Validações de formulário garantem campos obrigatórios e formato de e-mail válido

---
## Observações
- O código está modularizado: modelos, rotas e serviços separados.
- O frontend usa formulários reativos (Reactive Forms) e componentes standalone.

---

Sinta-se à vontade para clonar e adaptar este projeto como desejar.