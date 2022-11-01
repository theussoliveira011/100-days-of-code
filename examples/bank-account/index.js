const Conta = require('./Conta');
const ContaCorrente = require('./ContaCorrente');
const funcoes = require('./funcoes');
const {adicionarConta} = funcoes;
const catalogo = require('./database/catalogo.json');
const { buscarConta } = require('./funcoes');
const nomeArquivo = './database/catalogo.json';


var contaCorrente1 = new ContaCorrente("Ricardo", "Cleber", 5, '47608923890', 85);

// adicionarConta(new ContaCorrente("Ricardo", "Kbleber", 8, '55588825', 98), catalogo, nomeArquivo);
// adicionarConta(new Conta("Jefferson", "Matheus", 1, "000000001"), catalogo, nomeArquivo);

// console.log(buscarConta(catalogo, "47608923890"))