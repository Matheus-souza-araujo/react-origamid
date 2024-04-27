import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  let totalGasto = 0;

  dados.compras.map((compra) => {
    totalGasto = totalGasto + Number(compra.preco.split("R$")[1]);
    console.log(totalGasto);
  });

  const estiloSituacao = {
    color: dados.ativa ? "green" : "red",
  };

  return (
    <div>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={estiloSituacao}>{dados.ativa ? "Ativa" : "Inativa"}</span>
      </p>
      <p>Total gasto: {totalGasto}</p>
      <p hidden={totalGasto >= 10500 ? false : true}>
        Você está gastando muito
      </p>
    </div>
  );
};

export default App;
