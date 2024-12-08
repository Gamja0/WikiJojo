// Espera a que todo el contenido del DOM se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el elemento del carrusel por su ID ('carouselExampleIndicators')
    const myCarousel = document.querySelector('#carouselExampleIndicators');

    // Crea una nueva instancia del carrusel de Bootstrap para el elemento seleccionado
    const carousel = new bootstrap.Carousel(myCarousel, {
        // Configura el intervalo entre cambios automáticos de imágenes (4 segundos)
        interval: 4000,

        // Activa la opción para que el carrusel vuelva al principio al llegar al final
        wrap: true,
    });
});
