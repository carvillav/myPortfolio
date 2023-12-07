/* Scroll reveal */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 850
});

ScrollReveal().reveal('.left, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.left h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.left p, .about-content, .clock', { origin: 'right' });

/* Typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Functional Analyst', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
});