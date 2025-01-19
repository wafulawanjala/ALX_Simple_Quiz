
//implementing arithmetic functions
function add(number1, number2){
    return number1+number2;
};

function subtract(number1,number2){
    return number1-number2;
};

function divide(number1, number2){
    return number1/number2;
};

function multiply(number1, number2){
    return number1*number2;
};
 
//ataching event listeners

// 1. Add
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// 2. Subtract
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1,number2)
    document.getElementById('calculation-result').textContent = result;
});

//3. Multiply
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1,number2)
    document.getElementById('calculation-result').textContent = result;
});

//4.Divide
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1,number2)
    document.getElementById('calculation-result').textContent = result;
});
