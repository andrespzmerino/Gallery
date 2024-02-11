const galeria = document.getElementById('galeria');

const carousel = (direccion) => {
    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entradas) => {
        const slideVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        });

        if (direccion === 'atras') {
            const primerSlideVisible = slideVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            if (indexPrimerSlideVisible >= 1) {
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });
            }
        } else if (direccion === 'adelante') {
            const ulitmoSlideVisible = slideVisibles[slideVisibles.length - 1];
            const indexUlitmoSlideVisible = entradas.indexOf(ulitmoSlideVisible);

            if (entradas.length - 1 > indexUlitmoSlideVisible) {
                entradas[indexUlitmoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });
            }
        }

        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, opciones);

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};

export default carousel;
