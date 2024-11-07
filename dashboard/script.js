
function logout() {
    // Placeholder function for logout
    window.location.href = '../index.html';
}

let url = 'https://script.google.com/macros/s/AKfycbwwf3d2WnCVruvXgdPtdzikxCUwgmqCsw3vGJTxdcStOYIO3bin8iqfw4R3lbf6YwvJRA/exec';
let form = document.querySelector('#contributionForm');

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    let d = new FormData(form);

    fetch(url, {
        method: "POST",
        body: d
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Network response was not ok: " + res.statusText);
        }
        return res.text();
    })
    .then((finalRes) => console.log(finalRes))
    .catch((error) => console.error("There was a problem with the fetch operation:", error));
});


document.getElementById('contributionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const submitButton = document.getElementById('submitButton');
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'; // Spinner while submitting
    submitButton.style.backgroundColor = 'red'; // Red button during submission

    // Simulate form submission (replace with actual submission logic)
    setTimeout(function() {
        const isSuccess = true; // Set to `false` to simulate failure

        if (isSuccess) {
            showPopup(); // Show success popup
        } else {
            alert("There was an error submitting the data.");
        }

        // Reset button state
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
        submitButton.style.backgroundColor = ''; // Reset button color

        // Refresh the form after the submission (reset the form fields)
        document.getElementById('contributionForm').reset();
    }, 2000); // Simulating a 2-second delay

     // Collect form data
     const submissionData = {
        name: document.getElementById("name").value,
        holderName: document.getElementById("holderName").value,
        date: new Date().toLocaleDateString(), // Current date in readable format
        amount: document.getElementById("amount").value,
    };

    // Retrieve current history from localStorage or start with an empty array
    const currentHistory = JSON.parse(localStorage.getItem("submissionHistory")) || [];
    
    // Add the new submission to the history array
    currentHistory.push(submissionData);

    // Save updated history back to localStorage
    localStorage.setItem("submissionHistory", JSON.stringify(currentHistory));
});

// Show Success Popup
function showPopup() {
    const popup = document.getElementById('popupModal');
    popup.style.display = 'flex'; // Show the popup

    // Auto-close after 3 seconds (optional)
    setTimeout(function() {
        closePopup();
    }, 3000);
}

// Close the Popup
function closePopup() {
    const popup = document.getElementById('popupModal');
    popup.style.display = 'none'; // Hide the popup
}
