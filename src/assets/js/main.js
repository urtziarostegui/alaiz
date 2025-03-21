document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const topBar = document.querySelector('.top-bar');
  const menuBar = document.querySelector('.menu-bar');
  const heroSection = document.querySelector('.content'); // Sección hero

  let lastScrollTop = 0; // Para almacenar la última posición del scroll

  // Función para alternar el menú (abrir/cerrar)
  function toggleMenu() {
    menu.classList.toggle('active'); // Muestra u oculta el menú
    hamburger.classList.toggle('open'); // Cambia el estilo del botón hamburguesa
  }

  // Ajusta el margen superior de la sección hero según el tamaño del menú
  function adjustHeroMargin() {
    const menuHeight = menuBar.offsetHeight; // Altura del menú
    const totalHeight = menuHeight; // Sólo el menú

    if (heroSection) {
      heroSection.style.marginTop = `${totalHeight}px`; // Aplica el margen superior
    }
  }

  // Ajusta el margen superior del hero al cargar la página y al redimensionar
  window.addEventListener('load', adjustHeroMargin);
  window.addEventListener('resize', adjustHeroMargin);

  // Escuchar el clic del menú hamburguesa
  hamburger.addEventListener('click', toggleMenu);
});