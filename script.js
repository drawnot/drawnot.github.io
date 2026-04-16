// Intersection Observer for reveal animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.feature-card, .hero-content, .hero-image');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.8)';
            header.style.padding = '20px 0';
        }
    });
});

// Define reveal animation behavior
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);
