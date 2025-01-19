function checkAnswer() {
    const correctAnswer = "4"; // Ensure the correct answer matches the type (string)
    
    // Select the checked radio button
    let ans =document.querySelector('input[name=”quiz”]:checked')
    let userAnswer =ans.value;   
    if (userAnswer === correctAnswer) {
            feedback.textcontent="Correct! Well done.";
        } else {
            feedback.textcontent="That's incorrect. Try again!";
        }
    }

    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);