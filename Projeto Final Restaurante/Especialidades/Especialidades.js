document.addEventListener('DOMContentLoaded', function() {
    const menuCards = document.querySelectorAll('.menu-card');

    menuCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 1s';
    });

    // Animação suave ao carregar a página
    window.addEventListener('load', function() {
        menuCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = 1;
            }, index * 200); // Diferente tempo de delay para cada card
        });
    });
});
