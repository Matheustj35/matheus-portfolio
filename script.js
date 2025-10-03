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

