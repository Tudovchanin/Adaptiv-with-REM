
const ratingValue = document.getElementById('rating-value');
const cardRating = document.getElementById('card-rating');
const cardThanks = document.getElementById('card-thanks');
const inputContainer = document.getElementById('input-container');
const submit = document.getElementById('btn');
let userRating = '';

inputContainer.addEventListener('click', function (event) {
	if (event.target.value) {
		userRating = event.target.value;
	}
})


submit.addEventListener('click', function (event) {
	event.preventDefault();
	if (userRating !== '') {
		ratingValue.textContent = userRating;
		cardRating.style.display = 'none';
		cardThanks.style.display = 'grid';
	}
})






