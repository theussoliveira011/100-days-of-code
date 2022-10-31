const Conta = require('./Conta');
const funcoes = require('./funcoes');
const {adicionarConta} = funcoes;
const catalogo = require('./database/catalogo.json');
const { buscarConta } = require('./funcoes');
const nomeArquivo = './database/catalogo.json';


// adicionarConta(new Conta("Jefferson", "Matheus", 1, "000000001"), catalogo, nomeArquivo);

// console.log(buscarConta(catalogo, "47608923890"))