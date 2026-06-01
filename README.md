# SQA Social Media - Testes Automatizados

## Sobre a atividade

Esta atividade teve como objetivo aplicar conceitos de testes de software em uma aplicação fullstack desenvolvida com Next.js no frontend e Spring Boot no backend.

O trabalho consistiu em analisar o comportamento da aplicação com base nos requisitos fornecidos, identificar possíveis falhas e desenvolver testes automatizados capazes de validar funcionalidades corretas e capturar bugs existentes no sistema.

---

## Tecnologias Utilizadas

### Frontend

- Next.js
- React
- TypeScript
- Jest
- Testing Library

### Backend

- Spring Boot
- JUnit 5
- MockMvc
- H2 Database

---

## Estrutura dos Testes

### Frontend

Os testes do frontend foram organizados em três categorias:

```text
src/test
├── utils
│   └── password.test.ts
├── components
│   └── Header.test.tsx
└── integration
    └── PostCard.test.tsx
```

#### Testes Unitários (Funções)

Foram desenvolvidos testes para validar as funções de verificação de senha presentes na aplicação.

Casos testados:

- Validação de senha forte
- Retorno das mensagens de validação
- Captura de bug relacionado ao tamanho mínimo da senha

#### Testes Unitários (Componentes)

Foram criados testes para validar o comportamento isolado do componente Header.

Casos testados:

- Exibição do título da aplicação
- Exibição dos botões para usuários não autenticados

#### Testes de Integração

Foram desenvolvidos testes para validar fluxos de interação do usuário utilizando o componente de posts.

Casos testados:

- Tentativa de curtir um post sem autenticação
- Curtida de um post por usuário autenticado

---

### Backend

Os testes da API foram implementados utilizando JUnit e MockMvc.

Estrutura:

```text
src/test/java/com/demoapp/demo/controller
└── AuthControllerTest.java
```

Casos testados:

- Cadastro de usuário
- Login com credenciais inválidas
- Fluxo de recuperação de senha

---

## Bugs Identificados

### Bug 1 - Validação de Senha

De acordo com os requisitos, uma senha deve possuir no mínimo 8 caracteres.

Durante a análise foi identificado que a implementação considera inválidas senhas com exatamente 8 caracteres.

Trecho responsável pelo comportamento:

```ts
password.length <= 8
```

O correto seria:

```ts
password.length < 8
```

Foi criado um teste automatizado para evidenciar essa falha.

---

### Bug 2 - Mensagem de Recuperação de Senha

O requisito estabelece que, após uma solicitação válida de recuperação de senha, a API deve retornar a mensagem:

```text
E-mail enviado com sucesso
```

Entretanto, a implementação retorna:

```text
Senha redefinida com sucesso (fake)
```

Foi desenvolvido um teste automatizado para demonstrar essa divergência entre o requisito e o comportamento atual da aplicação.

---

## Resultados Obtidos

### Frontend

| Resultado | Quantidade |
|------------|------------|
| Testes aprovados | 6 |
| Testes reprovados (bugs) | 1 |

### Backend

| Resultado | Quantidade |
|------------|------------|
| Testes aprovados | 2 |
| Testes reprovados (bugs) | 1 |

---

## Execução dos Testes

### Frontend

```bash
cd client
npm install
npm run test
```

### Backend

```bash
cd api
mvnw.cmd test
```

---

## Considerações Finais

A atividade permitiu aplicar na prática conceitos de testes unitários, testes de integração e testes de regressão, demonstrando a importância da automação na validação de requisitos e na identificação de falhas durante o desenvolvimento de software.

Além da validação de funcionalidades já implementadas, os testes desenvolvidos também foram capazes de evidenciar bugs existentes na aplicação, contribuindo para a melhoria da qualidade do sistema e para futuras manutenções.
