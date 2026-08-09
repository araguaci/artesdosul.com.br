/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
// Banco de dados dos dossiês Artes do Sul (hotsite)
const articles = [
  {
    id: "about-artesdosul",
    file: "about-artesdosul-xarticle.md",
    title: "Artes do Sul: studio de websites com arte e método",
    tag: "Sobre",
    category: "sobre",
    image: "about-artesdosul-xarticle-hero.webp",
    summary: "Conheça o nosso manifesto de criação digital. Unimos design excepcional, tecnologia limpa e estratégia centrada em resultados reais."
  },
  {
    id: "how-website",
    file: "how-website-xarticle.md",
    title: "Como criamos um website: oito etapas, zero mágica",
    tag: "Método",
    category: "metodo",
    image: "how-website-xarticle-hero.webp",
    summary: "Da ideia à publicação, conheça o fluxo explícito que elimina achismos e custos ocultos na engenharia de software."
  },
  {
    id: "what-website",
    file: "what-website-xarticle.md",
    title: "O que constitui um website de alta performance",
    tag: "Conceito",
    category: "conceito",
    image: "what-website-xarticle-hero.webp",
    summary: "As bases da arquitetura web moderna: SEO, performance de carregamento, design semântico e segurança digital."
  },
  {
    id: "when-website",
    file: "when-website-xarticle.md",
    title: "Quando é a hora certa de construir seu site",
    tag: "Conceito",
    category: "conceito",
    image: "when-website-xarticle-hero.webp",
    summary: "Analise a maturidade da sua marca ou serviço para definir a estratégia digital correta e o momento ideal de tracionar."
  },
  {
    id: "why-online",
    file: "why-online-xarticle.md",
    title: "Por que estar online com marca própria importa",
    tag: "Conceito",
    category: "conceito",
    image: "why-online-xarticle-hero.webp",
    summary: "A presença digital como cartão de visitas ininterrupto 24/7 e os diferenciais competitivos de possuir um domínio próprio."
  },
  {
    id: "design-thinking",
    file: "design-thinking-xarticle.md",
    title: "Design Thinking: iteração antes do código",
    tag: "Design",
    category: "design",
    image: "design-thinking-xarticle-hero.webp",
    summary: "Nosso método de discovery focado em empatia, prototipação rápida e alinhamento de expectativas antes de iniciar a engenharia."
  },
  {
    id: "modelos-artesdosul",
    file: "modelos-artesdosul-xarticle.md",
    title: "Por dentro da galeria modelos.artesdosul.com",
    tag: "Sobre",
    category: "sobre",
    image: "modelos-artesdosul-xarticle-hero.webp",
    summary: "O showroom onde design de ponta e códigos funcionais se encontram para provar nosso nível de entrega em tempo real."
  },
  {
    id: "projeto-gestao",
    file: "projeto-gestao-xarticle.md",
    title: "Gestão Ágil de Projetos: iteração constante",
    tag: "Método",
    category: "metodo",
    image: "projeto-gestao-xarticle-hero.webp",
    summary: "Como estruturamos sprints de 1 a 3 semanas para entregar valor incremental e manter o alinhamento com o negócio."
  }
];

