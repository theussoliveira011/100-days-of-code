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

function Aluno(id, name, age, gender, notas){
  this.id = id;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.notas = notas;
}
/* nova */
var aluno1 = new Aluno(5, "Ricardo", 28, "male", [9, 5, 8, 6]);
var aluno2 = new Aluno(6, "Richard", 24, "male", [2, 6, 9, 7]);
catalogo.push(aluno1, aluno2);
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

function buscarIndividuo(array, id){
  
   return array.find(pessoa => pessoa.id == id);

  // for(let i = 0; i < array.length;i++){
  //   if(array[i].id == id){
  //     return array[i];
  //   }
  // } 
  // return false;
}

console.log(buscarIndividuo(catalogo, 5));

function calcularMedia(array, id){
  let sunrise = buscarIndividuo(array, id);
  let media = 0;
  for(let i = 0; i < sunrise.notas.length; i++){
    media += sunrise.notas[i];
  } 
  media /= 4;
  if(sunrise.media >= 10){
    sunrise.media = "Tu passou papai com distinção \n" + "Nota: " + media;
  } else if(sunrise.media >= 7){
    sunrise.media = "Tu passou com: " + media;
  } else {
    sunrise.media = "Você reprovou";
  }
  return sunrise;
}
console.log(calcularMedia(catalogo, 5));
// console.log(catalogo);