document.addEventListener("DOMContentLoaded", function () {
    const textoCarta = `Bueno mi vida, primero que nada, buenas tardes o noches (esperando que sea hoy 14 de febrero cuando lo abras en ese lapso).❤️
Como siempre quiero agradecerte y esta no será la excepción de cuan agradecido estoy de que formes parte de mi vida (mi liverpol🫶) y no solo eso si no el hecho de que has estado aquí conmigo cada vez tropezando una tras otra , tras otra y tras otra… Bueno no es el punto o ¿Qué tiene que ver con la temática de San Violentín díras?
 Pues bastante, me has dicho y te he dicho en ciertas ocasiones que de aquí aprendemos y todo ese rollo ya sabes… nos volvemos más fuertes y aprendemos de ello, pero lo más importante es que es la prueba del verdadero amor “Este es el verdarero amorr🥰”  obviooo, si hemos estado en las buenas, mejores y menos peores porque razón no lo estaríamos en las no tan buenas? Tampoco es excusa de que por ello pasan los malos momentos, pero si de algo me he dado cuenta es de eso que dicen que el amor es una elección y no por el hecho de solo estar o decir si si, sino porque yo quiero que seas tu esa persona la cual me acompañe  y ser tu acompañante en vida desde el momento en que iniciamos hasta el momento en que deje de dar mi último aliento, también como lo he dicho ser mayuyos (marido y mujer) asi ya con todo y boda asi bien amarrados que te quieras arrepentir😍🤑😭(me pasé JAJA, o no?), siento que suena un poco exagerado o loco (normal) y como dije la otra vez, que a lo mejor digas que no ha pasado mucho tiempo (un año con 21 días y contando…) como para decir eso, pero es lo que yo siento muy aparte de lo quiero y deseo, porque cuando lo sabes lo sabes y contigo desde un principio lo supe… lo supiste y sabias me dijiste ayer. Contigo TODOTE o TODOTE si asi puede serlo. 🫂 De las cosas que lamento solo es el no ser la persona que muchas veces has necesitado y supone que soy:(, el héroe que yo quiero ser para ti en tus días de adversidad, ser ese rayo de luz en las penumbras de una cueva, asi como ese hombro y darte los dos míos que podrías necesitar en el momento que salgan lágrimas de esos lindos ojos de un ser tan lindo y puro como tú. Intento y trato de hacerlo, aunque no parezca o demuestre lo suficiente:(, si me preguntas si cambiaria alguna cosa de todas en general e incluyendo lo último que escribí, te diría que no, pero él no es porque de una u otra forma todo eso vivido en un pasado (que por cierto solo eso es, pasado) nos hizo estar donde estamos hoy en día y por supuesto lo que podríamos llegar a ser el día de mañana transcurrido el tiempo. TE AMOOO, nunca son suficientes y ni si quiera el mínimo del significado que tiene la palabra, porque lo que siento en mi corazón es inconmensurable🌠, sin algo que lo pueda medir, pero esperando expresarlo aunque sea dándote cuenta con las palabras en esta carta. 💌
FELIZ DÍA DE SAN VALENTÍN MI VIDA(sanviolentin🙏)💘 Espero las flores te hayan gustado💐, tan lindas como la persona que las recibió, reflejando la belleza y lo vivido que eres en mi vida, también espero este detalle presentado sea de tu agrado y quede en tu sentir. 💓 
Desde que llegaste a mi vida, cada día ha sido más bonito. Eres mi luz, mi alegría y mi todo... Solo agradezco y lo haría una y otra y otra vez, por ser la persona que eres conmigo y seas tu quien este para mi asi como lo estoy para ti. Siempre a tu disposición con mi apoyo incondicional, no hace falta decirlo más que como recordatorio de lo mucho que te quiero y lo tanto que me importas asi como también te preocuparías tu por mi.💖 Bueno ya hay que besarnos💋  Te amoo mi cuchurrumiinn, mi San Valentín 💘🫂
`;

    let i = 0;
    let elementoTexto = document.getElementById("carta-texto");

    function escribirCarta() {
        if (i < textoCarta.length) {
            elementoTexto.innerHTML += textoCarta.charAt(i);
            i++;
            setTimeout(escribirCarta, 1); // Velocidad de escritura
        }
    }

    escribirCarta(); // Inicia la animación
});
