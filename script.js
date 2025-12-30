const email = "info@reclaimedu.ca"

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    const navClose = document.querySelector('.nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    });

//sticky header
    // const sticky = document.querySelector(".navbar");

    // window.addEventListener("scroll", () => {
    // const scrollY = window.scrollY;
    // const fadeEnd = 400;

    // const opacity = Math.max(1 - scrollY / fadeEnd, 0);
    // const translateY = Math.min(scrollY / 5, 40);

    // sticky.style.opacity = opacity;
    // sticky.style.transform = `translateY(${translateY}px)`;
    // });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    