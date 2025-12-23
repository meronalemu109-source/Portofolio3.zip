// JavaScript Code Start

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle Mobile Menu
    mobileMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });

    // Smooth Scroll & Close Menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerHeight = document.querySelector('.header').offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });

            navbar.classList.remove('active');
        });
    });

    // Highlight Active Link on Scroll
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// JavaScript Code End