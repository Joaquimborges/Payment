function dinheiro() {
    var prod = document.getElementById('val')
    var resultado = document.getElementById('res')
    var soma = parseInt(prod.value) - (parseInt(prod.value) * 10 / 100)
    if (prod.value.length <= 0) {
        resultado.innerHTML = 'Campo vazio, digite um número'
    } else {
        resultado.innerHTML = `em dinheiro com 10% de desconto vai custar ${soma}`
    }

}

function cartao() {
    var prod = document.getElementById('val')
    var resultado = document.getElementById('res')
    var soma = parseInt(prod.value) - (parseInt(prod.value) * 5 / 100)
    if (prod.value.length <= 0) {
        resultado.innerHTML = 'campo vazio, digite um número'

    } else {
        resultado.innerHTML = `no cartão com 5% de desconto, vai custar ${soma}`
    }
}

function confirma() {
    var prod = document.getElementById('val')
    var resultado = document.getElementById('res')
    var qtCartao = document.getElementById('pg')

    var soma = parseInt(prod.value) / parseInt(qtCartao.value)
    if (prod.value.length <= 0) {
        resultado.innerHTML = 'campo vazio, digite um número'
    } else {
        resultado.innerHTML = `Em ${qtCartao.value}x,  vai custar ${soma}`
    }

}