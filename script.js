let slideIndex = [0, 0]; 
const totalSlides = 3; 

function showSlides(project) {
    let slides = document.querySelectorAll(`.slide-${project}`);

    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === slideIndex[project]) {
            slide.classList.add("active");
        }
    });
}

function nextSlide(project) {
    slideIndex[project] = (slideIndex[project] + 1) % totalSlides;
    showSlides(project);
}

function prevSlide(project) {
    slideIndex[project] = (slideIndex[project] - 1 + totalSlides) % totalSlides;
    showSlides(project);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(0);
    showSlides(1);
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100; 

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active'); 
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 