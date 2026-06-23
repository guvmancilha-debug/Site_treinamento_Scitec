
/* 
  Cada produto tem 3 variações de cor. As 3 cores usam a mesa imagem base
  (campo "imagem"),  e a cor é aplicada no front-end via filtro CSS (hue-rotate),
  então aqui guardamos apenas qual classe de cor cada variação usa.
  Isso facilita pro outro grupo: eles só precisam estilizar a classe .cor-preto,
  .cor-branco e .cor-azul (ou o filtro equivalente) em cima da mesma <img>. 
 */

const produtos = [
  // FONES
  {
    id: 1,
    nome: "Fone Pulse X1",
    tipo: "fone",
    preco: 199.9,
    imagem: "/imagens/produtos/fone1.svg",
    descricaoCurta: "Fone over-ear com isolamento acústico básico.",
    descricao:
      "O Pulse X1 é um fone over-ear pensado para uso diário, com almofadas confortáveis e cabo de 1.5m destacável. Ideal para quem está montando o primeiro setup.",
    cores: ["preto", "branco", "azul"],
    destaque: true
  },
  {
    id: 2,
    nome: "Fone Aero Lite",
    tipo: "fone",
    preco: 129.9,
    imagem: "/imagens/produtos/fone2.svg",
    descricaoCurta: "Fone leve on-ear, ótimo para uso prolongado.",
    descricao:
      "O Aero Lite prioriza o conforto: estrutura leve em plástico reforçado e arco ajustável. Indicado para quem usa fone por muitas horas seguidas.",
    cores: ["preto", "branco", "azul"],
    destaque: false
  },
  {
    id: 3,
    nome: "Fone Vortex Gamer",
    tipo: "fone",
    preco: 249.9,
    imagem: "/imagens/produtos/fone3.svg",
    descricaoCurta: "Headset gamer com microfone retrátil.",
    descricao:
      "Voltado para jogos, o Vortex Gamer traz microfone retrátil com cancelamento de ruído básico e drivers de 50mm para sons mais cheios em partidas competitivas.",
    cores: ["preto", "branco", "azul"],
    destaque: false
  },

  // MOUSES
  {
    id: 4,
    nome: "Mouse Nimbus M2",
    tipo: "mouse",
    preco: 89.9,
    imagem: "/imagens/produtos/mouse1.svg",
    descricaoCurta: "Mouse óptico compacto para uso geral.",
    descricao:
      "O Nimbus M2 é compacto e leve, com sensor óptico de 1200 DPI. Uma escolha simples para tarefas do dia a dia, sem fio ou com fio dependendo da versão.",
    cores: ["preto", "branco", "azul"],
    destaque: false
  },
  {
    id: 5,
    nome: "Mouse Strike Pro",
    tipo: "mouse",
    preco: 159.9,
    imagem: "/imagens/produtos/mouse2.svg",
    descricaoCurta: "Mouse gamer com DPI ajustável e RGB.",
    descricao:
      "Com sensor de alta precisão e DPI ajustável até 6400, o Strike Pro foi feito para jogos que exigem resposta rápida. Iluminação RGB customizável.",
    cores: ["preto", "branco", "azul"],
    destaque: true
  },
  {
    id: 6,
    nome: "Mouse Orbit Wireless",
    tipo: "mouse",
    preco: 119.9,
    imagem: "/imagens/produtos/mouse3.svg",
    descricaoCurta: "Mouse sem fio com bateria de longa duração.",
    descricao:
      "O Orbit Wireless elimina os fios da sua mesa com até 60 dias de bateria por carga e conexão via receptor USB de 2.4GHz.",
    cores: ["preto", "branco", "azul"],
    destaque: false
  },

  // TECLADOS
  {
    id: 7,
    nome: "Teclado Mecânico Forge K1",
    tipo: "teclado",
    preco: 299.9,
    imagem: "/imagens/produtos/teclado1.svg",
    descricaoCurta: "Teclado mecânico ABNT2 com switches táteis.",
    descricao:
      "O Forge K1 é um teclado mecânico full-size com switches táteis, layout ABNT2 e estrutura em alumínio escovado para maior durabilidade.",
    cores: ["preto", "branco", "azul"],
    destaque: true
  },
  {
    id: 8,
    nome: "Teclado Slim Office",
    tipo: "teclado",
    preco: 99.9,
    imagem: "/imagens/produtos/teclado2.svg",
    descricaoCurta: "Teclado de membrana, fino e silencioso.",
    descricao:
      "Pensado para ambientes de trabalho, o Slim Office tem perfil baixo, teclas silenciosas e conexão USB plug-and-play.",
    cores: ["preto", "branco", "azul"],
    destaque: false
  },
  {
    id: 9,
    nome: "Teclado Mecânico Apex RGB",
    tipo: "teclado",
    preco: 349.9,
    imagem: "/imagens/produtos/teclado3.svg",
    descricaoCurta: "Teclado mecânico gamer com iluminação RGB.",
    descricao:
      "O Apex RGB combina switches lineares de resposta rápida com iluminação RGB por tecla, ideal para quem busca desempenho e estética no setup.",
    cores: ["preto", "branco", "azul"],
    destaque: false
  }
];

module.exports = produtos;
