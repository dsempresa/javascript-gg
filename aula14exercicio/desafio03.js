function contador () {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var ini = Number(inicio.value)
    var fi = Number(fim.value)
    var pas = Number(passo.value)
    var r = ini + pas
    var c = document.getElementById('contador')
    do {
        c.innerHTML = `> ${r}`
    }  while(ini <= fi)
         
}