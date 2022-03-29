let numberInput = window.document.getElementsByClassName("result")[0]
let numberADD = window.document.getElementsByClassName('numberAdd')[0]
let valores = []
let valoresDados = window.document.getElementsByClassName('dados')[0]

//Declaramos um vetor utilizando apenas uma [] vazia.

function numberTrue (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
//A função numeberTrue verifica se o resultado é entre 1 e entre 100, utilizando o parametro N e irá apenas voltar se é true/false

function lista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}
//A função lista irá verificar se o número já esta dentro da lista utilizando indexOf que retorna -1 caso não tenha, portanto se ele for diferente(!=) irá retornar true


function adicionarNumero () {
    if (numberTrue(numberInput.value) && !lista(numberInput.value, valores)) {
        let trueNumber = Number(numberInput.value)
        valores.push(trueNumber)
        //Transformamos o valor do input em Number e colocamos o valor do input dentro do array (utilizando push)
        
        let linha = document.createElement('span')
        numberADD.innerHTML = ""
        linha.textContent = `Valor ${trueNumber} adicionado`
        numberADD.appendChild(linha)
        valoresDados.innerHTML = ''
        //Cria-se uma tag span e retiramos todo o conteúdo dela para não ficar sobressaíndo e o appendChild irá criar essa tag em baixo dando a vida, já o valoresDados, ao
        //ser adicionado um novo valor na array o resultado tem que ser limpado para não ter que ficar apertando o botão diversas vezes.
    } else {
        window.alert('Valor invalido ou já adicionado')
    }

    numberInput.value = ''
    numberInput.focus()
    //Irá fazer que quando a função seja feita o input se esvazei e continue no input 
}
//Na função adicionarNumero primeira parte do if temos ! que significa negação, então ele trará true porque não temos o valor la dentro

function finalizar() {
    if (valores.length == 0) {
        window.alert('Preencha os valores')
    } else {
        let valoresTotais = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores [pos] < menor) {
                menor = valores[pos]
            }
        }

        let media = soma / valoresTotais

        valoresDados.innerHTML = ''
        valoresDados.innerHTML += `<p>Temos um total de ${valoresTotais} de números cadastrados.</p>`
        valoresDados.innerHTML += `<p>O maior valor é ${maior}</p>`
        valoresDados.innerHTML += `<p>O menor valor é ${menor}</p>`
        valoresDados.innerHTML += `<p>A soma total é de ${soma}</p>`
        valoresDados.innerHTML += `<p>A média é de ${media}</p>`
    }
}