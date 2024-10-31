const faqItems = document.querySelectorAll('.faq__question');

// Expand only the first question by default
function expandFirstQuestion() {
  const firstFaqItem = faqItems[0];
  const firstAnswer = firstFaqItem.querySelector('.answer');
  const firstIcon = firstFaqItem.querySelector('.plus-icon');
  
  firstAnswer.style.display = 'block';
  firstIcon.src = "assets/images/icon-minus.svg";
}

// Initially expand the first question
expandFirstQuestion();

faqItems.forEach((faqItem, index) => {
  const answer = faqItem.querySelector('.answer');
  const plusIcon = faqItem.querySelector('.plus-icon');

  // Initially hide all answers except the first
  if (index !== 0) answer.style.display = 'none';

  faqItem.addEventListener('click', () => {
    const isAnswerVisible = answer.style.display === 'block';

    // Collapse all answers before expanding the selected one
    faqItems.forEach((otherFaq) => {
      const otherAnswer = otherFaq.querySelector('.answer');
      const otherIcon = otherFaq.querySelector('.plus-icon');
      
      // Collapse the first question if another question is clicked
      if (otherFaq !== faqItem) {
        otherAnswer.style.display = 'none';
        otherIcon.src = "assets/images/icon-plus.svg"; // Reset icons to plus
      }
    });

    // Toggle the clicked answer and icon
    answer.style.display = isAnswerVisible ? 'none' : 'block';
    plusIcon.src = isAnswerVisible ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
  });
});
