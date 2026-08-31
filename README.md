# API Connect – Gerenciamento de Usuários (MVP)

API RESTful desenvolvida como Produto Mínimo Viável (MVP) para uma plataforma de gerenciamento de usuários de uma startup de tecnologia. A aplicação fornece serviços padronizados de criação, leitura, atualização e remoção de registros (CRUD), operando sob o protocolo HTTP e serialização em JSON.

---

## Tecnologias e Ferramentas

* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Express**: Microframework para gerenciamento de rotas, middlewares e requisições HTTP.
* **CORS**: Middleware para liberação de políticas de acesso para clientes web.
* **Nodemon**: Utilitário de monitoramento em ambiente de desenvolvimento.
* **Git & GitHub**: Controle de versão e documentação de código.

---

## Arquitetura de Diretórios

O projeto adota o princípio de Separação de Responsabilidades (SoC):

```text
api-connect-users/
├── src/
│   ├── controllers/
│   │   └── userController.js  # Lógica de negócio e validações
│   ├── data/
│   │   └── database.js        # Simulação de persistência em memória
│   ├── routes/
│   │   └── userRoutes.js      # Declaração dos endpoints e verbos HTTP
│   └── server.js              # Ponto de entrada e configuração do servidor
├── .gitignore
├── package.json
└── README.md
