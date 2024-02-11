/**
 * Archivo que se encarga del evento de las categorias.
 */
import dataFotos from './data/fotos';
import { cargarImagen } from './galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');
let categoriaActiva;

// Agregamos el event listener a las categorias.
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    // Comprobamos que lo que se le hace click contenga el data-categoria.

    //busca elementos de adentro hacia afuera
    if (e.target.closest('a')) {
        categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria.dataset.categoria = categoriaActiva; //agregamos la categoria activa para el carousel

        // Obtenemos las fotos que corresponden a la categoria
        const fotos = dataFotos.fotos[categoriaActiva];
        const carousel = galeria.querySelector('.galeria__carousel-slides');

        // Reiniciamos(limpiar) el carousel
        carousel.innerHTML = '';

        // Agregamos un overflow hidden al body.
        document.body.style.overflow = 'hidden'; //para ocultar la barra de scroll

        // Agregamos la clase active a la galeria.
        galeria.classList.add('galeria--active');

        // Tomamos la informacion de la primera imagen de la categoria y la cargamos en el DOM.
        const { id, nombre, ruta, descripcion } = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion);

        fotos.forEach((foto) => {
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img
                        class="galeria__carousel-image"
                        src="${foto.ruta}"
                        data-id="${foto.id}"
                        alt=""
                    />
                </a>
            `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        // Agregamos la clase active al primer elemento.
        galeria
            .querySelector('.galeria__carousel-slide')
            .classList.add('galeria__carousel-slide--active');
    }
});
