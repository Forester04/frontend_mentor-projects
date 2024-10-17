function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);  

    }

function showErrorMessage(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

function hideErrorMessage() {
    const errorMessage = document.getElementById("errorMessage");  

    errorMessage.textContent = "";
    errorMessage.style.display = "none";
}

function showErrorIcon() {
    const errorIcon = document.getElementById("errorIcon");
    errorIcon.style.display = "block"; // Show the error icon inside the input field
}
function hideErrorIcon() {
    const errorIcon = document.getElementById("errorIcon");
    errorIcon.style.display = "none"; // Hide the error icon inside the input field
}

document.getElementById("submitButton").onclick = function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    
    const emailInput = document.getElementById("emailInput").value;
    
    if (!validateEmail(emailInput)) {
        showErrorMessage("Please enter a valid email address");
        showErrorIcon();
    } else {
        hideErrorMessage();
        hideErrorIcon();
    }
};