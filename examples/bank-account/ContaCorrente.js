const Conta = require('./Conta');

module.exports = function ContaCorrente(name, surname,numberCont, cpf, valorEmprestado){
  Conta.call(this, name, surname, numberCont, cpf);
  this.valorEmprestado = valorEmprestado;
}
