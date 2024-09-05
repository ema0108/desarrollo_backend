// Punto 1: 
function desglosarString(cadena, tipo) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let letra of cadena.toLowerCase()) {
        if (tipo === "vocales" && vocales.includes(letra)) {
            contador++;
        } else if (tipo === "consonantes" && !vocales.includes(letra) && /[a-z]/.test(letra)) {
            contador++;
        }
    }
    return contador;
}


console.log(desglosarString("murcielagos", "vocales"));      // Salida: 5
console.log(desglosarString("murcielagos", "consonantes"));  // Salida: 6


// Punto 2:
function twoSum(nums, objetivo) {
    let mapa = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complemento = objetivo - nums[i];

        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i];
        }
        mapa.set(nums[i], i);
    }
    return [];
}


console.log(twoSum([2, 7, 11, 15], 9));  // Salida: [0, 1]
console.log(twoSum([3, 4, 2], 6));       // Salida: [1, 2]


// Punto 3:
function conversionRomana(romano) {
    const valoresRomanos = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        let actual = valoresRomanos[romano[i]];
        let siguiente = valoresRomanos[romano[i + 1]];

        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }
    return total;
}

console.log(conversionRomana("III"));      // Salida: 3
console.log(conversionRomana("XIV"));      // Salida: 14
console.log(conversionRomana("MMXXIV"));   // Salida: 2024
console.log(conversionRomana("MXMVII"));   // Salida: 1997
