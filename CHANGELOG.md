# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-08-08

### Added
- Suporte a Progressive Web Application (PWA) instalável com manifesto (`manifest.json`) e service worker (`sw.js`).
- Ícone do aplicativo PWA de alta resolução com design de compasso e detalhes de neon (`pwa-icon.png`).
- Dashboard Portfólio (Showroom) interativo contendo a listagem dos dossiês do estúdio com filtros por categoria e busca em tempo real.
- Leitor dinâmico assíncrono (`fetch`) para carregar os artigos Markdown (`.md`) da pasta `hotsite/` diretamente na interface do site.
- Gaveta lateral (slide-over drawer) fluida para exibição do conteúdo dos dossiês sem recarregamento de página.
- Utilitário de clipboard "Copy" em blocos de código renderizados na gaveta.
- Growth Tracker persistido em `localStorage` para marcar dossiers explorados e exibir barra de progresso dinâmica no topo do showroom.
- Simulador de MRR & Churn (SaaS Launchpad) com controles de controle deslizante (sliders) e projeção de faturamento de 12 meses com gráfico de colunas dinâmico.
- Fontes do Google Fonts integradas: `Bricolage Grotesque` (display), `Plus Jakarta Sans` (body) e `JetBrains Mono` (mono).

### Changed
- Estrutura completa do HTML reescrita em Pug (`src/pug/index.pug`) abandonando o template legado de portfólio de bootstrap em favor de uma SPA.
- Design System e folha de estilos reescritos em SCSS (`src/scss/styles.scss`) aplicando a paleta Cyber-Growth (fundo `#050505`, detalhes laranja, ciano e verde com glassmorphism).
- Script de build `scripts/render-assets.js` modificado para copiar arquivos de hotsite e assets do PWA para a raiz do diretório compilado `dist/`.
- Atualizados os metadados de identificação, versão (1.0.0) e URLs do repositório no `package.json`.

### Removed
- Removidos textos e imagens de placeholder legadas do template Stylish Portfolio da Start Bootstrap.
- Removida a pasta compilada `dist/` do versionamento de Git para evitar conflitos de build e adicionada regra correspondente ao `.gitignore`.
