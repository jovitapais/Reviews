const panel = document.querySelector("#panel");
const sendButton = document.querySelector("#send");
const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");

const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
};

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
  }
});
