function carregar() {
    var hora = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/entardecer.jpg'
        document.body.style.background = '#ff6e01'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#2B193E'
    }
}
