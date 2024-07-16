<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Clone do Efood">
    <meta name="keywords" content="React, Redux, TypeScript, Styled Components">
    <meta name="author" content="Ana Alice Rodrigues">

</head>
<body>

<header>
    <h1>Efood Clone</h1>
    <img src="./src/assets/img/fachada01.png" alt="01" width="300" height="auto">
    <img src="./src/assets/img/fachada02.png" alt="02" width="300" height="auto">
</header>

<details>
    <summary>Índice</summary>
    <ol>
        <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
        <li><a href="#parte-tecnica">Parte Técnica</a></li>
        <li><a href="#estrutura-dos-arquivos">Estrutura dos Arquivos</a></li>
        <li><a href="#casos-de-uso">Casos de Uso</a></li>
        <li><a href="#ferramentas">Ferramentas</a></li>
        <li><a href="#contato">Contato</a></li>
    </ol>
</details>

<section id="sobre-o-projeto">
    <h2>Sobre o projeto</h2>
    <p>O projeto Efood Clone é uma réplica de uma plataforma de pedidos online, oferecendo uma experiência de compra conveniente e eficiente. A aplicação permite a navegação por diversos produtos, adicionando-os ao carrinho de compras e finalizando o pedido com facilidade.</p>
    <p>Proposta de Valor: Oferecer uma experiência de compra conveniente, com uma seleção diversificada de produtos, facilidade de navegação e processos de compra e entrega eficientes.</p>
</section>

<section id="parte-tecnica">
    <h2>Parte Técnica</h2>
    <ul>
        <li>Frontend: Utiliza React, React Router, Redux, TypeScript, Styled Components para criar uma interface moderna, responsiva e interativa.</li>
        <li>Backend: Utiliza uma API RESTful para gerenciar dados de usuários, produtos e pedidos.</li>
        <li>Ferramentas de Desenvolvimento: Utiliza ESLint e Prettier para garantir a qualidade do código e mantê-lo consistente.</li>
    </ul>
</section>

<section id="estrutura-dos-arquivos">
    <h2>Estrutura dos Arquivos</h2>
    <ul>
        <li>src/</li>
        <li>├── assets/</li>
        <li>│   ├── icon/</li>
        <li>│   │   └── lixeira.svg</li>
        <li>│   └── img/</li>
        <li>│       └── Logo-Efood/logo.png</li>
        <li>├── components/</li>
        <li>│   ├── Cart/</li>
        <li>│   │   ├── index.tsx</li>
        <li>│   │   └── styles.ts</li>
        <li>│   └── Footer/</li>
        <li>│       ├── index.tsx</li>
        <li>│       └── styled.ts</li>
        <li>├── Header/</li>
        <li>│   └── index.tsx</li>
        <li>├── model/</li>
        <li>├── services/</li>
        <li>│   └── api.ts</li>
        <li>├── store/</li>
        <li>│   ├── index.ts</li>
        <li>│   └── reducers/</li>
        <li>│       └── Cart.ts</li>
        <li>├── utils/</li>
        <li>│   └── function.ts</li>
        <li>├── views/</li>
        <li>│   ├── Home/</li>
        <li>│   │   └── page.tsx</li>
        <li>│   └── KnowMore/</li>
        <li>│       └── page.tsx</li>
        <li>├── App.tsx</li>
        <li>├── index.tsx</li>
        <li>├── main-styles.ts</li>
        <li>├── react-app-env.d.ts</li>
        <li>├── reportWebVitals.ts</li>
        <li>└── setupTests.ts</li>
    </ul>
</section>

<section id="casos-de-uso">
    <h2>Casos de Uso</h2>
    <ul>
        <li>Navegação pelo Catálogo de Produtos: O usuário pode navegar por uma lista de produtos disponíveis para compra.</li>
        <li>Adicionar Produtos ao Carrinho: O usuário pode adicionar produtos ao carrinho de compras.</li>
        <li>Finalizar Pedido: O usuário pode revisar os itens no carrinho e finalizar a compra.</li>
        <li>Gerenciamento de Usuários: O usuário pode criar uma conta, fazer login e gerenciar suas informações.</li>
    </ul>
</section>

<section id="ferramentas">
    <h2>Ferramentas</h2>
    <ul>
        <li><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="Badge HTML5"></li>
        <li><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Badge CSS3"></li>
        <li><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Badge JavaScript"></li>
        <li><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="Badge React"></li>
        <li><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Badge Redux"></li>
        <li><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Badge TypeScript"></li>
        <li><img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Badge Styled Components"></li>
        <li><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="Badge ESLint"></li>
        <li><img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Badge Prettier"></li>
        <li><img src="https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Badge Git"></li>
    </ul>
</section>

<section id="contato">
    <h2>Contato</h2>
    <ul>
        <li><a href="https://linktr.ee/anaeanali5" target="_blank"><img src="https://img.shields.io/badge/Ana_Alice_Rodrigues-blue?style=for-the-badge" alt="Perfil de Ana Alice Rodrigues"></a></li>
        <li><a href="https://efood-kappa-five.vercel.app/ " target="_blank"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Hospedado na Vercel"> clique para acessar o projeto</a></li>
    </ul>
    <p>Acesse o projeto na Vercel para ver o Efood Clone em ação.</p>
</section>

</body>
</html>
