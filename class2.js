//Bloque de ejemplo//
var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

//Mi bloque de código//
var nombre = 'Lina', apellido = 'Ureña'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0) //charAt es la posición del caracter al que queremos acceder
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido //Concatenar cadenas de texto
var nombreCompletoInterpolado = `${nombre} ${apellido}` //Interpolación de texto

//También se pueden incluir propiedades al interpolar
var nombrePersonaje = 'Homero', apellidoPersonaje = 'Simpson'

var nombreCompletoPersonajeRandom = `${nombrePersonaje} ${apellidoPersonaje.toUpperCase()}`

//Para acceder a un string dentro de otro string//
var str = nombre.charAt(1) + nombre.charAt(2)
var string = nombre.substr(1,2)