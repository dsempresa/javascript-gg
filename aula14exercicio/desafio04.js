function calcular () {
    let numero = document.getElementById('num')
    let calculo = document.getElementById('calculando')
    if (numero.value.length == 0) {
        calculo.innerHTML = 'Digite um número para dar início a tabuada '
    }else {
        calculo.innerHTML = 'preparando tabuada: <br>'
        let num = Number(numero.value)
        let i = 1
        let f = 10
        let p = 1
        for(let c = i; c <= f; c += p )
        calculo.innerHTML += `  ${num} x  ${c} = ${num * c} <br>`
    }
}
