// getFullYear()

const data = new Date("2026-10-08");

const ano = data.getFullYear();

console.log(ano);


// toLocaleDateString()

const outraData = new Date("2026-10-08");

const dataFormatada = outraData.toLocaleDateString("pt-BR");

console.log(dataFormatada);