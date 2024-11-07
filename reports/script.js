        // Check if the user is logged in
        function logout() {
            sessionStorage.removeItem("isLoggedIn"); // Clear login status
            window.location.href = "../index.html";  // Redirect to the login page
        }
    
        function sendReport() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('reportMessage').value;
            
            if (name && email && message) {
                // Logic to send the message
                alert("Report sent from " + name + " (" + email + "): " + message);
                document.getElementById('name').value = ""; // Clear the name input
                document.getElementById('email').value = ""; // Clear the email input
                document.getElementById('reportMessage').value = ""; // Clear the message box
            } else {
                alert("Please enter your name, email, and message to send.");
            }
        }