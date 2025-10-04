// Seleciona todas as seções
const sections = document.querySelectorAll("section");

// ---- NAVEGAÇÃO ENTRE SEÇÕES ---- //
function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltar() {
    sections.forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById("inicio").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inicio").classList.add("active");
});

// ---- MODAL DE PROJETOS ---- //
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalTitle = document.getElementById("modalTitle");

function openProject(title, code, demoUrl) {
    modalTitle.textContent = title;
    modalContent.innerHTML = `
        <pre style="color:#0f0; background:#111; padding:10px; border-radius:5px; overflow:auto; max-height:300px;">${code}</pre>
        <div style="margin-top:10px;">
            <button onclick="showCode(\`${code}\`)">Ver código</button>
            <button onclick="runDemo('${demoUrl}')">Rodar demo</button>
        </div>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    modalContent.innerHTML = "";
    modalTitle.textContent = "";
}

function showCode(code) {
    modalContent.innerHTML = `<pre id="typingCode" class="typing"></pre>
        <button style="margin-top:10px;" onclick="closeModal()">Fechar</button>`;

    let i = 0;
    const speed = 20; // velocidade em ms (quanto menor, mais rápido)

    function typeWriter() {
        if (i < code.length) {
            document.getElementById("typingCode").textContent += code.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // remove cursor piscando depois de terminar
            document.getElementById("typingCode").classList.remove("typing");
        }
    }
    typeWriter();
}

function runDemo(url) {
    window.open(url, "_blank");
}