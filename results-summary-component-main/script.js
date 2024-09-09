// Fetch the data from the data.json file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Select all the category div elements in the summary section
    const categories = document.querySelectorAll('.summary > div');

    data.forEach((item, index) => {
        // Get the relevant category div
        const categoryDiv = categories[index];
        
        // Update the icon
        const imgElement = categoryDiv.querySelector('img');
        imgElement.src = item.icon;
        imgElement.alt = `${item.category} icon`;

        // Update the category label
        const labelElement = categoryDiv.querySelector('.label');
        labelElement.textContent = item.category;

        // Update the score
        const scoreElement = categoryDiv.querySelector('p:not(.label)');
        scoreElement.innerHTML = `${item.score} <span class="opacity">/ 100</span>`;
    });
})
.catch(error => console.error('Error fetching the JSON data:', error));
