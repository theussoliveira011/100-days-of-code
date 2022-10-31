const fs = require("fs");


module.exports = {

  adicionarPessoa: (Pessoa, catalogo, nomeArquivo) => {
    catalogo.push(Pessoa);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return 'Aluno adicionado com sucesso!';
  },

  buscarPessoa: (catalogo, id) => {
    return catalogo.find(pessoa => pessoa.id == id ? pessoa : false);
    // for(let i = 0; i < array.length;i++){
    //   if(array[i].id == id){
    //     return array[i];
    //   }
    // } 
    // return false;
  },
  calcularMedia: (catalogo, id) => {
    let adicionaMedia = catalogo.find(pessoa => pessoa.id == id ? pessoa : false);
    let media = 0;
    for(let i = 0; i < adicionaMedia.notas.length; i++){
      media += adicionaMedia.notas[i];
    } 
    media /= 4;
    adicionaMedia.media = media;
    return adicionaMedia;
  },
  alteraIdade: (catalogo, id, novaIdade) => {
    let alteraIdade = catalogo.find(pessoa => pessoa.id == id ? pessoa : false);
    alteraIdade.age = novaIdade;
  },
  
}