function contagemDeNumero () {
    let numeroInicial = window.document.getElementsByClassName("inputInicio")[0]
    let numeroFim = window.document.getElementsByClassName("inputFim")[0]
    let numeroPasso = window.document.getElementsByClassName("inputPasso")[0]
    let contagem = window.document.getElementsByClassName("contagemResult")[0]

    if (numeroInicial.value.length == 0) {
        contagem.innerHTML = "O número de Inicio precisa ter valor."
    } else if (numeroFim.value == 0) {
        contagem.innerHTML = "O número de Fim não pode ser 0."
    } else if (numeroPasso.value == 0 || numeroPasso.value <= 0) {
        contagem.innerHTML = "O número de Passo não pode ser 0."
    } else {
        contagem.innerHTML = "Contando: <br>"
        //Para adicionar uma tag é só colocar o innerHTML e colocar a tag na string.
        
        let inic = Number(numeroInicial.value)
        let fim = Number(numeroFim.value)
        let pas = Number(numeroPasso.value)
        //É preciso converter o valor dos input em Number ^ 
        //+= é basicamente "receber ele mesmo + a outra variavel", por isso é usado.

        for (let contador = inic; contador <= fim; contador += pas) {
            contagem.innerHTML += `${contador} `
        }
    }

}