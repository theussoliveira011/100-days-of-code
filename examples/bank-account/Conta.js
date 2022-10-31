module.exports = function Conta(name, surname,numberCont, cpf){
  this.id = parseInt(Math.random() * 10);
  this.name = name;
  this.surname = surname;
  this.numberCont = numberCont;
  this.cpf = cpf;
  this.dateCreation = new Date();
}