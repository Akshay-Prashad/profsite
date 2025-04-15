// Page transition animation
document.addEventListener('DOMContentLoaded', () => {
    // Fade in section
    const section = document.querySelector('.animate-section');
    if (section) {
        setTimeout(() => {
            section.classList.add('visible');
        }, 100);
    }

    // Ensure nav links are visible
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.opacity = '1';
        link.style.transform = 'none';
        link.style.transition = 'all 0.3s ease';
    });

    // Typewriter effect for h2
    const typewriterElements = document.querySelectorAll('[data-typewriter]');
    typewriterElements.forEach(el => {
        const text = el.getAttribute('data-typewriter');
        el.textContent = '';
        el.classList.add('typewriter');
        let i = 0;
        const speed = 100;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                el.classList.remove('typewriter');
            }
        }
        setTimeout(type, 500);
    });

    // Particles background
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particlesContainer.appendChild(particle);
    }
});

// Handle page transitions and ripple effect
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Skip for external links
        if (this.getAttribute('href').startsWith('http')) return;

        e.preventDefault();
        const href = this.getAttribute('href');

        // Ripple effect
        this.classList.add('ripple');
        setTimeout(() => {
            this.classList.remove('ripple');
        }, 600);

        // Fade out
        document.querySelector('main').style.opacity = '0';
        document.querySelector('main').style.transform = 'translateY(20px)';

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});