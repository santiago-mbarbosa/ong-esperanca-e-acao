# ONG Esperança e Ação

Projeto desenvolvido na disciplina de Desenvolvimento Front-end, com o objetivo de criar uma interface web para uma organização não governamental.

## Sobre o projeto

A aplicação apresenta informações sobre a ONG, campanhas de doação, voluntariado e um formulário de cadastro. O projeto utiliza JavaScript para criar uma interface dinâmica, com navegação em formato SPA, validação de formulário e armazenamento local dos dados.

## Estrutura do projeto

- `html/` — páginas HTML da aplicação.
- `css/` — arquivos de estilização.
- `imagens/` — recursos gráficos.
- `js/` — módulos JavaScript da aplicação.

### Módulos JavaScript

- `main.js` — ponto de entrada e coordenação da aplicação.
- `navegacao.js` — templates e renderização das páginas.
- `formulario.js` — validação e processamento do formulário.
- `mascaras.js` — máscaras de CPF, telefone e CEP.
- `armazenamento.js` — armazenamento e recuperação de dados no `localStorage`.

## Funcionalidades

- Navegação dinâmica entre as seções da aplicação.
- Templates dinâmicos utilizando JavaScript.
- Validação de formulário.
- Máscaras para CPF, telefone e CEP.
- Armazenamento e recuperação de dados com `localStorage`.
- Interface responsiva.
- Navegação por teclado.
- Elementos semânticos e textos alternativos para imagens.

## Acessibilidade

Foram realizados testes de acessibilidade utilizando o Lighthouse do Google Chrome, obtendo pontuação de 100/100 na categoria Accessibility.

Também foram realizados testes manuais de navegação utilizando as teclas `Tab` e `Enter`, verificando o foco visual dos elementos, a estrutura semântica, os textos alternativos das imagens e a associação entre `label` e campos do formulário.

## Versionamento

O projeto utiliza Git para controle de versões, seguindo uma estrutura baseada no GitFlow:

- `main` — versão estável do projeto.
- `develop` — ambiente de desenvolvimento.
- `feature/*` — desenvolvimento de funcionalidades específicas.

Os commits utilizam mensagens semânticas para facilitar a identificação das alterações realizadas.

## Execução

Para executar o projeto localmente, abra a pasta no Visual Studio Code e utilize uma extensão como o Live Server para iniciar a aplicação no navegador.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git
- Visual Studio Code
