const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');


hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.getElementById("btn-voltar").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  