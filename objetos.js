// Object.keys()

const aluno = {
    nome: "Maria",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
};

const propriedades = Object.keys(aluno);

console.log(propriedades);


// JSON.stringify()

const outroAluno = {
    nome: "João",
    idade: 17
};

const dados = JSON.stringify(outroAluno);

console.log(dados);