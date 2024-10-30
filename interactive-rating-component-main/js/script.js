const ratingButtons = document.querySelectorAll('.value-rating');
const submitButton = document.getElementById('btn');
const responseRating = document.getElementById('response-rating');
const ratingContainer = document.getElementById('rating-interface');
const thankYouContainer = document.getElementById('response-interface');

// Function to update button styles on selection
function updateActiveButton(selectedButton) {
  ratingButtons.forEach(button => button.classList.remove('active'));
  selectedButton.classList.add('active');
}

// Event listener for clicking rating buttons
ratingButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedValue = event.target.getAttribute('aria-label');
    updateActiveButton(event.target);
  });
});

// Event listener for clicking submit button
submitButton.addEventListener('click', () => {
  const selectedRating = document.querySelector('.value-rating.active').getAttribute('aria-label');
  if (selectedRating) {
    responseRating.textContent = selectedRating;
    ratingContainer.style.display = 'none';
    thankYouContainer.style.display = 'block';
  } else {
    // Optional: Add logic to handle no selection case (e.g., alert message)
  }
});

