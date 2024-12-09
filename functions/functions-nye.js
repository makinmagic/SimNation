function createFirework() {
    // Create a container for the firework
    const fireworkContainer = document.createElement('div');
    fireworkContainer.style.position = 'absolute';
    fireworkContainer.style.top = Math.random() * 50 + 'vh'; // Random vertical position (top half)
    fireworkContainer.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    document.body.appendChild(fireworkContainer);

    // Add particles to the firework
    const particleCount = 20; // Number of particles per firework
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');

        // Randomize the direction of each particle
        const angle = (i / particleCount) * 360; // Spread particles evenly in a circle
        const distance = Math.random() * 100 + 50; // Distance the particle will travel
        const x = Math.cos((angle * Math.PI) / 180) * distance + 'px';
        const y = Math.sin((angle * Math.PI) / 180) * distance + 'px';

        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);

        const colors = ['#806C00', '#BFA100', '#FFD700', '#FFE140', '#FFEB80'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Append particle to the container
        fireworkContainer.appendChild(particle);
    }

    // Remove the firework container after the animation
    setTimeout(() => {
        fireworkContainer.remove();
    }, 2000); // Slightly longer than the explosion animation
}

// Continuously Create Fireworks
function launchFireworks() {
    setInterval(() => {
        createFirework();
    }, 2000); // Launch a firework every second
}
