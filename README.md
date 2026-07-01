# Voidware - E-commerce ilustrativo

Projeto de e-commerce **sem compra real, sem login**, feito para fins de
estudo (SciTec Jr. - Trainee 2026). Usa **HTML + pouco CSS + Express**.

## Como rodar

```bash
npm install
node server.js
```

Depois acesse: http://localhost:3000

## Estrutura

```
voidware/
├── server.js              -> servidor Express principal
├── data/
│   └── produtos.js        -> "banco de dados" mock com os 9 produtos
├── routes/
│   └── produtos.js        -> rotas da API (GET /produtos, /produtos/:id, /produtos/destaques)
└── public/                -> tudo que é servido como arquivo estático
    ├── index.html          -> Home (carrossel + sobre a loja)
    ├── produtos.html        -> Listagem com filtros (tipo e preço)
    ├── produto.html         -> Produto específico (cor + carrinho)
    ├── carrinho.html        -> Carrinho (ver, alterar, remover, finalizar)
    ├── sobre.html
    ├── contato.html
    ├── css/style.css        -> CSS mínimo (para o outro grupo estilizar)
    ├── js/
    │   ├── carrinho.js          -> lógica central do carrinho (sessionStorage)
    │   ├── carrossel.js         -> carrossel da home (busca destaques na API)
    │   ├── produtos.js          -> filtros da página de listagem
    │   ├── produto.js           -> troca de cor + adicionar ao carrinho
    │   └── carrinho-pagina.js   -> renderização da página de carrinho
    └── imagens/             -> placeholders SVG (trocar pelas imagens reais)
```

## API

| Rota                          | Descrição                                  |
|--------------------------------|---------------------------------------------|
| `GET /produtos`                | Lista todos os produtos                     |
| `GET /produtos?tipo=mouse`     | Filtra por tipo (`fone`, `mouse`, `teclado`)|
| `GET /produtos?ordenar=mais-caro` ou `mais-barato` | Ordena por preço       |
| `GET /produtos/destaques`      | Retorna os 3 produtos do carrossel da home  |
| `GET /produtos/:id`            | Retorna um produto específico                |

## Decisões importantes

- **Carrinho**: guardado no `sessionStorage` do navegador. Sobrevive entre
  páginas (ex: ao ir de `produto.html` para `carrinho.html`), mas é
  zerado se a aba/navegador for fechado. Não há backend de pagamento real.
- **Cores dos produtos**: cada produto tem 1 imagem só. As 3 variações de
  cor (preto, branco, azul) são feitas aplicando um filtro CSS
  (`filter: hue-rotate(...)`, `grayscale(...)`) na mesma `<img>`, trocado
  via JavaScript ao clicar na bolinha de cor.
- **Finalizar compra**: desabilita o botão, esvazia o carrinho
  (`sessionStorage`) e mostra um `alert()` confirmando a "compra".
- **Imagens**: são placeholders em SVG gerados automaticamente (retângulo
  colorido com o nome do produto). É só trocar os arquivos dentro de
  `public/imagens/produtos/` pelos arquivos reais, mantendo os mesmos nomes
  (ou ajustando os caminhos em `data/produtos.js`).
- **CSS**: propositalmente mínimo, só o necessário pra estrutura funcionar
  (grid do header, carrossel, cards). Ficou pronto pro outro grupo aplicar
  o visual definitivo.
