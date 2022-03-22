function changeHTML () {
    var nowTime = window.document.getElementsByClassName('nowTime')[0]
    var imagem = window.document.getElementsByClassName('imagem')[0]
    var data = new Date ()
    var horaAtual = data.getHours()
    nowTime.innerHTML = `Agora são ${horaAtual} horas`

    if (horaAtual >= 0 && horaAtual <= 6 ) {
        imagem.src="noite.jpg"
        document.body.style.backgroundColor = '#464746'        
    } else if (horaAtual >= 6 && horaAtual <= 12) {
        imagem.src="manha.jpg"
        document.body.style.backgroundColor = '#a3f7ef'
    } else if (horaAtual >= 18 && horaAtual <= 23) {
        imagem.src="noite.jpg"
        document.body.style.backgroundColor = '#464746'
    }
     else {
        imagem.src="tarde.webp"
        document.body.style.backgroundColor = '#73f077'
    }
}