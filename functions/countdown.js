function updateCountdown() {
    const endTime = new Date("November 15, 2024 02:00:00 UTC").getTime(); //To be changed as needed
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById("countdown").style.display = "none";
      clearInterval(countdownInterval);
    }
  }

const countdownInterval = setInterval(updateCountdown, 1000); */
