const soma = function(x, y){
    return x + y
}

const imprimitResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimitResultado(3, 4)
imprimitResultado(3, 4, soma)
imprimitResultado(3, 4, function(x, y){
    return x- y
})

imprimitResultado(3, 4, (x,y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Opá')
    }
}

pessoa.falar();