var cartaJoice = {
    nome: "Mew",
    atributos: {
        ataque: 60,
        defesa: 50,
        magia: 90
    }
}

var cartaLuiz = {
    nome: "Cubone",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 30
    }
}

var cartaPC = {
    nome: "Pikachu",
    atributos: {
        ataque: 65,
        defesa: 50,
        magia: 30
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaJoice, cartaLuiz, cartaPC]
                // 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    //função math.random para selecionar aleatoriamente uma das cartas
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu a carta da máquina')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Perdeu. A carta da máquina é maior')
    } else {
        alert('Empatou!')
    }
    console.log(cartaMaquina)
}