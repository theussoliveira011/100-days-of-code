const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// #000000
// Seleciona elemento botao
const btn = document.getElementById('btn');

// Seleciona SPAN do HTML
const color = document.querySelector('.color');

// Adiciona evento de click ao botao
btn.addEventListener('click', () =>{
  // Inicio da cor hex
  let hexColor = '#';
  // Loop de repetição para gerar seis números aleatórios.
  for(let i = 0; i<6;i++){
    // busca em posições aleatórias do array até i ser maior que 6
    hexColor += hex[getRandomNumber()];
  };
  // atribui ao span o valor de hexcolor
  color.innerText = hexColor;
  // editada o background do body ao valor da hexColor
  document.body.style.backgroundColor = hexColor;
});
//Gera numeros aleatorios para abastecer o hexcolor
function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}