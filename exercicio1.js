let index = 1;
let names = [];

while (true) {
  let nome = prompt("Digite um nome:");
  if (nome === null) break;
  names.push({ index: index, name: nome });
  index++;
}

let table = "<table>";
table += "<tr><th>Índice</th><th>Nome</th></tr>";

for (let i = 0; i < names.length; i++) {
  table += `<tr><td>${names[i].index}</td><td>${names[i].name}</td></tr>`;
}

table += "</table>";

document.write(table);