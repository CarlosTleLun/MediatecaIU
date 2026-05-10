  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    header.style.backgroundPositionY = `${scrollPos * 0.5}px`; // Ajusta 0.5 para velocidad
  });


document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todas tus secciones
  const sections = document.querySelectorAll(
    ".mediateca-intro, .mediateca-ofrecemos, .mediateca-unete"
  );

  // Agrega la clase base
  sections.forEach(sec => sec.classList.add("scroll-effect"));

  // Intersection Observer para activarlas al entrar en pantalla
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Si no quieres que desaparezcan al salir, descomenta la siguiente línea
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // porcentaje visible para activar
  );

  sections.forEach(sec => observer.observe(sec));
});


