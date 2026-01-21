document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade-in entry animation
    const card = document.querySelector('.glass-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {
        card.style.transition = 'opacity 1s ease, transform 1s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);

    // 2. Create background particles
    const bgContainer = document.querySelector('.background-animation');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle(bgContainer);
    }

    // 3. Auto update copyright year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size
    const size = Math.random() * 15 + 5; // 5px to 20px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;

    // Random animation duration and delay
    const duration = Math.random() * 15 + 10; // 10s to 25s - slower float
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `-${Math.random() * 20}s`; // Negative delay to start mid-animation

    // Random color tint
    const colors = ['var(--secondary-color)', '#b0c4de', 'var(--primary-color)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), ${randomColor})`;
    particle.style.boxShadow = `0 0 10px ${randomColor}`;

    container.appendChild(particle);

    // Remove and recreate when animation ends to keep DOM clean-ish 
    // (though CSS infinite loop handles visual repetition, this adds randomness over time if we wanted)
    // For now, CSS infinite is sufficient for a landing page.
}
