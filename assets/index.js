let celdas = document.querySelectorAll('.col-4')
let limpiar = document.querySelector('.reiniciar')
let accion1 = document.querySelectorAll('.accion-1')
let accion2 = document.querySelectorAll('.accion-2')
let accion3 = document.querySelectorAll('.accion-3')
let accion4 = document.querySelectorAll('.accion-4')
let accion5 = document.querySelectorAll('.accion-5')
let accion6 = document.querySelectorAll('.accion-6')
let accion7 = document.querySelectorAll('.accion-7')
let accion8 = document.querySelectorAll('.accion-8')
let pantalla1 = document.querySelector('.pantalla-1')
let pantalla2 = document.querySelector('.pantalla-2')
let limpiar1 = document.querySelector('.reiniciar1')
let contador1 = 0;
let contador2 = 0;
let flag = true;
let arreglo = [null, null, null, null, null, null, null, null, null];

const validarGanador = () => {
    if ((arreglo[0] != null && arreglo[1] != null)
        && (arreglo[0] == arreglo[1])
        && (arreglo[1] == arreglo[2])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        fila1()
    } else if ((arreglo[3] != null && arreglo[4] != null)
        && (arreglo[3] == arreglo[4])
        && (arreglo[4] == arreglo[5])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        fila2()
    } else if ((arreglo[6] != null && arreglo[7] != null)
        && (arreglo[6] == arreglo[7])
        && (arreglo[7] == arreglo[8])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        fila3()
    } else if ((arreglo[0] != null && arreglo[3] != null)
        && (arreglo[0] == arreglo[3])
        && (arreglo[3] == arreglo[6])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        col1()
    } else if ((arreglo[1] != null && arreglo[4] != null)
        && (arreglo[1] == arreglo[4])
        && (arreglo[4] == arreglo[7])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        col2()
    } else if ((arreglo[2] != null && arreglo[5] != null)
        && (arreglo[2] == arreglo[5])
        && (arreglo[5] == arreglo[8])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        col3()
    } else if ((arreglo[0] != null && arreglo[4] != null)
        && (arreglo[0] == arreglo[4])
        && (arreglo[4] == arreglo[8])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        diagonal1()
    } else if ((arreglo[2] != null && arreglo[4] != null)
        && (arreglo[2] == arreglo[4])
        && (arreglo[4] == arreglo[6])) {
        if (flag == false) {
            alert('Gana jugador X')
            contador1 = contador1 + 1
            pantalla1.value = contador1
        } else {
            alert('Gana jugador O')
            contador2 = contador2 + 1
            pantalla2.value = contador2
        }
        diagonal2()
    } else {
        let filter = arreglo.filter((item) => item == null)
        if (filter.length == 0) {
            alert('Empate')
        }
    }
}

const fila1 = () => {
    accion1.forEach((fila1) => {
        fila1.classList.toggle('bg-danger')
    })
}
const fila2 = () => {
    accion2.forEach((fila2) => {
        fila2.classList.toggle('bg-danger')
    })
}
const fila3 = () => {
    accion3.forEach((fila3) => {
        fila3.classList.toggle('bg-danger')
    })
}
const col1 = () => {
    accion4.forEach((col1) => {
        col1.classList.toggle('bg-danger')
    })
}
const col2 = () => {
    accion5.forEach((col2) => {
        col2.classList.toggle('bg-danger')
    })
}
const col3 = () => {
    accion6.forEach((col3) => {
        col3.classList.toggle('bg-danger')
    })
}
const diagonal1 = () => {
    accion7.forEach((diagonal1) => {
        diagonal1.classList.toggle('bg-danger')
    })
}
const diagonal2 = () => {
    accion8.forEach((diagonal2) => {
        diagonal2.classList.toggle('bg-danger')
    })
}


const bloquearCastilla = (coordenada) => {
    if (arreglo[coordenada] != null) {
        return true
    }
    return false
}

const marcar = (celda) => {
    let isBlock = bloquearCastilla(celda.target.id)
    if (isBlock) {
        alert('Disculpe, Que no ve que esta marcado!!')

    } else {
        if (flag) {
            celda.target.innerText = 'X'
            arreglo[celda.target.id] = 'X'
            flag = !flag

        } else {
            celda.target.innerText = 'O'
            arreglo[celda.target.id] = 'O'
            flag = !flag

        }
    }
    validarGanador()
}


celdas.forEach((celda) => {
    celda.addEventListener('click', marcar)
})

celdas.forEach((celdas) => {
    limpiar.addEventListener('click', () => {
        celdas.innerText = ''
        arreglo = [null, null, null, null, null, null, null, null, null];
        flag = true
        celdas.classList.remove('bg-danger')
    })
})

limpiar1.addEventListener('click', () => {
    contador1 = 0;
    contador2 = 0;
    pantalla1.value = ''
    pantalla2.value = ''
})
