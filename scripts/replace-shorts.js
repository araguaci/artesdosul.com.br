'use strict';
const fs = require('fs');
const path = require('path');

const replacementMap = {
  'mission-artesdosul-xarticle': '🚀 Seu sucesso digital começa aqui! Transforme sua presença online em uma máquina de tração. ✨',
  'values-artesdosul-xarticle': '🎯 Parceria real, código limpo e transparência absoluta para o seu negócio crescer! 💎',
  'vision-artesdosul-xarticle': '⚡ Inovação com validação prática: a arquitetura digital do seu futuro começa hoje! 🌐',
  'human3-xarticle': '🧠 Design centrado em pessoas para gerar conexões reais e resultados extraordinários! 🚀',
  'modelos-artesdosul-xarticle': '💻 Showroom interativo onde design de ponta e códigos funcionais operam em harmonia! ✨',
  'numerologia-inteligencia-xarticle': '✨ Decisões estratégicas guiadas por precisão, clareza e inteligência de dados! 🧭',
  'text-alchemy-xarticle': '✍️ O poder das palavras convertido em conversão, vendas e autoridade digital! 🔮',
  'saas-launchpad-xarticle': '🚀 Lance seu MVP com velocidade de mercado e controle total de churn! 📉',
  'portal-transparencia-xarticle': '📊 Informações transparentes e acessibilidade total para gerar confiança! 🌐',
  'intel-strategy-xarticle': '🎯 Planejamento tático e inteligência de dados para liderar o mercado! 🚀',
  'horizonte-xarticle': '🧭 O mapa estratégico completo para guiar o crescimento da sua marca! 📈',
  'gridguard-xarticle': '🛡️ Segurança de dados robusta e conformidade total para proteger sua operação! 🔒',
  'devstudio-alpha-xarticle': '🛠️ Infraestrutura moderna e automação inteligente acelerando suas entregas! ⚡',
  'dev-ai-toolbelt-xarticle': '🤖 Potencialize seu fluxo de desenvolvimento com IA e ferramentas inteligentes! 🧠',
  'bushido-mind-body-xarticle': '🥋 Disciplina, foco e alto rendimento moldando a sua presença digital! 🌟'
};

const defaultReplacement = '🚀 Seu sucesso digital começa aqui! Tecnologia, design e estratégia sob medida. ✨';

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(dirPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Encontrar a linha correspondente ao reply
      const regex = /\*[^*]*primeiro reply deste post\.*\*/gi;
      if (regex.test(content)) {
        const baseName = path.basename(file, '.md');
        const replacement = replacementMap[baseName] || defaultReplacement;
        
        // Também removemos qualquer ocorrência subsequente do texto de teste do usuário
        content = content.replace(/\*[^*]*primeiro reply deste post\.*\*\r?\n?(Seu sucesso digital começa aqui!\r?\n?)?/gi, replacement + '\n');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${file}`);
      }
    }
  }
}

const filaPath = path.resolve(__dirname, '../_data/_fila');
const hotsitePath = path.resolve(__dirname, '../hotsite');

console.log('Processing queue folder...');
processDirectory(filaPath);

console.log('\nProcessing hotsite folder...');
processDirectory(hotsitePath);

console.log('\nReplacement complete!');
