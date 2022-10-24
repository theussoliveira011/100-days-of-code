var pessoa = {
  name: ["Matheus", "Oliveira"],
  age: 22,
  gender: "male",
  sunder: ['hello', 'hi', '8'],
  bio: () => {
    console.log(
      `This name is ${this.name} 
      age: ${this.age} 
      gender: ${this.gender} 
      interesses is ${this.sunder[0]}, 
                    ${this.sunder[1]} and 
                    ${this.sunder[2]}`);
  },
  saudacao: () => {
    alert("Oi! Eu sou " + this.name + ".");
  },
};
// console.log(pessoa.name);
// console.log(pessoa.age);
// // console.log(pessoa.interesses[2]);
// console.log(pessoa.sunder[1]);
// console.log(pessoa.bio());

// alterando propriedades