let valores = [8, 1, 7, 4, 2, 9]

console.log(valores[0])

/*for(let pos=0; pos < valores.length; pos++) {
    valores.sort()
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}