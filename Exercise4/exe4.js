function tabuada () {
    let numeroTabuada = window.document.getElementsByClassName("numeroDesejado")[0]
    let tabuadaArea = window.document.getElementsByClassName("tabuada")[0]

    if (numeroTabuada.value.length == 0) {
        tabuadaArea.innerHTML = "Impossível gerar tabuada sem valor"
    } else {
        let n = Number(numeroTabuada.value)
        let contador = 1
        tabuadaArea.innerHTML = ''
        //Declaramos a TabuadaArea como vazio porque precisamos limpar a div dela para que quando faça o reset ele não apenas acumule o resultado.

        while (contador <= 10) {
            let div = document.createElement('div')
            div.textContent = `${n} x ${contador} = ${n*contador}`
            tabuadaArea.appendChild(div)
            contador++
        }
        //document.createElement = criar tags; textContent = colocar conteúdo dentro; appendChild = adicionar a tag em baixo da tabuadaArea;
    }
}