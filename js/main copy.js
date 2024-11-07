
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
    
    switch(operation) {
        case "sum":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            result = num1 / num2;
            break;
    }
    document.getElementById("result").textContent = "Resultado: " + result;
}
const randomNumber = Math.floor(Math.random() * 10) + 1;
        
function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    if (guess === randomNumber) {
        document.getElementById("feedback").textContent = "¡Correcto! Has adivinado el número.";
    } else if (guess < randomNumber) {
        document.getElementById("feedback").textContent = "Muy bajo. Intenta de nuevo.";
    } else {
        document.getElementById("feedback").textContent = "Muy alto. Intenta de nuevo.";
    }
}
function convertTemperature() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result2").textContent = "Resultado: " + fahrenheit + " °F";
}