/* CONTROLANDO ETIQUETAS CON EL DOM (Cuando Se Relacion HTML Y JS, Ya Existe EL DOM) */

/* 1. Asociar Las Etiquetas HTML Con JavaScript */
let etiquetaImagen = document.getElementById("fotografia");
let etiquetaTitutlo = document.getElementById("titulo");
let etiquetaParrafo = document.getElementById("parrafo");
let etiquetaBoton = document.getElementById("boton");

/* 2. Controlando La Etiqueta (Modificando Las Propiedades De Las Etiquetas) */
/* 2.1 Agregando SRC Y TEXT */
etiquetaImagen.src = '../img/imagenUno.png';
etiquetaTitutlo.textContent = "HISTORIA";

/* 2.2 Agregando Estilos (Desde El CSS) */
etiquetaTitutlo.classList.add('fuenteLetra', 'alineado');

/* 2.3 Remover Estilos */
etiquetaParrafo.classList.remove('text-danger');

/* 2.4 Controlar es DETECTAR EVENTOS */
etiquetaBoton.addEventListener("click", function(evento) {
    alert("Estamos Haciendo Clic");
});