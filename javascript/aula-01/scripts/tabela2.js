var meuBotao = document.getElementById("btn-anterior");

meuBotao.addEventListener("click", function () {
  alert("Você clicou para VOTLAR PAGINAÇÃO");
});

var meuBotao = document.getElementById("btn-proximo");

meuBotao.addEventListener("click", function () {
  alert("Você clicou para AVANÇAR PAGINAÇÃO");
});

const data = [
  { nome: "João", telefone: "1111-1111", cidade: "São Paulo", estado: "SP" },
  { nome: "Maria", telefone: "2222-2222", cidade: "Rio de Janeiro", estado: "RJ" },
  { nome: "José", telefone: "3333-3333", cidade: "Belo Horizonte", estado: "MG" },
  { nome: "Fernanda", telefone: "4444-4444", cidade: "Curitiba", estado: "PR" },
  { nome: "Pedro", telefone: "5555-5555", cidade: "Porto Alegre", estado: "RS" },
];

const table = document.getElementById("table");
const tbody = table.getElementsByTagName("tbody")[0];

data.map((item) => {
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  const cell5 = row.insertCell();
  cell1.innerHTML = item.nome;
  cell2.innerHTML = item.telefone;
  cell3.innerHTML = item.cidade;
  cell4.innerHTML = item.estado;
  const btn = document.createElement("button");
  btn.textContent = "Excluir";
  btn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja excluir?")) {
      const row = btn.closest("tr");
      row.remove();
    }
  });
  cell5.appendChild(btn);
});

const dataFor = [
  { nome: "Xingling", telefone: "1111-1111", cidade: "Hong Kong", estado: "HT" },
  { nome: "LawPingShow", telefone: "2222-2222", cidade: "Macau", estado: "CN" },
  { nome: "ChongLee", telefone: "3333-3333", cidade: "Shangain", estado: "HM" },
  { nome: "JackiChang", telefone: "4444-4444", cidade: "Pequim", estado: "TH" },
  { nome: "PingLing", telefone: "5555-5555", cidade: "Shengzen", estado: "PQ" },
];

for (let i = 0; i < dataFor.length; i++) {
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  const cell5 = row.insertCell();
  cell1.innerHTML = dataFor[i].nome;
  cell2.innerHTML = dataFor[i].telefone;
  cell3.innerHTML = dataFor[i].cidade;
  cell4.innerHTML = dataFor[i].estado;
  const btn = document.createElement("button");
  btn.textContent = "Excluir";
  btn.addEventListener("click", function () {
    if (confirm("Tem certeza que deseja excluir?")) {
      const row = this.closest("tr");
      row.remove();
    }
  });
  cell5.appendChild(btn);
}
