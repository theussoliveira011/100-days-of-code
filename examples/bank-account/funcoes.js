const fs = require('fs');

module.exports = {
  adicionarConta: (conta, catalogo, nomeArquivo) => {
    catalogo.push(conta);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return "Conta adicionada com sucesso!";
  },
  buscarConta(catalogo, cpf){
    return catalogo.find(conta => conta.cpf == cpf ? conta : false);
  },
  
};