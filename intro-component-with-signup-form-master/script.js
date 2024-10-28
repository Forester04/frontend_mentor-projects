// JavaScript validation
document.addEventListener("DOMContentLoaded", function () {
    // Select all input fields except the submit button
    const inputs = document.querySelectorAll("#form input[type=text], #form input[type=email], #form input[type=password]");
  
    inputs.forEach(input => {
      // Attach a blur event listener to each input
      input.addEventListener("blur", function () {
        const errorMessage = document.getElementById(`error-${input.id}`);
        const errorIcon = document.getElementById(`icon-${input.id}`);
  
        // Check if the input is empty
        if (input.value.trim() === "") {
          input.classList.add("error"); // Add error class to input
          errorMessage.style.display = "inline"; // Show error message
          errorIcon.style.display = "inline"; // Show error icon
          errorMessage.textContent = `${input.placeholder} cannot be empty`; // Set error message text
        } else {
          input.classList.remove("error"); // Remove error class if input is not empty
          errorMessage.style.display = "none"; // Hide error message
          errorIcon.style.display = "none"; // Hide error icon
        }
      });
    });
});
  