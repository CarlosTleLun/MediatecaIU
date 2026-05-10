
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  // Alterna la dirección: izquierda/derecha
  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.classList.add('left');  // izquierda
    } else {
      card.classList.add('right'); // derecha
    }
  });

  // IntersectionObserver para animar al entrar en pantalla
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  // Alternar direcciones
  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.classList.add('left');
    } else {
      card.classList.add('right');
    }
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añade retraso según el índice
        const delay = Array.from(cards).indexOf(entry.target) * 150; // 150ms entre cards
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


