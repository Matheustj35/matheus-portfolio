// Seleciona todas as seções do site
const sections = document.querySelectorAll("section");

// Função que mostra a seção selecionada e esconde as demais
function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Rola pro topo sempre que mudar de seção
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Função para voltar à página inicial
function voltar() {
    sections.forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById("inicio").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Ativa a primeira seção (início) ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inicio").classList.add("active");
});
