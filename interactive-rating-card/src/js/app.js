// variables 
const CARD_RATING_FORM = document.querySelector("#cardRatingForm");
const MAIN_CARD = document.querySelector(".card")
const SUBMIT_CARD = document.querySelector(".card_state--submit");
const THANKS_CARD = document.querySelector(".card_state--thanks");
const RATTING_BUTTONS = document.querySelectorAll("label[class=rating-button][for]");
// event listeners 
CARD_RATING_FORM.addEventListener("submit", function (e) {
    e.preventDefault();
    let selectedRating = document.querySelector("input[name=rating]:checked");
    if (selectedRating !== null) {
        const userSelect = document.getElementById("userSelect");
        const ratingLimit = document.getElementById("rateLimit");
        userSelect.innerHTML = selectedRating.value;
        ratingLimit.innerHTML = document.querySelectorAll("input[name=rating]").length;
        
        let flipAnimationDuration = 1800;
        Promise.resolve(
            setTimeout(() => {
                MAIN_CARD.classList.add("flip-animation");
                SUBMIT_CARD.classList.add("v-hidden");
            }, 0)
        ).then(
            setTimeout(() => {
                SUBMIT_CARD.remove();
                THANKS_CARD.classList.remove("d-none");
                THANKS_CARD.classList.add("fade-in-top")
            }, flipAnimationDuration)
        )
    }
})
// - for accessibility issue with tab key
RATTING_BUTTONS.forEach(ratingButton => {
    ratingButton.addEventListener("keydown", (e) => {
        let pressedKey = e.key;
        let radioButtonBeforeRatingButton = ratingButton.previousElementSibling;
        if (pressedKey === "Enter") {
            radioButtonBeforeRatingButton.setAttribute("checked", "true");
        }
    })
})
