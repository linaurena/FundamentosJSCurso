var edad = 22

// edad = edad + 1 es igual a decir:
edad += 1

var peso = 56

// peso = peso - 2 es igual a decir:
peso -= 2

var sandwich = 1

// peso = peso + sandwich es igual a decir:
peso += sandwich

var jugarAlFutbol = 3

// peso = peso - jugarAlFutbol es igual a decir:
peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 *3) /100 // math.round (redondea el valor en parentesis)

var totalStr = total.toFixed(2) // toFixed tiene en cuenta los decimales despues del punto, arroja string
var totalStrTwo = total.toFixed(3) // se puede poner los que necesite, arroja string
var total2 = parseFloat(totalStr) // parse significa transformar, para pasarlo de nuevo a número decimal se hace esta función

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas