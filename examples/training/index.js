const funcoes = require("./funcoes");
const Aluno = require("./Aluno");
const catalogo = require("./database/catalogo.json");
const { alteraIdade } = require("./funcoes");
const nomeArquivo = "./database/catalogo.json";

const { adicionarPessoa, buscarPessoa, calcularMedia } = funcoes;

/* ADICIONA Aluno*/
// adicionarAluno(new Aluno(4, "Cinthia", 32, "female", [9, 9, 9, 9]), catalogo, nomeArquivo);

/* BUSCAR Aluno*/
// buscarPessoa(catalogo, 4)

/* CALCULAR Media*/
alteraIdade(catalogo, 3, 45);
console.log(catalogo[2]);