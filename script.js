// ---- Navegação central (home -> seção -> voltar) ----
const allPages = Array.from(document.querySelectorAll('.page, section.page'));
const homePage = document.getElementById('home');

function hideAll(){
  // esconde todas as sections (exceto modal)
  document.querySelectorAll('.page, section.page').forEach(el=>{
    el.classList.add('hidden');
    el.classList.remove('active');
  });
  // hide modal if open
  const modal = document.getElementById('projectModal');
  if(modal) modal.classList.add('hidden');
}

function openSection(id){
  hideAll();
  const el = document.getElementById(id);
  if(!el) {
    console.warn('Seção não encontrada:', id);
    return;
  }
  el.classList.remove('hidden');
  el.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

// voltar para home (limpa tudo)
function voltar(){
  hideAll();
  homePage.classList.remove('hidden');
  homePage.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

// ativar apenas a home ao carregar
document.addEventListener('DOMContentLoaded', ()=> {
  hideAll();
  homePage.classList.remove('hidden');
  homePage.classList.add('active');

  // carregar stories de exemplo
  loadStories();
});

// ---------------- Projetos: modal com efeito de "typing" ----------------
const projectSamples = {
  organograma: `// Organograma - exemplo reduzido
function gerarOrganograma(sheetData){
  const nodes = sheetData.map(r=>({id:r.id, name:r.nome, parent:r.chefe}));
  // lógica de criação do grafo...
  drawGraph(nodes);
}`,
  tarefas: `// Gestor de tarefas - exemplo
const tasks = [];
function addTask(t){ tasks.push({id:Date.now(), text:t, done:false}); render(); }`,
  slides: `// Gerador de slides (exemplo)
function gerarSlides(items, template){
  items.forEach(i=>{ const s=template.clone(); s.title=i.title; deck.add(s); });
}`,
  hunter: `// Busca Hunter Diversidade - exemplo
// Consolida indicações e gera planilha de triagem`
};

function openProjectModal(title, slug){
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCode = document.getElementById('modalCode');
  const githubLink = document.getElementById('modalGithub');
  const demoLink = document.getElementById('modalDemo');

  modalTitle.textContent = title;
  modalCode.textContent = '';
  modal.classList.remove('hidden');

  // placeholders - atualize com seus links quando tiver
  githubLink.href = '#';
  demoLink.href = '#';

  const text = projectSamples[slug] || '// Demo não disponível ainda';
  typeText(modalCode, text, 6);
}

function closeProjectModal(){
  const modal = document.getElementById('projectModal');
  if(modal) modal.classList.add('hidden');
}

let typingInterval = null;
function typeText(el, text, speed){
  el.textContent = '';
  let i = 0;
  clearInterval(typingInterval);
  typingInterval = setInterval(()=>{
    el.textContent += text.charAt(i);
    i++;
    el.scrollTop = el.scrollHeight;
    if(i >= text.length) clearInterval(typingInterval);
  }, speed);
}

// fechar modal com ESC
window.addEventListener('keydown', (e)=> {
  if(e.key === 'Escape') closeProjectModal();
});

// ---------------- Events (stories) ----------------
const stories = [
  {title:'Diversidade - Oficina', text:'Oficina sobre inclusão e acessibilidade', img:''},
  {title:'Team Building Exportação', text:'Integração com times do RS e Colômbia', img:''},
  {title:'Mentoria & R&S', text:'Mentoria para recolocação profissional', img:''}
];
let storyIndex = 0;

function loadStories(){
  renderStory();
}

function renderStory(){
  const frame = document.getElementById('storyFrame');
  if(!frame) return;
  const s = stories[storyIndex];
  frame.innerHTML = `<div class="story-card">
    <h3>${s.title}</h3>
    <p style="color:var(--muted)">${s.text}</p>
    <div style="margin-top:auto;color:var(--muted);font-size:.9rem">(${storyIndex+1}/${stories.length})</div>
  </div>`;
}

function nextStory(){
  storyIndex = (storyIndex + 1) % stories.length;
  renderStory();
}
function prevStory(){
  storyIndex = (storyIndex - 1 + stories.length) % stories.length;
  renderStory();
}
