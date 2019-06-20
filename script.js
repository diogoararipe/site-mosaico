//Uma observação sobre esse arquivo: ele só serve como referência de todas as funções que eu utilizei no html, mas não está linkado

//Função relacionada a troca de logo da equipe:

function trocaimagem1() {
  document.getElementById("homeicon").src = "images/menu-icon.png";
}

function trocaimagem2() {
  document.getElementById("homeicon").src = "images/menu-icon-white.png";
}

//Funções relacionadas aos cards de membros da equipe, não está linkado porque usa js babel

const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1)
let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
    
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
  })
}, false);