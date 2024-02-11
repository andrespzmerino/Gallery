import cerrarGaleria from './cerrarGaleria';
import slideClick from './slideClick';
import { cargarAnteriorSiguiente } from './cargarImagen';
import carousel from './carousel';

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (e) => {
  const boton = e.target.closest('button');
  // Cerrar galeria
  if (boton?.dataset?.accion === 'cerrar-galeria') {
    cerrarGaleria();
  }
  // carousel slide click
  if (e.target.dataset.id) {
    slideClick(e);
  }
  // siguiente-imagen
  if (boton?.dataset?.accion === 'siguiente-imagen') {
    cargarAnteriorSiguiente('siguiente');
  }

  // anterior-imagen
  if (boton?.dataset?.accion === 'anterior-imagen') {
    cargarAnteriorSiguiente('anterior');
  }

  // carousel adelante ->
  if (boton?.dataset?.accion === 'siguiente-slide') {
    carousel('adelante');
  }

  // carousel atras <-
  if (boton?.dataset?.accion === 'anterior-slide') {
    carousel('atras');
  }
});
