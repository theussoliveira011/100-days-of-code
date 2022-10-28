const catalogo = [{
  id: 1,
  name: "João",
  age: 21,
  gender: 'male',
  notas: [8, 9, 10, 5]
},{
  id: 2,
  name: "Matheus",
  age: 28,
  gender: 'female',
  notas: [8, 9, 10, 5]
},{
  id: 3,
  name: "Henrique",
  age: 29,
  gender: 'male',
  notas: [8, 9, 10, 5]
},{
  id: 4,
  name: "Ricardo",
  age: 29,
  gender: 'female',
  notas: [8, 9, 10, 5]
}];

function adicionarIndividuo(id, name, age, gender, notas){
    return catalogo.push({
        id: id,
        name: name,
        age: age,
        gender: gender,
        notas: notas
      });
}

adicionarIndividuo(5, "Jefferson", 22, "no-gender", [8, 8, 9, 5], catalogo);
// console.log(catalogo); // {name: 'Jefferson', age: 22, gender: 'no-gender'}

function buscarIndividuo(array, id){
  
   return array.find(pessoa => pessoa.id == id);

  // for(let i = 0; i < array.length;i++){
  //   if(array[i].id == id){
  //     return array[i];
  //   }
  // } 
  // return false;
}

function calcularMedia(array, id){
  let sunrise = buscarIndividuo(array, id);
  let media = 0;
  for(let i = 0; i < sunrise.notas.length; i++){
    media += sunrise.notas[i];
  } 
  return media / 4;
}

console.log(calcularMedia(catalogo, 4));
