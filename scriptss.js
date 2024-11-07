function updateLoginVisibility() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("login-button");
    const timerDisplay = document.getElementById("timer");

    // Check if today is Friday (5) and within the allowed time
    if (dayOfWeek === 5 && (hours === 0 && minutes >= 0 || hours === 23 && minutes <= 59)) {
        // Show login form
        loginForm.style.display = "flex";
        loginButton.style.display = "block";
        timerDisplay.style.display = "none"; // Hide timer message
    } else {
        // Hide login form
        loginForm.style.display = "none";
        loginButton.style.display = "none";
        // Show timer message
        timerDisplay.style.display = "block";
        
        // Calculate time until next Friday
        const nextFriday = new Date();
        nextFriday.setDate(now.getDate() + ((5 - dayOfWeek + 7) % 7 || 7)); // Next Friday
        nextFriday.setHours(0, 0, 0, 0); // Start of next Friday

        // Calculate the difference in milliseconds
        const timeDiff = nextFriday - now;

        // Display the countdown
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        timerDisplay.innerText = `Login will be available in ${days}d ${hoursLeft}h ${minutesLeft}m.`;
    }
}

// Run the update function on page load
window.onload = function() {
    updateLoginVisibility();
    setInterval(updateLoginVisibility, 60000); // Update every minute
};
