

function renderizarCarrinho() {
    const carrinho = obterCarrinho();
    const container = document.getElementById("carrinho-itens");
    const totalEl = document.getElementById("carrinho-total");
    const btnComprar = document.getElementById("btn-comprar");

    if (carrinho.length === 0) {
        container.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalEl.textContent = "Total: R$ 0,00";
        btnComprar.disabled = true;
        return;
    }

    container.innerHTML = "";

    carrinho.forEach((item) => {
        const linha = document.createElement("div");
        linha.className = "linha-carrinho";

        const filtroCor = {
            preto: "filtro-preto",
            branco: "filtro-branco",
            azul: "filtro-azul"
        }[item.cor];

        linha.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="${filtroCor}">
            <div>
                <p><strong>${item.nome}</strong></p>
                <p>Cor: ${item.cor}</p>
                <p>R$ ${item.preco.toFixed(2)} cada</p>
            </div>
            <div>
                <button onclick="mudarQuantidadeNaTela(${item.id}, '${item.cor}', -1)">-</button>
                <span>${item.quantidade}</span>
                <button onclick="mudarQuantidadeNaTela(${item.id}, '${item.cor}', 1)">+</button>
            </div>
            <p>Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            <button onclick="removerItemDaTela(${item.id}, '${item.cor}')">Remover</button>
        `;

        container.appendChild(linha);
    });

    totalEl.textContent = `Total: R$ ${calcularTotalCarrinho().toFixed(2)}`;
    btnComprar.disabled = false;
}

function mudarQuantidadeNaTela(id, cor, delta) {
    alterarQuantidade(id, cor, delta);
    renderizarCarrinho();
}

function removerItemDaTela(id, cor) {
    removerDoCarrinho(id, cor);
    renderizarCarrinho();
}

function finalizarCompra() {
    const btnComprar = document.getElementById("btn-comprar");

    btnComprar.disabled = true;

    esvaziarCarrinho();
    renderizarCarrinho();

    alert("Compra efetuada com sucesso! Seus produtos foram comprados.");
}

document.addEventListener("DOMContentLoaded", renderizarCarrinho);
