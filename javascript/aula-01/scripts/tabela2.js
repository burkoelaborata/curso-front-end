document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { nome: "João", telefone: "1111-1111", cidade: "São Paulo", estado: "SP" },
    { nome: "Maria", telefone: "2222-2222", cidade: "Rio de Janeiro", estado: "RJ" },
    { nome: "José", telefone: "3333-3333", cidade: "Belo Horizonte", estado: "MG" },
    { nome: "Fernanda", telefone: "4444-4444", cidade: "Curitiba", estado: "PR" },
    { nome: "Pedro", telefone: "5555-5555", cidade: "Porto Alegre", estado: "RS" },
  ];

  const table = document.getElementById("table");
  const tbody = table.getElementsByTagName("tbody")[0];

  for (let i = 0; i < data.length; i++) {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    cell1.innerHTML = data[i].nome;
    cell2.innerHTML = data[i].telefone;
    cell3.innerHTML = data[i].cidade;
    cell4.innerHTML = data[i].estado;
    const excluirButton = document.createElement("button");
    excluirButton.innerHTML = "Excluir";
    excluirButton.addEventListener("click", function () {
      const rowToRemove = this.closest("tr");
      rowToRemove.remove();
    });
  }
});
