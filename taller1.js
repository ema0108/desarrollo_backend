//punto 1

const readlineSync = require('readline-sync');

// Function to convert Celsius to Fahrenheit
function convertidorTemp(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Get input from the user
let inputCelsius = readlineSync.questionFloat("Por favor, ingresa un valor en Celsius: ");

// Convert the input to Fahrenheit
let outputFahrenheit = convertidorTemp(inputCelsius);


console.log("El valor en Fahrenheit es:", outputFahrenheit);

//punto 2

function resolvedor(a, b, c, positiveRoot = true) {
   
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    
    
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);
    
   
    return positiveRoot ? root1 : root2;
}


let a = 1, b = 5, c = 4;


let positiveResult = resolvedor(a, b, c, true);
console.log("El valor de x (raíz positiva) es:", positiveResult);


let negativeResult = resolvedor(a, b, c, false);
console.log("El valor de x (raíz negativa) es:", negativeResult);


//Punto 3

function mejorParidad(numero) {
    // Check if the number is even
    if (numero % 2 === 0) {
        return true;  // Return true if the number is even
    } else {
        return false; // Return false if the number is odd
    }
}

// Example usage
let numero = 7;

if (mejorParidad(numero)) {
    console.log(numero + " es par.");
} else {
    console.log(numero + " es impar.");
}


//Punto 4

function peorParidad(num) {
    if (num === 0) return "even";
    if (num === 1) return "odd";
    if (num === 2) return "even";
    if (num === 3) return "odd";
    if (num === 4) return "even";
    if (num === 5) return "odd";
    if (num === 6) return "even";
    if (num === 7) return "odd";
    if (num === 8) return "even";
    if (num === 9) return "odd";
    if (num === 10) return "even";
    return "Number out of range";
}

console.log(peorParidad(3)); // Output: "odd"
console.log(peorParidad(8)); // Output: "even"
console.log(peorParidad(15)); // Output: "Number out of range";