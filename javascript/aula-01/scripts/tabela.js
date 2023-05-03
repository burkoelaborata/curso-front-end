const dados = [
  { nome: "João", telefone: "123456789", cidade: "São Paulo", estado: "SP" },
  { nome: "Maria", telefone: "987654321", cidade: "Rio de Janeiro", estado: "RJ" },
  { nome: "Pedro", telefone: "555555555", cidade: "Belo Horizonte", estado: "MG" },
];

const tabela = document.getElementById("table");
const tbody = tabela.getElementsByTagName("tbody")[0];

for (let i = 0; i < dados.length; i++) {
  const linha = document.createElement("tr");

  const nome = document.createElement("td");
  nome.textContent = dados[i].nome;
  linha.appendChild(nome);

  const telefone = document.createElement("td");
  telefone.textContent = dados[i].telefone;
  linha.appendChild(telefone);

  const cidade = document.createElement("td");
  cidade.textContent = dados[i].cidade;
  linha.appendChild(cidade);

  const estado = document.createElement("td");
  estado.textContent = dados[i].estado;
  linha.appendChild(estado);

  const acoes = document.createElement("td");
  const editarButton = document.createElement("button");
  editarButton.textContent = "Editar";
  const excluirButton = document.createElement("button");
  excluirButton.textContent = "Excluir";
  acoes.appendChild(editarButton);
  acoes.appendChild(excluirButton);
  linha.appendChild(acoes);

  tbody.appendChild(linha);
}
