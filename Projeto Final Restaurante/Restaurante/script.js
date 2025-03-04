let slideIndex = 0;
showSlides(slideIndex);

// Função para mudar slide manualmente
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Função para mostrar o slide correto
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slides[slideIndex].classList.add("active");
}

// Auto-slide a cada 5 segundos
setInterval(function() {
    changeSlide(1);
}, 5000);



