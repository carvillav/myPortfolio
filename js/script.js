/* Scroll sections active link */
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.sBody .nav-link');
    var sections = document.querySelectorAll('section');
    var portfolioLink = document.querySelector('.logo');

    // Add an event listener to prevent default click behavior
    portfolioLink.addEventListener('click', function(event) {
        event.preventDefault();
    });

    // Function to set the active link based on the stored selection
    function setActiveLink() {
        var storedLink = localStorage.getItem('selectedLink');

        links.forEach(function(link) {
            var linkURL = link.getAttribute('href');
            var isLinkActive = storedLink && storedLink.includes(linkURL);

            if (isLinkActive) {
                link.classList.add('active');
                link.style.color = '#0ef';
            } else {
                link.classList.remove('active');
                link.style.color = '#fff'; // Make sure to reset the color in other situations
            }
        });
    }

    // Add the click event to each link
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Store the selected link in local storage
            localStorage.setItem('selectedLink', link.getAttribute('href'));

            // Remove 'active' class from all links within sBody
            links.forEach(function(innerLink) {
                innerLink.classList.remove('active');
                innerLink.style.color = '#fff';
            });

            // Add 'active' class to clicked link
            link.classList.add('active');
            link.style.color = '#0ef';
        });

        // Add hover event listener
        link.addEventListener('mouseenter', function() {
            link.style.color = '#0ef';
        });

        link.addEventListener('mouseleave', function() {
            // Reset color on mouse leave
            if (!link.classList.contains('active')) {
                link.style.color = '#fff';
            }
        });
    });

    function changeLinkColor() {
        var scrollPosition = window.scrollY;

        sections.forEach(function(section, index) {
            var sectionTop = section.offsetTop - 100; // Adjust this value according to your needs
            var sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                links.forEach(function(link, i) {
                    link.style.color = i === index ? '#0ef' : '#fff'; // Change color based on the section index
                });
            }
        });
    }

    // Calls the function when a scroll event occurs
    window.addEventListener('scroll', changeLinkColor);

    // Set the active link on page load
    setActiveLink();

    // Clear stored link if this is the first time the page is loaded
    if (!localStorage.getItem('selectedLink')) {
        localStorage.removeItem('selectedLink');
    }
});


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