// Detectar scroll para añadir/quitar la clase
window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  const headerHeight = header.offsetHeight; // alto del header (imagen)

  // cuando bajas más allá de la imagen
  if (window.scrollY > headerHeight - 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
