const express = require("express");
const router = express.Router();
const produtos = require("../data/produtos");


router.get("/", (req, res) => {
  const { tipo, ordenar } = req.query;

  let resultado = [...produtos];

  if (tipo) {
    resultado = resultado.filter(
      (p) => p.tipo.toLowerCase() === tipo.toLowerCase()
    );
  }

  if (ordenar === "mais-caro") {
    resultado.sort((a, b) => b.preco - a.preco);
  } else if (ordenar === "mais-barato") {
    resultado.sort((a, b) => a.preco - b.preco);
  }

  res.json(resultado);
});


router.get("/destaques", (req, res) => {
  const destaques = produtos.filter((p) => p.destaque);
  res.json(destaques);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
});

module.exports = router;
