function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let contador = document.getElementById('contador')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //alert('[ERRO] Faltam dados!')
        contador.innerHTML = 'Impossível contar!'
    }else {
        contador.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                contador.innerHTML += ` ${c} \u{1F449} `
            }
            
        }else {
            //contagem regressiva
            for(let c = i; c >= f; c-= p) {
               contador.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        contador.innerHTML += `\u{1F3C1}`       
    }
}  
    
         
