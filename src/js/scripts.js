document.addEventListener('DOMContentLoaded', () => {
    const navigationLinks = document.querySelectorAll('.site-navigation a[href^="#"], .hero-actions a[href^="#"], .inline-arrow[href^="#"], .site-footer a[href^="#"]');

    navigationLinks.forEach(link => {
        link.addEventListener('click', event => {
            const target = document.querySelector(link.getAttribute('href'));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
