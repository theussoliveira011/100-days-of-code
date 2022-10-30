const funcoes = require("./funcoes");
const Aluno = require("./Aluno");
const catalogo = require("./database/catalogo.json");
const nomeArquivo = "./database/catalogo.json";

const { adicionarAluno, buscarPessoa, calcularMedia } = funcoes;

const regua = [];
// catalogo.push(aluno1, aluno2);
adicionarAluno(new Aluno(1, "Rian", 32, "female", [9, 9, 9, 9]), catalogo, nomeArquivo);
adicionarAluno(new Aluno(2, "Rey", 32, "female", [9, 9, 9, 9]), catalogo, nomeArquivo);
adicionarAluno(new Aluno(3, "Sayori", 32, "female", [9, 9, 9, 9]), catalogo, nomeArquivo);
adicionarAluno(new Aluno(4, "Cinthia", 32, "female", [9, 9, 9, 9]), catalogo, nomeArquivo);

// console.log(catalogo);

/*  Obsoleta, nova function acima! */
// function adicionarIndividuo(id, name, age, gender, notas){
//     return catalogo.push({
//         id: id,
//         name: name,
//         age: age,
//         gender: gender,
//         notas: notas
//       });
// }
// adicionarIndividuo(5, "Jefferson", 22, "no-gender", [8, 8, 9, 5], catalogo);
// console.log(catalogo); // {name: 'Jefferson', age: 22, gender: 'no-gender'}

// console.log(calcularMedia(catalogo, 5));
// console.log(catalogo);