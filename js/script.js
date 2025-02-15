document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.getElementById("btnNo");

    btnNo.addEventListener("mouseover", function () {

        const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
        const y = Math.random() * (window.innerHeight - btnNo.clientHeight);

        btnNo.style.position = "absolute";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });
});

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");

    // Tamaño aleatorio entre 20px y 50px
    let size = Math.random() * 50 + 20;  
    corazon.style.width = `${size}px`;
    corazon.style.height = `${size}px`;

    // Posición inicial aleatoria
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Duración aleatoria entre 3 y 5s

    document.body.appendChild(corazon);

    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// Generar corazones cada 500ms
setInterval(crearCorazon, 100);

document.getElementById("btnSi").addEventListener("click", function () {
    window.location.href = "mensaje.html"; // Redirige a la nueva página
});

