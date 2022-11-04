// Array de objetos representando os membros do time
const membros = [
{
  id: 1,
  name: "Matheus Oliveira",
  job: "Web Developer",
  img: "https://ca.slack-edge.com/T9UGMJ132-U03R09GU1QU-c06cae5ad92c-512",
  text: "Gosto de comunicação e me interesso por assuntos da mente. Sou amante de livros sobre o comportamento humano. Quando tenho um objetivo em mente, eu sonho com isso eu acordo e respiro o meu objetivo. Sou uma pessoa centrada e dou meu melhor em tudo, até nas pequenas coisas.",
},
{
  id: 2,
  name: "Juliana",
  job: "Web Developer",
  img: "https://ca.slack-edge.com/T9UGMJ132-U03RAFPFCJV-6f37a8d2d11a-512",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, est. Dolores iusto non quaerat! Minus debitis ex provident reprehenderit at?",
},
{
  id: 3,
  name: "Waldemar",
  job: "Web Developer",
  img: "https://ca.slack-edge.com/T9UGMJ132-U03QUTFG74M-c5612ce3cdde-512",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, est. Dolores iusto non quaerat! Minus debitis ex provident reprehenderit at?",
},
{
  id: 4,
  name: "Guilherme Belchior",
  job: "Web Developer",
  img: "https://ca.slack-edge.com/T9UGMJ132-U03DJ1PDGV6-cbd6464c07c7-512",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, est. Dolores iusto non quaerat! Minus debitis ex provident reprehenderit at?",
},
{
  id: 5,
  name: "Gabriel Fernandes",
  job: "Web Developer",
  img: "https://ca.slack-edge.com/T9UGMJ132-U03QR897MQE-d2f137dc7b84-512",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, est. Dolores iusto non quaerat! Minus debitis ex provident reprehenderit at?",
},
{
  id: 6,
  name: "Cristiano",
  job: "Web Developer",
  img: "https://ca.slack-edge.com/T9UGMJ132-U03QR89C806-9d22f953e139-512",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, est. Dolores iusto non quaerat! Minus debitis ex provident reprehenderit at?",
},
];

// selecionando os espaços necessarios
const img = document.getElementById('person-img');
const autor = document.getElementById('author');
const job = document.getElementById('job');
const description = document.getElementById('description');

// selecionando os botoes
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Variavel usada para acessar o primeiro elemento do array membros
let membro = 0;

// Adiciona um evento no carregamento inicial da pagina
window.addEventListener('DOMContentLoaded', () => {
  showMember();
});

// Função usada para acessar os membros da página.
function showMember(){
  const item = membros[membro];
  img.src = item.img;
  autor.innerText = item.name;
  job.innerText = item.job;
  description.innerText = item.text;
};

// Adiciona uma escuta nesse botao para trocar o membro
nextBtn.addEventListener('click', function(){
  membro++;
  if(membro > membros.length - 1){
    membro = 0;
  }
  // Ao final executa a função com o novo valor do membro
  showMember();
});

prevBtn.addEventListener('click', function() {
  membro--;
  if(membro < membros.length){
    membro = 0;
  }
  showMember();
})