// Parser minimalista e rápido de Markdown para HTML
function parseMarkdown(md) {
  let html = md;
  
  // Limpeza de carriage returns
  html = html.replace(/\r\n/g, '\n');
  
  // Citações (Blockquotes)
  html = html.replace(/^\>\s+(.*)$/gim, '<blockquote>$1</blockquote>');
  
  // Títulos
  html = html.replace(/^#\s+(.*)$/gim, '<h1>$1</h1>');
  html = html.replace(/^##\s+(.*)$/gim, '<h2>$1</h2>');
  html = html.replace(/^###\s+(.*)$/gim, '<h3>$1</h3>');
  
  // Blocos de código com botão de cópia
  html = html.replace(/```([\s\S]*?)```/gm, (match, code) => {
    const cleanCode = code.trim().replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<div class="code-container">
              <pre><code>${cleanCode}</code></pre>
              <button class="copy-btn" onclick="copyToClipboard(this, \`${cleanCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)">
                <i class="far fa-copy"></i> Copiar
              </button>
            </div>`;
  });
  
  // Listas ordenadas
  html = html.replace(/^\d+\.\s+(.*)$/gim, '<li>$1</li>');
  // Envolver tags li ordenadas em ol (simplificado, fecha li anteriores no css ou render)
  
  // Listas não ordenadas
  html = html.replace(/^-\s+(.*)$/gim, '<li>$1</li>');
  
  // Links: [texto](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Parágrafos simples
  const lines = html.split('\n');
  const parsedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<block') || trimmed.startsWith('<div') || trimmed.startsWith('</div') || trimmed.startsWith('<pre') || trimmed.startsWith('</pre')) {
      return line;
    }
    return `<p>${line}</p>`;
  });
  
  return parsedLines.join('\n');
}

// Utilitário de clipboard
window.copyToClipboard = function(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check text-success"></i> Copiado!`;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Falha ao copiar: ', err);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // Configuração PWA Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registrado!', reg.scope))
        .catch(err => console.log('Erro ao registrar Service Worker:', err));
    });
  }

  // --- Showroom / Galeria ---
  const showroomGrid = document.getElementById('showroom-grid');
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const progressText = document.getElementById('progress-text');
  const progressBarFill = document.getElementById('progress-fill');
  
  let currentCategory = 'all';
  let searchQuery = '';
  
  // Carrega lidos do localStorage (Growth Tracker)
  let exploredArticles = JSON.parse(localStorage.getItem('artesdosul_explored')) || [];
  
  function updateProgress() {
    const total = articles.length;
    const explored = exploredArticles.length;
    const pct = total > 0 ? (explored / total) * 100 : 0;
    
    if (progressText) {
      progressText.textContent = `Explorados: ${explored} / ${total} (${Math.round(pct)}%)`;
    }
    if (progressBarFill) {
      progressBarFill.style.width = `${pct}%`;
    }
  }

  function markAsExplored(id) {
    if (!exploredArticles.includes(id)) {
      exploredArticles.push(id);
      localStorage.setItem('artesdosul_explored', JSON.stringify(exploredArticles));
      updateProgress();
      // Atualiza o card específico na grade para mostrar badge de lido
      const card = document.querySelector(`.portfolio-card[data-id="${id}"]`);
      if (card) {
        card.classList.add('explored');
        const badge = card.querySelector('.explored-badge');
        if (badge) badge.style.display = 'inline-flex';
      }
    }
  }

  function renderGrid() {
    if (!showroomGrid) return;
    showroomGrid.innerHTML = '';
    
    const filtered = articles.filter(art => {
      const matchesCategory = currentCategory === 'all' || art.category === currentCategory;
      const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            art.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
      showroomGrid.innerHTML = `<div class="col-12 text-center text-muted py-5">
        <i class="fas fa-search fa-2x mb-3 text-secondary"></i>
        <p>Nenhum dossiê encontrado para a busca atual.</p>
      </div>`;
      return;
    }
    
    filtered.forEach(art => {
      const isExplored = exploredArticles.includes(art.id);
      const card = document.createElement('div');
      card.className = `col-md-6 col-lg-4 d-flex portfolio-card-wrapper`;
      
      card.innerHTML = `
        <div class="portfolio-card w-100 ${isExplored ? 'explored' : ''}" data-id="${art.id}">
          <div class="card-image-wrapper">
            <img src="hotsite/${art.image}" alt="${art.title}" class="card-img" loading="lazy">
            <div class="card-image-overlay"></div>
            <span class="explored-badge" style="display: ${isExplored ? 'inline-flex' : 'none'}">
              <i class="fas fa-check-circle"></i> Explorado
            </span>
          </div>
          <div class="card-content d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="card-tag">${art.tag}</span>
              </div>
              <h4 class="card-title">${art.title}</h4>
              <p class="card-text">${art.summary}</p>
            </div>
            <button class="btn btn-card-action mt-3 open-dossier-btn" data-id="${art.id}">
              Explorar Dossiê <i class="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      `;
      showroomGrid.appendChild(card);
    });
    
    // Adiciona eventos de clique nos botões para abrir os dossiers
    document.querySelectorAll('.open-dossier-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openDossier(id);
      });
    });
  }

  // --- Lógica de Abertura de Dossiês ---
  const dossierDrawer = document.getElementById('dossier-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose = document.getElementById('drawer-close');
  const drawerBody = document.getElementById('drawer-body');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerHero = document.getElementById('drawer-hero');

  function openDossier(id) {
    const art = articles.find(a => a.id === id);
    if (!art || !dossierDrawer) return;

    if (drawerTitle) drawerTitle.textContent = art.title;
    if (drawerHero) drawerHero.src = `hotsite/${art.image}`;
    if (drawerBody) drawerBody.innerHTML = `<div class="d-flex justify-content-center py-5"><div class="spinner-border text-cyan" role="status"></div></div>`;
    
    // Mostra a gaveta (drawer) e overlay com transição
    dossierDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // impede scroll de fundo

    // Faz o fetch do arquivo markdown
    fetch(`hotsite/${art.file}`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar o arquivo markdown.");
        return res.text();
      })
      .then(md => {
        const parsedHTML = parseMarkdown(md);
        // Insere o conteúdo renderizado
        if (drawerBody) {
          drawerBody.innerHTML = parsedHTML;
        }
        // Marca como explorado no tracker
        markAsExplored(id);
      })
      .catch(err => {
        console.error(err);
        if (drawerBody) {
          drawerBody.innerHTML = `
            <div class="alert alert-danger py-4 text-center my-3 border-0 bg-opacity-10 bg-danger text-danger">
              <i class="fas fa-exclamation-triangle fa-2x mb-2"></i>
              <p class="mb-0">Não foi possível carregar o conteúdo do dossiê. Verifique sua conexão.</p>
            </div>
          `;
        }
      });
  }

  function closeDossier() {
    if (dossierDrawer) dossierDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = ''; // restaura scroll
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDossier);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDossier);

  // Escuta ESC para fechar
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDossier();
  });

  // Filtros de Categoria
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderGrid();
    });
  });

  // Busca tempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderGrid();
    });
  }

  // Inicializa o Showroom
  updateProgress();
  renderGrid();

  // --- Simulador MRR & Churn (SaaS Launchpad) ---
  const sliderMrr = document.getElementById('slider-mrr');
  const sliderChurn = document.getElementById('slider-churn');
  const mrrValue = document.getElementById('mrr-value');
  const churnValue = document.getElementById('churn-value');
  const finalMrrText = document.getElementById('final-mrr');
  const revenueLostText = document.getElementById('revenue-lost');
  const accelerationText = document.getElementById('acceleration-text');
  const barsContainer = document.getElementById('simulator-chart');

  function calculateSimulation() {
    if (!sliderMrr || !sliderChurn) return;
    
    const initialMrr = parseFloat(sliderMrr.value);
    const churnRate = parseFloat(sliderChurn.value) / 100;
    
    if (mrrValue) mrrValue.textContent = `R$ ${initialMrr.toLocaleString('pt-BR')}`;
    if (churnValue) churnValue.textContent = `${sliderChurn.value}%`;
    
    // Taxa de crescimento estimada com mentoria Artes do Sul (ex: 15% ao mês)
    const growthRate = 0.15; 
    let currentMrr = initialMrr;
    let totalLost = 0;
    const monthsData = [];
    
    for (let m = 1; m <= 12; m++) {
      // Perda por churn
      const lost = currentMrr * churnRate;
      totalLost += lost;
      
      // Ganho por crescimento (aceleração)
      const gain = currentMrr * growthRate;
      
      currentMrr = currentMrr - lost + gain;
      monthsData.push(Math.round(currentMrr));
    }
    
    // Atualiza resultados no HTML
    if (finalMrrText) {
      finalMrrText.textContent = `R$ ${Math.round(currentMrr).toLocaleString('pt-BR')}`;
    }
    if (revenueLostText) {
      revenueLostText.textContent = `R$ ${Math.round(totalLost).toLocaleString('pt-BR')}`;
    }
    
    const baseDiff = currentMrr - initialMrr;
    const pctDiff = Math.round((baseDiff / initialMrr) * 100);
    if (accelerationText) {
      accelerationText.textContent = `Aceleração de +${pctDiff}% sobre o MRR base`;
    }
    
    // Renderiza gráfico simplificado em barras no CSS/HTML
    if (barsContainer) {
      barsContainer.innerHTML = '';
      const maxVal = Math.max(...monthsData, initialMrr);
      
      monthsData.forEach((val, index) => {
        const heightPct = (val / maxVal) * 100;
        const col = document.createElement('div');
        col.className = 'chart-col d-flex flex-column align-items-center justify-content-end';
        col.style.flex = '1';
        col.style.height = '100%';
        col.innerHTML = `
          <div class="chart-bar" style="height: ${heightPct}%;" title="Mês ${index+1}: R$ ${val.toLocaleString('pt-BR')}">
            <span class="bar-value">R$ ${Math.round(val/1000)}k</span>
          </div>
          <span class="chart-label mt-2">M${index+1}</span>
        `;
        barsContainer.appendChild(col);
      });
    }
  }

  if (sliderMrr) sliderMrr.addEventListener('input', calculateSimulation);
  if (sliderChurn) sliderChurn.addEventListener('input', calculateSimulation);
  
  // Inicializa o simulador
  calculateSimulation();
});
