function calcular() {
    // Capturar entradas
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;

    // Declarar variables y objetos necesarios
    let resultado = 0;

    // Crear funciones y/o métodos para realizar operaciones
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
        default:
            console.log("Operación no válida");
    }

    // Efectuar una salida
    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
}
