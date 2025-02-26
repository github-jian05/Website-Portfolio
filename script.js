// JavaScript for Image Slider with Smooth Animation
let slideIndex = [0, 0]; // Track slide index for each project
const totalSlides = 3; // Number of images per project

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

// Initialize all slides on page load
document.addEventListener("DOMContentLoaded", () => {
    showSlides(0);
    showSlides(1);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100; // Adjust this for different effect timing

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active'); // Add active class when visible
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run initially to check if elements are already in view