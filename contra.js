
const textContrasena = document.querySelector("#text-contrasena") // colocamos las almoadillas por que queremos extraer un id
const input = document.querySelector("#range")
const cbMayusculas = document.querySelector("#uppercase")
const cbMinusculas = document.querySelector("#lowercase")
const cbNumeros = document.querySelector("#number")
const cbSimbolos = document.querySelector("#symbol")
const btnGenerar = document.querySelector("#btn-generate")
function validarCampos() {
    let str = ''
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const numeros = '0123456789'
    const simbolos = '!@#$'
    if(
        cbMayusculas.checked === false &&
        cbMinusculas.checked === false &&
        cbNumeros.checked === false &&
        cbSimbolos.checked === false
    ) {
        alert('Debes seleccionar alguna característica para generar la contraseña')
        return
    } 
    if(cbMayusculas.checked === true) {
        str += mayusculas
    }
    if(cbMinusculas.checked === true) {
        str += minusculas
    }
    if(cbNumeros.checked === true) {
        str += numeros
    }
    
    if(cbSimbolos.checked === true) {
        str += simbolos
    }
    generarContrasena(str)
    
}
function generarContrasena(str) {
    let pass = ''
    for (let i = 1; i <= input.value; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    textContrasena.value = pass
}