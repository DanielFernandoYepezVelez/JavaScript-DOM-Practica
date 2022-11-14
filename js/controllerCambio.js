/* CONTROLANDO ETIQUETAS CON EL DOM (Cuando Se Relacion HTML Y JS, Ya Existe EL DOM) */

/* 1. Asociar Las Etiquetas HTML Con JavaScript */
let etiquetaMenu = document.getElementById("menu")
let etiquetaBody = document.getElementById("body");
let etiquetaAudio = document.getElementById("audio");
let etiquetaBoton = document.getElementById("boton");
let etiquetaTitutlo = document.getElementById("titulo");
let etiquetaParrafo = document.getElementById("parrafo");
let etiquetaImagen = document.getElementById("fotografia");
let etiquetaTituloUno = document.getElementById("title__one");

/* 2.4 Controlar es DETECTAR EVENTOS */
etiquetaBoton.addEventListener("click", function(evento) {
    evento.preventDefault();

    // etiquetaBoton.classList.toggle(true) - etiquetaBoton.toggleAttribute(true) - etiquetaBoton.classList.contains('btn-primary')

    if (etiquetaBoton.classList.contains('btn-primary')) {
        changeInterface(
            'https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/imagenUno.png?alt=media&token=8099791c-34c7-4f33-818a-0d4facd928b9',
            'HISTORIA', 'fuenteLetra', 'alineado', 'text-danger', 'text-white',  
            'https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/y2mate.com%20-%20Dragon%20Ball%20Super%20%20Opening%201%20Español%20Latino%20OFICIAL%20%20Cartoon%20Network%20%20Chozetsu%20Dynamic%20%202021.mp3?alt=media&token=5cca214d-5bd2-40a8-a1b7-0e7ff8f80fc6', 
            'btn-danger', 'btn-primary', 'body');
    } else {
        changeInterface(
            'https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/imagenDos.jpg?alt=media&token=2b2df3d4-022a-4903-a354-210b089c7a5e',
            'SINOPSIS', 'fuenteLetra', 'alineado', 'text-danger', 'text-white', 
            'https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/y2mate.com%20-%20Opening%201%20Mi%20Corazón%20Encantado%20%20Dragon%20Ball%20GT%20%20Letra%20Latino.mp3?alt=media&token=f1a98803-1956-4166-9293-511568f5aabe',
            'btn-danger', 'btn-primary', 'body');        
    }
});

function changeInterface(imageSrc, title, fontType, fontDirection, fontColor1, fontColor2, audioSrc, btnColor1, btnColor2, bgBody) {
    /* 2. Controlando La Etiqueta (Modificando Las Propiedades De Las Etiquetas) */
    /* 2.1 Agregando SRC Y TEXT */
    etiquetaImagen.src = imageSrc;
    etiquetaTitutlo.textContent = title;

    if (title === 'HISTORIA') {
        /* 2.2 Agregando Y Removiendo Estilos (Desde El CSS Y Bootstrap) */
        etiquetaMenu.classList.remove('menu');
        etiquetaMenu.classList.add('menu2');

        etiquetaTituloUno.classList.add(fontType, fontDirection);
        etiquetaTitutlo.classList.add(fontType, fontDirection);

        etiquetaParrafo.classList.remove(fontColor1);
        etiquetaParrafo.classList.add(fontColor2)

        etiquetaAudio.src = audioSrc;
    
        etiquetaBoton.classList.add(btnColor1);
        etiquetaBoton.classList.remove(btnColor2);

        etiquetaBody.classList.add(bgBody);
    } else {
        /* 2.2 Agregando Y Removiendo Estilos (Desde El CSS Y Bootstrap) */
        etiquetaMenu.classList.add('menu');
        etiquetaMenu.classList.remove('menu2');

        etiquetaTituloUno.classList.remove(fontType, fontDirection);
        etiquetaTitutlo.classList.remove(fontType, fontDirection);

        etiquetaParrafo.classList.add(fontColor1)
        etiquetaParrafo.classList.remove(fontColor2);

        etiquetaAudio.src = audioSrc;

        etiquetaBoton.classList.remove(btnColor1);
        etiquetaBoton.classList.add(btnColor2);

        etiquetaBody.classList.remove(bgBody);
    }
}