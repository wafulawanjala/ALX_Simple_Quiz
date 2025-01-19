function checkAnswer() {
    const correctAnswer = "4"; // Ensure the correct answer matches the type (string)
    
    // Select the checked radio button
    let ans = document. querySelector('input[name=”quiz”]:checked')
    let userAnswer = ans.value;    
    if (userAnswer === correctAnswer) {
            feedback.textcontent="Correct! Well done.";
        } else {
            feedback.textcontent="That's incorrect. Try again!";
        }
    }




/*let number1 = 2;
let number2 = 2
function add(number1, number2){
    console.log(number1+number2);
}
add(number1,number2);

function subtract(number1,number2){
    console.log(number1-number2);
}
subtract(number1,number2);

function divide(number1, number2){
    console.log(number1/number2)
}
divide(number1,number2);

function multiply(number1, number2){
    console.log(number1*number2)
}
multiply(number1,number2);*/