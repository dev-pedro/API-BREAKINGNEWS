# API BREAKINGNEWS

## Descrição

Uma breve descrição do que é o projeto, qual problema ele resolve ou qual funcionalidade ele oferece.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (ou qualquer outro banco de dados)
- Mongoose (ou outro ORM/ODM)
- JWT (para autenticação)
- Nodemon (ouvir as mudanças no código e atualizar servidor em tempo real)
  - [nodemon](https://www.npmjs.com/package/nodemon?activeTab=readme)

## Requisitos

- Node.js (versão específica, se aplicável)
- MongoDB (ou outro banco de dados)
- Qualquer outro software necessário

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

### Instalando as Dependências

```bash
npm install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/nome_do_banco
JWT_SECRET=sua_chave_secreta
```

## Uso

### Executando o Servidor

```bash
npm start
```

### Endpoints da API

Liste e descreva os principais endpoints da API, incluindo o método HTTP, a URL, uma breve descrição e os parâmetros necessários.

#### Autenticação

- `POST /api/login`  
  Descrição: Autentica um usuário e retorna um token JWT.  
  Parâmetros:  
  
  ```json
  {
    "email": "usuario@example.com",
    "password": "senha"
  }
  ```

- `POST /api/register`  
  Descrição: Registra um novo usuário.  
  Parâmetros:  
  
  ```json
  {
    "name": "Nome do Usuário",
    "email": "usuario@example.com",
    "password": "senha"
  }
  ```

#### Recursos

- `GET /api/resource`  
  Descrição: Retorna uma lista de recursos.  
  Parâmetros: Nenhum.

- `GET /api/resource/:id`  
  Descrição: Retorna um recurso específico.  
  Parâmetros:  
  
  - `id`: ID do recurso.

- `POST /api/resource`  
  Descrição: Cria um novo recurso.  
  Parâmetros:  
  
  ```json
  {
    "nome": "Nome do Recurso",
    "descricao": "Descrição do Recurso"
  }
  ```

- `PUT /api/resource/:id`  
  Descrição: Atualiza um recurso existente.  
  Parâmetros:  
  
  ```json
  {
    "nome": "Nome do Recurso",
    "descricao": "Descrição do Recurso"
  }
  ```

- `DELETE /api/resource/:id`  
  Descrição: Deleta um recurso.  
  Parâmetros:  
  
  - `id`: ID do recurso.

## Metodologia de Trabalho com Gitflow

Este projeto utiliza a metodologia Gitflow para organizar o fluxo de trabalho com Git. Aqui está um resumo de como usamos o Gitflow:

### Branches Principais

- `main`: Contém o código de produção. Cada commit nesta branch deve ser uma versão estável.
- `develop`: Contém o código mais recente em desenvolvimento. Esta branch é onde a integração contínua ocorre e onde novas funcionalidades são mescladas após testes.

### Branches de Suporte

- `feature/*`: Utilizadas para desenvolver novas funcionalidades. Cada nova funcionalidade deve ser desenvolvida em uma branch separada. A naming convention para estas branches é `feature/nome-da-feature`.
- ```bash
  git checkout develop
  git checkout -b feature/nome-da-feature
  ```

Após finalizar a feature, a branch deve ser mesclada de volta na `develop`:

```bash
git checkout develop
git merge feature/nome-da-feature
git branch -d feature/nome-da-feature
```

`release/*`: Utilizadas para preparar novas versões de produção. Permite pequenos ajustes e testes finais antes de ir para a `main`.

```bash
git checkout develop
git checkout -b release/0.1.0
```

Após finalizar, a branch release deve ser mesclada em `main` e `develop`:

```bash
git checkout main
git merge release/0.1.0
git checkout develop
git merge release/0.1.0
git branch -d release/0.1.0
```

`hotfix/*`: Utilizadas para corrigir rapidamente erros críticos em produção. Permitem aplicar correções diretamente na `main` sem esperar por uma nova release.

```bash
git checkout main
git checkout -b hotfix/0.1.1
```

Após finalizar, a branch hotfix deve ser mesclada em `main` e `develop`:

```bash
git checkout main
git merge hotfix/0.1.1
git checkout develop
git merge hotfix/0.1.1
git branch -d hotfix/0.1.1
```

## Testes

### Executando Testes

```bash
npm test
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona Minha Feature'`)
4. Faça o push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Pedro Henrique: [dev-pedro](mailto:phenrique.coder@gmail.com)

Link do Projeto: [GitHub - dev-pedro/API-BREAKINGNEWS](https://github.com/dev-pedro/API-BREAKINGNEWS)

---
