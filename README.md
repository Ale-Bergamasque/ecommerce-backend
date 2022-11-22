![](https://i.imgur.com/xG74tOh.png)

# Desafio final individual

## Processo de entrega

Este repositório deverá servir de base para ser realizado o fork para desenvolvimento da parte de **BACKEND** do desafio.

A URL deste repositório deverá ser entregue na plataforma de alunos da Cubos Academy na página da parte de BACKEND do desafio.

A versão final do código deverá estar na branch principal do repositório.

No fork de vocês, favor alterar este README para adicionar os links correspondentes para os seguintes itens:

**Repositório de Backend**: https://github.com/Ale-Bergamasque/back-integral-m05-desafio-individual-t06

**Repositório de Frontend**: https://github.com/Ale-Bergamasque/front-integral-m05-desafio-individual-t06

**URL da aplicação funcionando**: 

E os itens abaixo, que deverão ser preenchidos apenas após a finalização do projeto: 

**Pull Request (PR) de Backend**: 

**Pull Request (PR) de Frontend**: 

Estes Pull Requests (PRs) deverão ser criados a partir da branch principal do fork correspondente de vocês daquela stack tendo como destino o repositório base da stack do desafio.

Ou seja, o Pull Request de **BACKEND** deverá ser criado a partir do fork de vocês desse repositório aqui, com destino a este repositório aqui.

E portanto o Pull Request de **FRONTEND** deverá ser criado a partir do fork de vocês do repositório base de FRONTEND desse desafio, com destino ao [repositório base de FRONTEND desse desafio](https://github.com/cubos-academy/front-integral-m05-desafio-individual-t05).

# Estórias

Desenvolver um e-commerce onde vendedores poderão criar seu market place e realizar vendas dentro da plataforma.

---
## [Dashboard] Configuração do Deploy

Na posição de **usuário do sistema**, devo ser capaz de **acessar o sistema através da internet**, afim de **usar o sistema em qualquer dispositivo com acesso a internet**.

**Critérios de aceite:**

- O frontend deverá ser hospedado na Netlify
- O backend e banco de dados deverá ser hospedado na heroku
- O frontend hospedado na netlify deverá ser integrado ao backend hospedado na heroku

---
## [Dashboard] Home e Menu

Na posição de **usuário**, desejo **visualizar uma tela inicial**, afim de **poder navegar pelo sistema**.

**Critérios de aceite:**

- A página deverá funcionar em um navegador web padrão.
- Qualquer usuário, sem que tenha realizado login, deve conseguir navegar pelo sistema
- Esta tela deverá ter uma navbar com as seguintes opções de navegação:
    - input de pesquisa e atalhos rápidos será exibida somente na tela de página inicial
    - ícones de navegação - Caso o usuário esteja deslogado, ao clicar em qualquer atalho da navbar (exceto input de pesquisa) será redirecionado para a tela de login - todos os ícones abaixo devem obedecer essa regra
        - ícone Meu Carrinho
        - ícone Meus anúncios
        - ícone Usuário
    - Botão de "Quero Vender"
- No centro da tela deve conter os cards dos anúncios dos produtos. Ao clicar em cada um dos cards o usuário deve ser direcionado para a tela de detalhamento do produto
- Na parte inferior direta da tela deve ter um contador de páginas, o contador deve ser clicável e direcionar o usuário para a página com os cards dos produtos indicados

---
## [Dashboard] Detalhamento do produto

Na posição de **usuário do sistema**, desejo **visualizar todos os detalhes de um produto cadastrado**, a fim de consultar seus dados detalhados.

**Critérios de aceite:**

- A página deverá funcionar em um navegador web padrão.
- Qualquer usuário, sem que tenha realizado login, deve conseguir navegar pelo sistema
- Navbar apenas com atalho para voltar a página anterior, logotipo e usuário
- Ao clicar no card do produto na Home deverá abrir uma nova página com todos os detalhes do produto clicado
- A página deverá mostrar 2 blocos:
    - Um bloco com as informações do produto cadastradas, como título do produto, valor, formas de pagamento, quantidade, cálculo do valor do frete, seguido de dois botões.
        - O primeiro botão de Adicionar carrinho
        - O segundo botão de Comprar agora
    - Outro bloco com a Descrição do Produto conforme informado no momento do cadastro
- Logo abaixo devem ser exibidos de forma aleatória card de produtos cadastrados para venda no sistema

---
## [Usuário] Cadastro do usuário

Na posição de **usuário do sistema**, desejo **cadastrar meus dados**, afim de **ter acesso ao sistema**.

**Critérios de aceite:**

- O cadastro deverá funcionar em formulário web que funcione em um navegador padrão
- Para acessar este formulário de cadastro não deverá ser exigida autenticação
- Os dados do cadastro deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
- O usuário poderá visualizar sua senha enquanto a escreve (Ex: Material UI Input Adornment)
- A senha do usuário deverá ser persistida utilizando algum algoritmo de criptografia confiável
- Campos necessários para o cadastro inicial (* obrigatórios):
    - Nome da loja (*)
    - Email (*)
    - Senha (*)
    - Confirmação de senha (*)
- Deverão ser informadas mensagens de erro em casos de:
    - Campos obrigatórios em branco
    - E-mail informado já existir cadastrado
- Após realizado o cadastro com sucesso o usuário deverá receber uma mensagem de confirmação e um botão para ser redirecionado para a página de Login.

---
## [Usuário] Login do usuário

Na posição de **usuário**, devo ser capaz de **realizar login na plataforma**, afim de **acessar o sistema**.

**Critérios de aceite:**

- O login do usuário deverá ser realizado em formulário web funcionando em navegador padrão
- Campos obrigatórios:
    - E-mail
    - Senha
- Deverá ser possível informar os dados de acesso (e-mail e senha) e então clicar em botão "Entrar" para realização do login
- Deverão ser informadas mensagens de erro em casos de:
    - Campos obrigatórios em branco
    - E-mail não existe no cadastro
    - Senha incorreta para o e-mail
- Criação de token de autenticação após validação dos dados (credenciais) de acesso (e-mail e senha).
- Após realização de login com sucesso, deverá ser retornado ao navegador o token de autenticação de forma que possa ser utilizado em outras funcionalidades que exigem autenticação. O usuário deverá ser redirecionado para a home do sistema

---
## [Usuário] Home e Menu

Na posição de **usuário logado no sistema**, desejo **visualizar uma tela inicial**, afim de **poder navegar pelo sistema**.

**Critérios de aceite:**

- A página deverá funcionar em um navegador web padrão.
- Apenas usuários autenticados deverão conseguir acessar esta página
- Esta tela deverá ter uma navbar com as seguintes opções de navegação:
    - input de pesquisa e atalhos rápidos será exibida somente na tela de página inicial
    - ícones de navegação:
        - ícone Meu Carrinho
        - ícone Meus anúncios - ao clicar, o usuário deve ser redirecionado para a página de gerenciamento de produto
        - ícone Usuário
    - Botão de "Quero Vender" - ao clicar, o usuário deve ser redirecionado para a tela de cadastro de um novo produto
- No centro da tela deve conter os cards dos anúncios dos produtos. Ao clicar em cada um dos cards o usuário deve ser direcionado para a tela de detalhamento do produto
- Na parte inferior direta da tela deve ter um contador de páginas

---
## [Usuário] Meus Produtos

Na posição de **usuário logado no sistema**, desejo **visualizar uma tela de gerenciamento de produto**, afim de **poder navegar pelo sistema**.

**Critérios de aceite:**

- A página deverá funcionar em um navegador web padrão.
- Apenas usuários autenticados deverão conseguir acessar esta página
- Esta tela deverá ter uma navbar
- Logo abaixo um bloco com as informações do produto
    - input de pesquisa dos produtos cadastrados que deve ser exibido somente na página de gerenciamento de produto
    - Botão de "Criar Anúncio" - ao clicar, o usuário deve ser redirecionado para a tela de cadastro de um novo produto
- No centro da tela deve conter uma tabela com as informações dos produtos cadastrados
    - Nome do produto
    - quantidade de produto em estoque
    - quantidade de produtos vendidos
    - Valor unitário do produto
- Cada produto deve ter o seu CRUD de gerenciamento de produto
    - ícone de editar - ao clicar o usuário deve ser redirecionado para a página de edição do produto
    - ícone de excluir - ao clicar deve retornar um modal para confirmação da ação e prevenção de erro - ao confirmar a ação o produto deve ser excluído da lista de produtos cadastrados
- Caso o usuário ainda não tenha realizado nenhuma cadastro de produto, deve retornar a informação de estoque vazio
- Na parte inferior direta da tela deve ter um contador de páginas, o contador deve ser clicável e direcionar o usuário para a página com os cards dos produtos indicados

---
## [Usuário] Cadastro de Produto

Na posição de **usuário do sistema**, desejo **cadastrar um novo produto**, afim de acessar suas informações no futuro.

**Critérios de aceite:**

- O cadastro deverá funcionar em formulário web que funcione em um navegador padrão
- Para acessar este formulário de cadastro deverá ser exigida autenticação
- Os dados do cadastro deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
- Todos os campos de input são necessários e obrigatórios de preenchimento para conclusão do cadastro
- Caso os limites de caracteres sejam ultrapassados, os inputs ficarão em estado de erro
- Usuário poderá adicionar somente uma foto no anúncio
- Depois que todos os campos forem preenchidos e uma imagem anexada, o botão de "Publicar anúncio" deve ficar ativo para click.
- Ao final deve ter o botão de Cancelar, quando clicado os dados informados pelo usuário devem ser apagados e o usuário redirecionado para a tela de Meus de Produtos
- Após clicar em “publicar anúncio” exibir o modal de “anúncio publicado” para informar o êxito na ação

---
## [Usuário] Edição de Produto

Na posição de **usuário do sistema**, desejo **editar as informações de cadastro produto**.

**Critérios de aceite:**
- O cadastro deverá funcionar em formulário web que funcione em um navegador padrão
- Para acessar este formulário de cadastro deverá ser exigida autenticação
- Os dados do cadastro deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
- Todos os campos de input devem vir com as informações de preenchimento
- Caso os limites de caracteres sejam ultrapassados, os inputs ficarão em estado de erro
- Usuário poderá alterar as informações já inputadas e excluir ou incluir outra foto no anúncio
- Quando todos os campos estiverem preenchidos e uma imagem anexada, o botão de "Publicar anúncio" deve ficar ativo para click.
- Ao final deve ter o botão de Cancelar, quando clicado os dados informados pelo usuário devem ser apagados e o usuário redirecionado para a tela de Meus de Produtos
    - Prevenção de erro: apresentar modal de confirmação de descarte das alterações caso o usuário não tenha salvo as alterações
- Após clicar em “publicar anúncio” exibir o modal de “anúncio publicado” para informar o êxito na ação

---
## [Geral] Style Guides

Desenvolver os componentes/variáveis de acordo com os style guides para serem reutilizados em todo sistema.

- Paleta de Cores
- Tipografia
- Botões
- Animações
- Ícones 
- Tabelas
- Modais
- Inputs
- Grid

---
## Link do Figma:

- [Figma](https://www.figma.com/file/NV2cuBGfA5GZPRpWxoY2Ur/Desafio_Academy_-_Copy?node-id=3%3A4)

---
**LEMBRE-SE**: é melhor feito do que perfeito!!!

###### tags: `módulo 5` `individual` `desafio` `final`
