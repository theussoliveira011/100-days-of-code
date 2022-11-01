// Seleciona botoes e contadores da pagina
const contador = document.getElementById('contador');
const btnDiminuir = document.getElementById('diminuir');
const btnResetar = document.getElementById('resetar');
const btnIncrementar = document.getElementById('incrementar');

// Cria um incrementador para assumir o lugar do contador
let incrementador = 0;

// EVENTOS
btnDiminuir.addEventListener('click', () => {
  // btn se clicado decrementa 1
  incrementador--;
  // adicionado no contador o valor de incrementador
  contador.innerHTML = incrementador;
})

//Reseta todos os valores do contador e incrementador
btnResetar.addEventListener('click', () => {
  contador.innerHTML = 0;
  incrementador = 0;
});

btnIncrementar.addEventListener('click', () => {
  // btn se clicado incrementa 1 ao contador
  incrementador += 1;
  // adiciona no contador o valor de incrementador
  contador.innerHTML = incrementador;
  if(incrementador > 30){
    contador.innerText = "Você zerou o contador";
  }
});