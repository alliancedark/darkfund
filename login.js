function checkLogin() {
    const username = document.getElementById("username").value.trim(); // Trim to remove extra spaces
    const password = document.getElementById("password").value;

    // List of allowed usernames
    const allowedUsernames = ["riad", "ragib", "tohid", "imran", "siam", "sohanur", "nazil"];

    // Check if username is in the list and password matches
    if (allowedUsernames.includes(username) && password === "dark24") {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard/dashboard.html";
    } else {
        document.getElementById("login-error").style.display = "block";
        console.log("Login failed: username or password incorrect");
    }
}

function logout() {
    sessionStorage.removeItem("isLoggedIn"); // Clear login status
    window.location.href = "../index.html";  // Redirect to the login page
}
