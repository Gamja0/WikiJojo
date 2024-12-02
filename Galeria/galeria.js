document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000, // Cambia de imagen cada 4 segundos
        wrap: true, // Continúa desde el principio al llegar al final
    });
});