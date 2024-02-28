const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const botao = document.querySelector(".botao")

hamburger.addEventListener("click", () => 
  nav.classList.toggle("active"));


botao.addEventListener("click", () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})