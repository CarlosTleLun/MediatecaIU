document.addEventListener("DOMContentLoaded", function () {
    const abrirBtn = document.getElementById("abrirCreditos");
    const modal = document.getElementById("modalCreditos");
    const cerrarBtn = document.getElementById("cerrarModal");

    // Abrir modal
    abrirBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Cerrar modal con botón
    cerrarBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});


