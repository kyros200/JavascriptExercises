function resultado() { 
    // Função que irá ser chamada no onclick no botão.

    let data = new Date()
    let ano = data.getFullYear()
    // Utilizamos para pegar o Ano atual de acordo com o pc.

    anoDeNascimento = document.getElementsByClassName("inputNumber")[0]
    let result = document.getElementsByClassName("verificarResultado")[0]
    // Pegamos as TAGS pela Class 
    
    if (anoDeNascimento.value.length == 0 || anoDeNascimento.value > ano) {
        window.alert("Verifique novamente se a idade informada está correta.")
        //Utilizamos lógica pegando o value do input

    } else {
        let idade = ano - anoDeNascimento.value
        //Se tudo estiver de acordo iremos fazer a subtração *Lembrando que precisamos usar o .value para pegar o valor do input*
        
        let img = document.createElement('img') 
        img.setAttribute('class', 'imagem')
        img.setAttribute('draggable', 'false')
        // Utilizando o CreateElement conseguimos criar uma tag no html, onde no caso seria a img e o setAttribute conseguimos criar uma classe e o nome dela e colocar
        //outras features igual draggable.

        let sexo = document.getElementsByName("pessoaSexo")
        let genero = ""
        if (sexo[0].checked) {
            genero = "Feminino"
            if (idade >=0 && idade < 2){
                img.setAttribute('src', 'img/G.baby.jpg')
            } else if (idade < 12) {
                img.setAttribute('src', 'img/G.girl.jpg')
            } else if (idade < 19) {
                img.setAttribute('src', 'img/G.teen.jpg')
            } else if (idade < 45) {
                img.setAttribute('src', 'img/G.adult.jpg')
            } else if (idade < 120) {
                img.setAttribute('src', 'img/G.old.jpg')
            } else {
                img.setAttribute('src', 'img/Skeleton.jpg')
            }

        } else {
            genero = "Masculino"
            if (idade >=0 && idade < 2){
                img.setAttribute('src', 'img/M.baby.jpg')
            } else if (idade < 12) {
                img.setAttribute('src', 'img/M.boy.jpg')
            } else if (idade < 19) {
                img.setAttribute('src', 'img/M.teen.jpg')
            } else if (idade < 45) {
                img.setAttribute('src', 'img/M.adult.jpg')
            } else if (idade < 120) {
                img.setAttribute('src', 'img/M.old.jpg')
            } else {
                img.setAttribute('src', 'img/Skeleton.jpg')
            }

        }
        // Utilizamos o ElementByName que pegamos o name do input radio, porém como usamos name duas vezes precisamos mostrar qual queremos [0] e [1]
        // depois definimos o genero como string sem valor e de acordo com o [] iremos determinar qual é qual

        result.innerHTML = `Você tem ${idade} anos e é do gênero ${genero}`
        result.appendChild(img)
        //o appendChild ele irá adicionar depois o elemento.
    }
}



// let anoDeNascimento = window.document.getElementsByClassName("inputNumber")[0].value
// let data = new Date()
// let anoAtual = data.getFullYear

// let resultado = anoDeNascimento - anoAtual
// console.log(resultado)
 