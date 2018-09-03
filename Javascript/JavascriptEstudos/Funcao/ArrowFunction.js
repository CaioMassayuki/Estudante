let dobro = function (a){
    return 2 + a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return Implicido

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Possui Parametros
console.log(ola())