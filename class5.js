var nombre = 'Lina' // Alcance global de la función

function imprimirNombreEnMayúsculas(n) { // n es el alcance local de la función
    n = n.toUpperCase()
    console.log(n)
}
    
imprimirNombreEnMayúsculas(nombre)

// window.nombre mostrará en este caso Lina si la función está ejecutando la variable local y LINA si la función no tiene parámetro y se coloca nombre en el cuerpo de la función
