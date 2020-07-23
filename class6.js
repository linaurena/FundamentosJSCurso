// Objeto Lina
var lina = {
    //key //value
    nombre: 'Lina',
    apellido: 'Ureña',
    edad: 22
}
// Objeto Pedro
var pedro = {
    //key //value
    nombre: 'Pedro',
    apellido: 'Gamboa',
    edad: 42
}

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(lina.nombre)
imprimirNombreEnMayusculas(pedro.nombre)

// Ahora en lugar de recibir un nombre, reciba al objeto persona

function imprimirNombreEnMayusculasDePersona(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculasDePersona(lina)
imprimirNombreEnMayusculasDePersona(pedro)

// Si no se quiere declarar una nueva variable

function imprimirNombreEnMayusculasDePersonaSinVar(persona) {
    console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusculasDePersonaSinVar(lina)
imprimirNombreEnMayusculasDePersonaSinVar(pedro)

// Se puede desglozar el objeto

function imprimirNombreEnMayusculasDesglozado({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculasDesglozado(lina)
imprimirNombreEnMayusculasDesglozado(pedro)

// Para crear un objeto al llamar la función

imprimirNombreEnMayusculasDesglozado({nombre: 'Clau'})