const fs = require("fs");


module.exports = {
  adicionarAluno: (Aluno, catalogo, nomeArquivo) => {
    catalogo.push(Aluno);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return 'Aluno adicionado com sucesso!';
  },
  buscarPessoa: (array, id) => {
    return array.find(pessoa => pessoa.id == id);
     // for(let i = 0; i < array.length;i++){
     //   if(array[i].id == id){
     //     return array[i];
     //   }
     // } 
     // return false;
  },
  calcularMedia: (array, id) => {
    let sunrise = this.buscarPessoa(array, id);
    let media = 0;
    for(let i = 0; i < sunrise.notas.length; i++){
      media += sunrise.notas[i];
    } 
    media /= 4;
    sunrise.media = media;
    return sunrise;
  }
}