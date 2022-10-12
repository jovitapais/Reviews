// const panel = document.querySelector("#panel");
// const ratingsContainer = document.querySelector('.ratings-container');
// const experience = document.querySelectorAll("small");
const sendButton = document.querySelector('#send');
const panelContainer = document.querySelector('.panel-container');
const ratings = document.querySelectorAll('.rating');
const experience = document.querySelectorAll('.active small');

const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
};

panelContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
  }
});

if (sendButton !== null) {
  sendButton.addEventListener('click', () => {
    const experience = document.querySelector('.active small');
    console.log(experience);
    if (
      experience.innerHTML === 'Unhappy'
			|| experience.innerHTML === 'Neutral'
    ) {
      window.location = 'negative_review.html';
    } else {
      window.location = 'positive_review.html';
    }
  });
}
