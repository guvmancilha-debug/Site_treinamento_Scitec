// ===================================================================
// CARRINHO - lógica compartilhada entre todas as páginas.
// Usa sessionStorage: o carrinho sobrevive enquanto a aba/navegador
// estiver aberto, mas é zerado se a aba for fechada (não é um carrinho
// "de verdade" persistido em banco, é só para fins de ilustração).
// ===================================================================

const CHAVE_CARRINHO = "voidware_carrinho";



function obterCarrinho() {
    const dados = sessionStorage.getItem(CHAVE_CARRINHO);
    return dados ? JSON.parse(dados) : [];
}

function salvarCarrinho(carrinho) {
    sessionStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}


function adicionarAoCarrinho(produto, cor, quantidade = 1) {
    const carrinho = obterCarrinho();

    const itemExistente = carrinho.find(
        (item) => item.id === produto.id && item.cor === cor
    );

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            cor: cor,
            quantidade: quantidade
        });
    }

    salvarCarrinho(carrinho);
}


function removerDoCarrinho(id, cor) {
    let carrinho = obterCarrinho();
    carrinho = carrinho.filter((item) => !(item.id === id && item.cor === cor));
    salvarCarrinho(carrinho);
}


function alterarQuantidade(id, cor, delta) {
    const carrinho = obterCarrinho();
    const item = carrinho.find((i) => i.id === id && i.cor === cor);

    if (!item) return;

    item.quantidade += delta;

    if (item.quantidade <= 0) {
        removerDoCarrinho(id, cor);
        return;
    }

    salvarCarrinho(carrinho);
}

function calcularTotalCarrinho() {
    const carrinho = obterCarrinho();
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

function contarItensCarrinho() {
    const carrinho = obterCarrinho();
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
}


function atualizarContadorCarrinho() {
    const contador = document.getElementById("contador-carrinho");
    if (contador) {
        contador.textContent = contarItensCarrinho();
    }
}


function esvaziarCarrinho() {
    sessionStorage.removeItem(CHAVE_CARRINHO);
    atualizarContadorCarrinho();
}

document.addEventListener("DOMContentLoaded", atualizarContadorCarrinho);
