const galeria = document.getElementById('galeria');

const cerrarGaleria = () => {
  galeria.classList.remove('galeria--active'); //remover la galeria activa
  document.body.style.overflow = ''; //habilitamos el scroll nuevamente
};

export default cerrarGaleria;
