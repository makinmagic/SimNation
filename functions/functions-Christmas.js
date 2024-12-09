function createSnowflakes() {
    const snowflakeCount = 50; // Number of snowflakes
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        // Randomize the horizontal position
        snowflake.style.left = Math.random() * 100 + 'vw';
        // Randomize the animation duration between 5s and 15s
        snowflake.style.animationDuration = (Math.random() * 10 + 5) + 's';
        // Randomize the animation delay
        snowflake.style.animationDelay = '-' + (Math.random() * 15) + 's';
        // Randomize the size of snowflakes
        const size = Math.random() * 5 + 5; // 5px to 10px
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        snowflakeContainer.appendChild(snowflake);
    }
}
