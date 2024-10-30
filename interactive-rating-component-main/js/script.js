const ratingInterface = document.getElementById('rating-interface');
const responseInterface = document.getElementById('response-interface');

const rating = document.querySelectorAll('value-rating');
const submitBtn = document.getElementById('btn');
const reponseRating = document.getElementById('response-rating');


let selectedValue;

rating.forEach((rate, index) => {
    rate.addEventListener('click', () => {
        // Removing active selection
        rating.forEach(s => s.classList.remove('active'));

        // Adding active state
        star.classList.add('active');
        selectedValue = star.ariaLabel;
    })
})


submitBtn.addEventListener('click',()=>{

    ratingInterface.classList.add('hidden');

    reponseRating.innerHTML = selectedValue;

    responseInterface.classList.remove('hidden');

})


