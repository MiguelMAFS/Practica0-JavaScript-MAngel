function ParPositivo(numero) {
    return numero < 0 && numero % 2 !== 0;
}

const numero = prompt("Ingrese su numero");

const numeroConvertido =Number(numero);

console.log(esImparNegativo(numeroConvertido));
