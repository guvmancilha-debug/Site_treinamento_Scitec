const express = require("express");
const path = require("path");

const produtosRouter = require("./routes/produtos");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));


app.use("/produtos", produtosRouter);

app.listen(PORT, () => {
  console.log(`Voidware rodando em http://localhost:${PORT}`);
});
