// Lógica da página de produtos: busca na API com os filtros aplicados
// (tipo de produto e ordenação por preço) e monta os cards na tela.

async function carregarProdutos() {
    const lista = document.getElementById("lista-produtos");
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked').value;
    const ordemSelecionada = document.querySelector('input[name="ordenar"]:checked').value;

    const params = new URLSearchParams();
    if (tipoSelecionado !== "todos") {
        params.set("tipo", tipoSelecionado);
    }
    if (ordemSelecionada !== "padrao") {
        params.set("ordenar", ordemSelecionada);
    }

    lista.innerHTML = "<p>Carregando produtos...</p>";

    try {
        const resposta = await fetch(`/produtos?${params.toString()}`);
        const produtos = await resposta.json();

        if (produtos.length === 0) {
            lista.innerHTML = "<p>Nenhum produto encontrado para esse filtro.</p>";
            return;
        }

        lista.innerHTML = "";

        produtos.forEach((produto) => {
            const card = document.createElement("div");
            card.className = "card-produto";
            card.onclick = () => {
                window.location.href = `produto.html?id=${produto.id}`;
            };

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.descricaoCurta}</p>
                <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
            `;

            lista.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
        lista.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();

    document.querySelectorAll('input[name="tipo"], input[name="ordenar"]').forEach((input) => {
        input.addEventListener("change", carregarProdutos);
    });
});
