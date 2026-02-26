# Projeto Accenture QA - Desafio DemoQA

Este projeto contém a automação de testes para o site [demoqa.com](https://demoqa.com/), desenvolvida como parte do desafio técnico da Accenture.

## 🚀 Tecnologias Utilizadas

- **Cypress**: Framework de automação de testes end-to-end.
- **Cucumber (Gherkin)**: Utilizado para escrita de testes em BDD (Behavior Driven Development).
- **JavaScript**: Linguagem base para os testes.
- **Page Object Model (POM)**: Padrão de projeto utilizado para organização e manutenção do código.

## 📂 Estrutura do Projeto

- `cypress/e2e/features/`: Arquivos de funcionalidade (Gherkin).
- `cypress/support/step_definitions/`: Implementação dos passos dos testes.
- `cypress/support/pages/`: Classes de Page Objects.
- `cypress/support/api/`: Helpers para interação com a API.

## ✅ Funcionalidades Automatizadas

1.  **API Challenge**: Fluxo completo de criação de usuário, geração de token e aluguel de livros na BookStore API.
2.  **Practice Form**: Preenchimento de formulário com dados aleatórios e upload de arquivo.
3.  **Browser Windows**: Manipulação de novas janelas e validação de conteúdo.
4.  **Web Tables**: Operações de CRUD e criação dinâmica de 12 registros (Bônus).
5.  **Progress Bar**: Controle de progresso (parar em 25%) e reset em 100%.
6.  **Sortable**: Validação de ordenação de elementos.

## 🛠️ Como Executar os Testes

1.  **Instalação**:
    No diretório raiz do projeto, instale as dependências:
    ```bash
    npm install
    ```

2.  **Executar via Terminal (Headless)**:
    ```bash
    npx cypress run
    ```

3.  **Executar via Interface Gráfica**:
    ```bash
    npx cypress open
    ```

---
Desenvolvido por **Allan Lavorat**
