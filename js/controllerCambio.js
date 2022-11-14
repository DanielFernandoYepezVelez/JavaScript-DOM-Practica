/* CONTROLANDO ETIQUETAS CON EL DOM (Cuando Se Relacion HTML Y JS, Ya Existe EL DOM) */

/* 1. Asociar Las Etiquetas HTML Con JavaScript */
let etiquetaImagen = document.getElementById("fotografia");
let etiquetaTitutlo = document.getElementById("titulo");
let etiquetaParrafo = document.getElementById("parrafo");
let etiquetaBoton = document.getElementById("boton");

/* 2.4 Controlar es DETECTAR EVENTOS */
etiquetaBoton.addEventListener("click", function(evento) {
    
    /* 2. Controlando La Etiqueta (Modificando Las Propiedades De Las Etiquetas) */
    /* 2.1 Agregando SRC Y TEXT */
    etiquetaImagen.src = 'https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/imagenUno.png?alt=media&token=8099791c-34c7-4f33-818a-0d4facd928b9';
    etiquetaTitutlo.textContent = "HISTORIA";

    /* 2.2 Agregando Estilos (Desde El CSS) */
    etiquetaTitutlo.classList.add('fuenteLetra', 'alineado');

    /* 2.3 Remover Estilos */
    etiquetaParrafo.classList.remove('text-danger');
});