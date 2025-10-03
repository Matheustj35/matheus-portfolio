// Botão "Voltar ao topo"
const btnTopo = document.createElement('button');
btnTopo.innerText = "↑";
btnTopo.id = "btnTopo";
document.body.appendChild(btnTopo);

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 400 ? 'block' : 'none';
});

function abrirProjeto(nome) {
  const modal = document.getElementById('projetoModal');
  const codigo = document.getElementById('codigoSimulado');
  modal.style.display = 'block';
  codigo.innerText = `
  // Projeto: ${nome}
  // Carregando scripts...
  // Inicializando interface...
  // Executando automação...

  function ${nome.replace(/\s/g, '')}() {
      console.log("Sistema ${nome} iniciado com sucesso!");
  }
  `;

  // Efeito "digitando"
  let i = 0;
  const texto = codigo.innerText;
  codigo.innerText = '';
  const intervalo = setInterval(() => {
    codigo.innerText += texto.charAt(i);
    i++;
    if (i > texto.length) clearInterval(intervalo);
  }, 10);
}

function fecharProjeto() {
  document.getElementById('projetoModal').style.display = 'none';
}
