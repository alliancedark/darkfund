function loadHistory() {
    const historyData = JSON.parse(localStorage.getItem("submissionHistory")) || [];
    const historyTableBody = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    
    // Clear the table before populating
    historyTableBody.innerHTML = '';
    
    // Populate the table with history data
    historyData.forEach((entry) => {
        const row = historyTableBody.insertRow(0); // Insert at top for latest first
        
        const nameCell = row.insertCell(0);
        nameCell.textContent = entry.name;
        
        const holderNameCell = row.insertCell(1);
        holderNameCell.textContent = entry.holderName;
        
        const dateCell = row.insertCell(2);
        dateCell.textContent = entry.date;
        
        const amountCell = row.insertCell(3);
        amountCell.textContent = '***'; // Masked amount
    });
}

function clearHistory() {
    localStorage.removeItem("submissionHistory"); // Clear history from localStorage
    loadHistory(); // Refresh the table
    alert("History has been cleared."); // Optional alert
}

// Load history when the page loads
window.onload = loadHistory;
