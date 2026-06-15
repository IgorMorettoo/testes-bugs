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

## Justificativa das Tecnologias Utilizadas

### Frontend

#### Next.js

O Next.js foi utilizado por ser o framework principal da aplicação frontend. Ele fornece a estrutura necessária para criação de páginas, componentes e rotas, além de oferecer integração nativa com React.

#### React

O React é responsável pela construção da interface da aplicação através de componentes reutilizáveis, facilitando a organização e manutenção do código.

#### TypeScript

O TypeScript foi utilizado para adicionar tipagem estática ao projeto, reduzindo erros durante o desenvolvimento e tornando o código mais seguro e legível.

#### Jest

O Jest foi utilizado como framework de testes do frontend. Sua função é executar os testes automatizados e validar os resultados esperados.

Foi escolhido por ser uma das ferramentas mais utilizadas no ecossistema React e por possuir integração simples com projetos Next.js.

#### Testing Library

A Testing Library foi utilizada para testar componentes e fluxos da aplicação simulando interações reais do usuário.

Com ela foi possível validar ações como:

- Renderização de componentes
- Cliques em botões
- Alterações na interface
- Mensagens exibidas ao usuário

Sua principal vantagem é focar no comportamento da aplicação ao invés de detalhes internos da implementação.

---

### Backend

#### Spring Boot

O Spring Boot foi utilizado como framework principal da API.

Ele simplifica a criação de aplicações Java, oferecendo recursos para desenvolvimento de APIs REST, gerenciamento de dependências e integração com banco de dados.

#### JUnit 5

O JUnit 5 foi utilizado para criação dos testes automatizados do backend.

Sua função é validar o comportamento dos métodos e endpoints da aplicação através de testes unitários e de integração.

#### MockMvc

O MockMvc foi utilizado para simular requisições HTTP sem a necessidade de iniciar o servidor manualmente.

Com ele foi possível:

- Enviar requisições POST
- Validar códigos de status HTTP
- Validar respostas JSON
- Testar os endpoints da API de forma automatizada

#### H2 Database

O banco H2 foi utilizado durante os testes por ser um banco em memória.

Isso permite que os testes sejam executados de forma rápida e isolada, sem depender de um banco de dados externo.

#### Observação

No frontend o Jest procura automaticamente arquivos com o padrão .test.ts e .test.tsx. Já no backend o Maven procura classes dentro de src/test/java e o JUnit executa todos os métodos marcados com a anotação @Test

---

## Benefícios Obtidos

A utilização dessas tecnologias permitiu:

- Automatizar a validação dos requisitos da aplicação;
- Identificar bugs de forma rápida;
- Garantir maior confiabilidade durante futuras alterações;
- Facilitar a manutenção do sistema;
- Aplicar na prática conceitos de testes unitários, integração e regressão.

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

Caso não executar:
mvnw.cmd -v
set JAVA_HOME=C:\Program Files\Java\jdk-17
set PATH=%JAVA_HOME%\bin;%PATH%
mvnw.cmd test
```

---

# Atividade 5 - Testes End-to-End (E2E) e de API

## Objetivo

Expandir a cobertura de testes da aplicação SQA Social Media através da implementação de testes End-to-End (E2E) e testes de API utilizando o framework Playwright.

Diferentemente da Atividade 4, que focou em testes de caixa branca (unitários e integração), esta etapa teve como objetivo validar o comportamento da aplicação em execução, simulando ações reais de usuários e consumindo diretamente os endpoints disponibilizados pela API.

---

## Ferramentas Utilizadas

### Playwright

O Playwright foi utilizado para a implementação dos testes E2E e de API.

A ferramenta foi escolhida por permitir:

* Automação de navegadores modernos;
* Simulação de interações reais do usuário;
* Execução de testes de API sem necessidade de ferramentas externas;
* Geração automática de relatórios;
* Integração com TypeScript.

---

## Estrutura dos Testes

```text
tests
├── e2e.spec.ts
└── api.spec.ts
```

### e2e.spec.ts

Responsável pelos testes End-to-End da aplicação.

### api.spec.ts

Responsável pelos testes de API realizados diretamente nos endpoints do backend.

---

## Testes End-to-End (E2E)

### Cadastro de Usuário

Objetivo:

Validar o fluxo completo de criação de conta.

Fluxo testado:

1. Acessar a página de cadastro;
2. Informar e-mail válido;
3. Informar senha;
4. Confirmar senha;
5. Criar conta;
6. Verificar redirecionamento para o Feed de Posts.

Resultado esperado:

```text
Feed de Posts
```

---

### Curtida de Postagem

Objetivo:

Validar que um usuário autenticado consegue interagir com uma postagem.

Fluxo testado:

1. Criar uma conta;
2. Acessar o Feed;
3. Clicar no botão "Curtir";
4. Verificar alteração do estado do botão.

Resultado esperado:

```text
Curtir → Curtido
```

---

## Testes de API

### Cadastro com Sucesso

Endpoint:

```http
POST /auth/signup
```

Valida:

* Status HTTP 200;
* Retorno dos dados do usuário criado.

---

### Cadastro com E-mail Duplicado

Endpoint:

```http
POST /auth/signup
```

Valida:

* Status HTTP 409;
* Mensagem "E-mail já está em uso".

---

### Login com Sucesso

Endpoint:

```http
POST /auth/signin
```

Valida:

* Status HTTP 200;
* Retorno do usuário autenticado.

---

### Login com Credenciais Inválidas

Endpoint:

```http
POST /auth/signin
```

Valida:

* Status HTTP 401;
* Mensagem "Credenciais inválidas".

---

## Banco de Dados

Foi utilizado MySQL para armazenamento dos dados gerados durante a execução dos testes.

As tabelas foram criadas automaticamente pelo Hibernate através da configuração:

```properties
spring.jpa.hibernate.ddl-auto=update
```

Tabelas geradas:

```text
user_table
user_post_reaction
```

---

## Resultados Obtidos - Atividade 5

| Tipo de Teste | Quantidade |
| ------------- | ---------- |
| Testes E2E    | 2          |
| Testes de API | 4          |
| Total         | 6          |

Resultado da execução:

```text
Running 6 tests

6 passed
```

Todos os testes foram executados com sucesso, validando os principais fluxos da aplicação e os comportamentos esperados da API.


## Considerações Finais

A atividade permitiu aplicar na prática conceitos de testes unitários, testes de integração e testes de regressão, demonstrando a importância da automação na validação de requisitos e na identificação de falhas durante o desenvolvimento de software.

Além da validação de funcionalidades já implementadas, os testes desenvolvidos também foram capazes de evidenciar bugs existentes na aplicação, contribuindo para a melhoria da qualidade do sistema e para futuras manutenções.

Além dos testes unitários e de integração desenvolvidos na Atividade 4, foram implementados testes End-to-End e testes de API utilizando Playwright, ampliando a cobertura da aplicação e validando o comportamento do sistema de ponta a ponta, desde a interface do usuário até os endpoints do backend.
