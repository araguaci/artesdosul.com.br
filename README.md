# Artes do Sul • Studio Digital & Dashboard Portfólio

Este é o site oficial do **Artes do Sul**, um estúdio de criação digital focado em websites ultra-premium, PWAs e sistemas sob medida de alta performance.

O projeto foi totalmente remodelado aplicando a identidade **Cyber-Growth** e transformando a antiga estrutura estática em uma Single Page Application (SPA) interativa com carregamento dinâmico de dossiers.

---

## 🎨 Design System: Cyber-Growth

A estética do estúdio é inspirada em interfaces modernas de alta performance (como Linear e Stripe) integrando as paletas da skill `artesdosul`:
- **Fundo Escuro**: `#050505` como cor base e cartões translúcidos com blur (`rgba(20, 20, 20, 0.75)`).
- **Acentos Vibrantes**: Laranja (`#ff6b35` para ações), Ciano (`#00d9ff` para códigos/tecnologia), Verde (`#10b981` para sucesso/validação) e Roxo (`#8b5cf6` para simulações).
- **Tipografia Premium**: `Bricolage Grotesque` para títulos display e `Plus Jakarta Sans` para o corpo.

---

## 🚀 Funcionalidades Integradas

### 1. Showroom Dashboard (Portfólio de Dossiês)
- **Carregamento Dinâmico**: O JS lê os dossiês originais em Markdown (`.md`) da pasta `hotsite/` via requisições assíncronas (`fetch`) em tempo real.
- **Renderizador de Markdown**: Parser customizado leve em Javascript para converter sintaxes de títulos, blockquotes, listas, links e blocos de código com destaque ciano.
- **Drawer Slide-Over**: Exibição imersiva dos dossiês em uma gaveta lateral fluida sem recarregar a página.
- **Search & Filter**: Busca por texto em tempo real e filtros de categorias (Sobre nós, Métodos, Ferramentas, Insights).

### 2. Growth Tracker (Persistência)
- Barra de progresso interativa que exibe a porcentagem de dossiês que você já explorou.
- Monitora os dossiers lidos e os persiste localmente via `localStorage`. Os cards lidos ganham uma etiqueta visual de "Explorado".

### 3. SaaS Launchpad (Simulador de Aceleração)
- Simulador interativo com sliders de **MRR Inicial** e taxa de **Churn** (cancelamento).
- Projeção financeira de crescimento em 12 meses acumulada.
- Gráfico de barras responsivo gerado em tempo real com efeitos de glow.

### 4. PWA First (Offline & Standalone)
- Configuração de `manifest.json` com ícone personalizado em alta resolução para instalação mobile standalone.
- Service Worker (`sw.js`) ativo configurado com estratégia de cache para suporte offline a recursos estruturais e dossiês.

---

## 📂 Estrutura do Código-Fonte

- `hotsite/` — Os dossiês originais do estúdio em Markdown e suas respectivas imagens de capa `-hero.webp`.
- `src/pug/` — Arquivo de estrutura [index.pug](file:///D:/artesdosul/artesdosul.com.br/src/pug/index.pug).
- `src/scss/` — Folhas de estilo SCSS organizadas com o Design System em [styles.scss](file:///D:/artesdosul/artesdosul.com.br/src/scss/styles.scss).
- `src/js/` — Lógicas da SPA (banco de dados, buscador, simulador, markdown render) em [scripts.js](file:///D:/artesdosul/artesdosul.com.br/src/js/scripts.js).
- `src/assets/` — Recursos de PWA (`manifest.json`, `sw.js` e o ícone `pwa-icon.png`).
- `scripts/` — Scripts utilitários de build em Node.js.
- `dist/` — Pasta final compilada gerada pelo build.

---

## 🛠️ Como Executar Localmente

### 1. Pré-requisitos
Certifique-se de possuir o Node.js e o NPM instalados em sua máquina.

### 2. Instalação de Dependências
Instale as ferramentas e utilitários de build executando na pasta raiz:
```bash
npm install
```

### 3. Execução em Desenvolvimento
Para rodar a aplicação localmente com Live Reload e recompilação em tempo real de Pug e SCSS, execute:
```bash
npm start
```
A aplicação abrirá no seu navegador em `http://localhost:3000`.

### 4. Compilação de Produção
Para compilar todos os arquivos otimizados e prontos para deploy na pasta `dist/`, execute:
```bash
npm run build
```

---

## 📜 Licença e Assinatura

Desenvolvido por **@artesdosul** • <https://artesdosul.com/>.
Código disponível sob a licença MIT.
