// Las funciones son espacios de código reutilizables
var nombre = 'Lina', edad = 22

/*
function nombreDeLaFuncion(parametro/s que va a recibir) {
    Aquí va el cuerpo de la función
}
*/

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad()
imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Erick', 24)
imprimirEdad('Darío', 27)

// También se puede hacer de la siguiente manera:
var otroNombre = 'Pedro', otraEdad = 42

function imprimirOtraEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirOtraEdad(otroNombre, otraEdad)
imprimirOtraEdad('Vicky', 28)
imprimirOtraEdad('Erick', 24)
imprimirOtraEdad('Darío', 27)