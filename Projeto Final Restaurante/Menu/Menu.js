document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    
    // Função de animação de entrada
    const animateMenuItems = () => {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("visible");
            }, index * 100); // Delay crescente para efeito de cascata
        });
    };

    // Função de Filtragem do Menu
    window.filterMenu = function() {
        const searchQuery = document.getElementById("menuSearch").value.toLowerCase();

        menuItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();

            if (itemText.includes(searchQuery)) {
                item.style.display = "block"; // Mostrar itens que correspondem à pesquisa
            } else {
                item.style.display = "none"; // Ocultar itens que não correspondem
            }
        });

        // Após filtrar, aplicar a animação novamente para os itens visíveis
        animateMenuItems();
    };

    // Chamar a função de animação quando a página carregar
    animateMenuItems();
});

