const palabraAdivinanza = ["Calle", "Una Calle"];
let adivinoLaPalabra = false;
let palabraIngresada;
const intentos = [];
class Intento {
    constructor(entrada) {
        this.palabra = entrada.palabra;
        this.fecha = entrada.fecha;
        this.palabraAdivinanza = entrada.palabraAdivinanza;
    }

    esPalabraCorrecta(palabraIngresada) {
        return this.palabraAdivinanza.some((palabraAdivinanza) => palabraAdivinanza.toLocaleLowerCase() === palabraIngresada.toLowerCase())
    }
}

do {
    palabraIngresada = prompt ("Descubra la palabra de la adivinanza: Todos pasan preguntando por mí, pero yo ni paso ni pregunto por nadie. o ESC para finalizar");
    const intento = new Intento({ palabra: palabraIngresada, fecha: new Date (), palabraAdivinanza: palabraAdivinanza});

    if (palabraIngresada !== "ESC") {
        adivinoLaPalabra = intento.esPalabraCorrecta(palabraIngresada);
        if (adivinoLaPalabra) {
            alert ("adivinanza completada");
        } else{
                intentos.push(intento);
                alert ("No adivinaste, segui intentando");
            }
        
    }
} while (!adivinoLaPalabra && palabraIngresada !== "ESC");

alert(intentos.map
    ((intento) => `Se ingreso la palabra "${intento.palabra}" a las ${intento.fecha.toLocaleTimeString()}`).join('\n'));