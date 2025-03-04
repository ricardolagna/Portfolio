let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const isActive = button.classList.contains('active');

        document.querySelectorAll('.accordion-button').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            button.classList.add('active');
            accordionContent.style.display = 'block';
        }
    });
});