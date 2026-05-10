document.querySelectorAll('.content-ingles li').forEach(item => {
    item.addEventListener('click', () => {
        const contentId = item.dataset.content;
        const link = item.dataset.link;

        if(contentId) {
            // Alterna mostrar/ocultar el div
            const div = document.getElementById(contentId);
            div.style.display = div.style.display === 'block' ? 'none' : 'block';
        } else if(link) {
            // Abre la página
            window.open(link, '_blank'); // puedes cambiar '_blank' por '_self' si quieres abrir en la misma pestaña
        }
    });
});
document.querySelectorAll('.content-frances li').forEach(item => {
    item.addEventListener('click', () => {
        const contentId = item.dataset.content;
        const link = item.dataset.link;

        if(contentId) {
            // Alterna mostrar/ocultar el div
            const div = document.getElementById(contentId);
            div.style.display = div.style.display === 'block' ? 'none' : 'block';
        } else if(link) {
            // Abre la página
            window.open(link, '_blank'); // puedes cambiar '_blank' por '_self' si quieres abrir en la misma pestaña
        }
    });
});
document.querySelectorAll('.content-aprender li').forEach(item => {
    item.addEventListener('click', () => {
        const contentId = item.dataset.content;
        const link = item.dataset.link;

        if(contentId) {
            // Alterna mostrar/ocultar el div
            const div = document.getElementById(contentId);
            div.style.display = div.style.display === 'block' ? 'none' : 'block';
        } else if(link) {
            // Abre la página
            window.open(link, '_blank'); // puedes cambiar '_blank' por '_self' si quieres abrir en la misma pestaña
        }
    });
});