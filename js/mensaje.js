//Mensaje
function escribirMensaje(texto) {
    let mensaje = document.getElementById("mensaje");
    let i = 0;
    let intervalo = setInterval(() => {
        if (i < texto.length) {
            mensaje.innerHTML += texto.charAt(i);
            i++;
        } else {
        clearInterval(intervalo); 
    }
    }, 65); 
}
document.addEventListener("DOMContentLoaded", function () {
    escribirMensaje("💖¡Sabía que dirías que sí! (o no te quedo de otra ni modo🥸). Eres lo mejor que me ha pasado corazón. 🫂💖 ");
});

// Lista de razones
const razones = [
    "Porque siempre me apoyas en todo. 💖",
    "Porque me haces reír en muchos de mis buenos y malos días. 🫶",
    "Porque eres bella por dentro de corazón y sensible haciendote ser muy especial.🫂",
    "Porque eres hermosa por fuera, de pies a cabeza, de un lado a otro por donde sea que le veas. 😘",
    "Porque siempre tienes palabras bonitas para mí. 💕",
    "Porque contigo cada día es especial. ✨",
    "Porque me haces sentir la persona más afortunada. 💘"
];

function mostrarRazones() {
    const lista = document.getElementById("lista-razones");
    lista.innerHTML = ""; 
    razones.forEach((razon, index) => {
        setTimeout(() => {
            const li = document.createElement("li");
            li.textContent = razon;
            lista.appendChild(li);
            }, index * 1000); 
    });
}
document.addEventListener("DOMContentLoaded", mostrarRazones);

//fotos
const fotos = [
        { src: "img/2.jpg", frase: "Haces que a tu lado todo sea especial. 💖" },
        { src: "img/11.jpg", frase: "Le das sentido a esta novela llamada vida.🫶" },
        { src: "img/4.jpg", frase: "Así luce todo lo perfecto. ✨" },
        { src: "img/7.jpg", frase: "Muakk!❣️(tronado obvioo😚)." },
        { src: "img/12.jpg", frase: "Muy arancel nos vemos. 🫰" },
        { src: "img/9.jpg", frase: "Ese día tan grandioso... Pongan de fondo Amanéceme.🐝❤️" },
        { src: "img/10.jpg", frase: "💤Captado con la bella durmiente. 💕" },
        { src: "img/13.jpg", frase: "🎇 Dama y caballero (yo el tuyo y tu la mía¿?💘)." },
        { src: "img/15.jpg", frase: "Mi regalo tu mi vida. 🎁 " },
        { src: "img/17.jpg", frase: "Cachetitooss, mi corazoncito, mi cuchurrumiii 🥰" },
        { src: "img/18.jpg", frase: " 🥚 🍳 traz traz! 🙈" },
        { src: "img/6.jpg", frase: "Que bonito es lo bonitooo<3 " },
        { src: "img/16.jpg", frase: "Pero si cambiamos o nadota? Pero igual de morados(más cada día...). 💘" },
    ];

    let indice = 0;

    function cambiarFoto() {
        const imagen = document.getElementById("imagen-carrusel");
        const frase = document.getElementById("frase-carrusel");

        imagen.src = fotos[indice].src;
        frase.textContent = fotos[indice].frase;

        indice = (indice + 1) % fotos.length; 
    }

    setInterval(cambiarFoto, 3500);

    document.addEventListener("DOMContentLoaded", cambiarFoto);

    document.getElementById("btnMusica").addEventListener("click", function () {
    document.getElementById("musica").play();
    this.style.display = "none"; // Ocultar el botón después de hacer clic
});

document.getElementById("btnMusica").addEventListener("click", function () {
    let album = document.getElementById("album");
    album.style.display = "flex"; // Mostrar álbum
});

//Aparecer
document.addEventListener("DOMContentLoaded", function () {
    let btnMusica = document.getElementById("btnMusica");
    let contenido = document.getElementById("contenido");
    let musica = document.getElementById("musica");

    btnMusica.addEventListener("click", function () {
        // Mostrar el contenido
        contenido.style.display = "block";

        // Reproducir la música
        musica.play();
    });
});
