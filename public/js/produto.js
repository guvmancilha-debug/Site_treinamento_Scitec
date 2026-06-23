// Lógica da página de produto específico:
// - busca o produto pelo id na URL (?id=)
// - permite trocar a cor (aplicando filtro CSS na mesma imagem)
// - permite escolher quantidade e adicionar ao carrinho

let produtoAtual = null;
let corSelecionada = null;

// Mapa de cor -> classe CSS de filtro (definidas em style.css)
const FILTROS_COR = {
    preto: "filtro-preto",
    branco: "filtro-branco",
    azul: "filtro-azul"
};

// Mapa de cor -> cor de fundo da bolinha de seleção
const CORES_BOLINHA = {
    preto: "#1a1a1a",
    branco: "#f2f2f2",
    azul: "#2d6cdf"
};

function obterIdDaUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

async function carregarProduto() {
    const id = obterIdDaUrl();
    const container = document.getElementById("produto-container");

    if (!id) {
        container.innerHTML = "<p>Produto não especificado.</p>";
        return;
    }

    try {
        const resposta = await fetch(`/produtos/${id}`);

        if (!resposta.ok) {
            container.innerHTML = "<p>Produto não encontrado.</p>";
            return;
        }

        produtoAtual = await resposta.json();
        corSelecionada = produtoAtual.cores[0];

        renderizarProduto();
    } catch (erro) {
        console.error("Erro ao carregar produto:", erro);
        container.innerHTML = "<p>Não foi possível carregar o produto.</p>";
    }
}

function renderizarProduto() {
    document.title = `Voidware - ${produtoAtual.nome}`;

    document.getElementById("produto-imagem").src = produtoAtual.imagem;
    document.getElementById("produto-imagem").className = FILTROS_COR[corSelecionada];
    document.getElementById("produto-nome").textContent = produtoAtual.nome;
    document.getElementById("produto-preco").textContent = `R$ ${produtoAtual.preco.toFixed(2)}`;
    document.getElementById("produto-descricao").textContent = produtoAtual.descricao;

    renderizarOpcoesDeCor();
}

function renderizarOpcoesDeCor() {
    const container = document.getElementById("cores-opcoes");
    container.innerHTML = "";

    produtoAtual.cores.forEach((cor) => {
        const bolinha = document.createElement("button");
        bolinha.className = "cor-bolinha" + (cor === corSelecionada ? " selecionada" : "");
        bolinha.style.backgroundColor = CORES_BOLINHA[cor];
        bolinha.title = cor;
        bolinha.setAttribute("aria-label", `Cor ${cor}`);
        bolinha.onclick = () => selecionarCor(cor);

        container.appendChild(bolinha);
    });
}

function selecionarCor(cor) {
    corSelecionada = cor;
    renderizarProduto();
}

function alterarQuantidadeSelecionada(delta) {
    const input = document.getElementById("quantidade-selecionada");
    let valor = Number(input.value) + delta;
    if (valor < 1) valor = 1;
    input.value = valor;
}

function adicionarProdutoAoCarrinho() {
    const quantidade = Number(document.getElementById("quantidade-selecionada").value);
    adicionarAoCarrinho(produtoAtual, corSelecionada, quantidade);

    const aviso = document.getElementById("aviso-adicionado");
    aviso.textContent = `${quantidade}x "${produtoAtual.nome}" (${corSelecionada}) adicionado ao carrinho!`;
    aviso.style.display = "block";

    setTimeout(() => {
        aviso.style.display = "none";
    }, 2500);
}

document.addEventListener("DOMContentLoaded", carregarProduto);
