    import Advice from "./advice.js";
    
    // variables
    const generateAdviceButton = document.getElementById("generateAdvice");
    const adviceContent = document.getElementById("adviceContent");
    const adviceId = document.getElementById("adviceId");

    // event listeners 
    generateAdviceButton.addEventListener("click", function () {
        let advice = new Advice;
        adviceContent.textContent = "Loading...";
        advice.getRandomAdvice().then(showAdvice);
    })
    
    // functions
    function showAdvice(adviceObj) {
        let adviceInfo = adviceObj.slip;
        adviceId.textContent = adviceInfo.id;
        adviceContent.textContent = adviceInfo.advice;
    }