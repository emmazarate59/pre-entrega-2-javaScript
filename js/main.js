const dolar = 345;
function precioDolar(pesoArgentino) {
    return pesoArgentino + (pesoArgentino * dolar)

}

let pesoArgentino;
do {
    pesoArgentinoIngresado = prompt("Ingreso cuantos dolares necesita, para finalizar ESC");
    const pesoArgentino = parseFloat(pesoArgentinoIngresado)
    if (pesoArgentino > 0) {
        alert("Pesos necesarios: " + precioDolar(pesoArgentino));

    }

} while (pesoArgentinoIngresado !== "ESC");