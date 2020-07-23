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

function imprimirNombreEnMayusculasDesglozado(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculasDesglozado(lina)
imprimirNombreEnMayusculasDesglozado(pedro)

// Para crear un objeto al llamar la función

imprimirNombreEnMayusculasDesglozado({nombre: 'Clau'})