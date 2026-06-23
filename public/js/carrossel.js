// Lógica do carrossel da página inicial.
// Cada slide representa um produto em destaque. Ao clicar no slide,
// o usuário é levado para a página daquele produto específico.

let indexAtual = 0;

function moverCarrossel(direcao) {
    const track = document.getElementById("track");
    const slides = document.querySelectorAll(".slide");

    indexAtual += direcao;

    if (indexAtual < 0) {
        indexAtual = slides.length - 1;
    } else if (indexAtual >= slides.length) {
        indexAtual = 0;
    }

    track.style.transform = `translateX(-${indexAtual * 100}%)`;
}

function irParaProduto(id) {
    window.location.href = `produto.html?id=${id}`;
}


async function carregarDestaques() {
    const track = document.getElementById("track");

    try {
        const resposta = await fetch("/produtos/destaques");
        const destaques = await resposta.json();

        track.innerHTML = "";

        destaques.forEach((produto) => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.onclick = () => irParaProduto(produto.id);

            slide.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <span class="cta">Confira: ${produto.nome}</span>
            `;

            track.appendChild(slide);
        });
    } catch (erro) {
        console.error("Erro ao carregar produtos em destaque:", erro);
        track.innerHTML = "<p>Não foi possível carregar os destaques.</p>";
    }
}

document.addEventListener("DOMContentLoaded", carregarDestaques);
