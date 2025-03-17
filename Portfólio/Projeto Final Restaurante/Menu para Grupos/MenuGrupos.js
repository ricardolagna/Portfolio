// Código para mostrar/ocultar o menu
document.addEventListener('DOMContentLoaded', function() {
    const menuCards = document.querySelectorAll('.menu-card');
    
    // Animação ao clicar em um cartão do menu
    menuCards.forEach(card => {
        const details = card.querySelector('.menu-details');
        details.style.display = 'none'; // Inicialmente oculto

        card.addEventListener('click', function() {
            this.classList.toggle('active');
            if (details.style.display === 'none' || !details.style.display) {
                details.style.display = 'block';
                details.style.opacity = '0';
                setTimeout(() => {
                    details.style.opacity = '1'; // Fade in
                }, 10);
            } else {
                details.style.opacity = '0'; // Fade out
                setTimeout(() => {
                    details.style.display = 'none';
                }, 300); // Tempo igual ao da animação
            }
        });
    });

    // Botão para mostrar/ocultar o menu
    const toggleMenuButton = document.querySelector('.toggle-menu-btn');
    const menuContainer = document.querySelector('.menu-container');

    toggleMenuButton.addEventListener('click', function() {
        if (menuContainer.style.display === 'none' || !menuContainer.style.display) {
            menuContainer.style.display = 'flex';
            this.textContent = 'Ocultar Menu';
        } else {
            menuContainer.style.display = 'none';
            this.textContent = 'Mostrar Menu';
        }
    });

    // Inicialmente, ocultar o menu
    menuContainer.style.display = 'flex';
});

