document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbarContainer');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const navbar = document.querySelector('.navbar');
    const logoTextSpans = document.querySelectorAll('#logo-text span');
    const menuIconBars = document.querySelector('.menu-icon-bars');
    const menuIconClose = document.querySelector('.menu-icon-close');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbarContainer.classList.add('scrolled');
        } else {
            navbarContainer.classList.remove('scrolled');
        }
    });

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            if (navbar.classList.contains('active')) {
                menuIconBars.style.display = 'none';
                menuIconClose.style.display = 'block';
            } else {
                menuIconBars.style.display = 'block';
                menuIconClose.style.display = 'none';
            }
        });
    }

    logoTextSpans.forEach((span, index) => {
        span.style.animation = `slideIn 0.3s ease-out forwards ${index * 0.05}s`;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
