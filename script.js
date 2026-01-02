// FAQ Acordeão
document.querySelectorAll('.faq-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
        
        // Altera o ícone de + para -
        const span = button.querySelector('span');
        span.innerText = item.classList.contains('active') ? '-' : '+';
    });
});

// Scroll Reveal suave
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .step-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease-out";
    observer.observe(el);
});

// Listener para tornar visível
window.addEventListener('scroll', () => {
    document.querySelectorAll('.visible').forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});