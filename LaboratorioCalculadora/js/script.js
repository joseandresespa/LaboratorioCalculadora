// Función para realizar las operaciones
function calcular(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: División por cero';
            }
            return num1 / num2;
        default:
            return 'Operador no válido';
    }
}

// Función principal para interactuar con el usuario
function iniciarCalculadora() {
    let operador = prompt('Ingrese el operador (+, -, *, /):');
    let num1 = parseFloat(prompt('Ingrese el primer número:'));
    let num2 = parseFloat(prompt('Ingrese el segundo número:'));
    let resultado = calcular(operador, num1, num2);
    console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
    alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = `El resultado de ${num1} ${operador} ${num2} es: ${resultado}`;
}

let repetir;
do {
    iniciarCalculadora();
    let condicion = true;
    while (condicion) {
        repetir = prompt('Ingrese 0 si quiere salir o cualquier otro número para hacer otro cálculo:');
        if (isNaN(repetir) || repetir === "") {
            condicion = true;
            alert("Ingrese un valor válido");
        } else {
            condicion = false;
        }
    }
} while (repetir != 0);
