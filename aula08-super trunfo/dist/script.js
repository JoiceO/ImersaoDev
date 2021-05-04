var carta1 = {
    nome: "Mew",
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
    atributos: {
        ataque: 72,
        defesa: 60,
        magia: 90
    }
}

var carta2 = {
    nome: "Cubone",
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
    atributos: {
        ataque: 81,
        defesa: 65,
        magia: 85
    }
}

var carta3 = {
    nome: "Pikachu",
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    atributos: {
        ataque: 65,
        defesa: 55,
        magia: 40
    }
}

var carta4 = {
    nome: "Charizard",
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    atributos: {
        ataque: 90,
        defesa: 50,
        magia: 65
    }
}

var carta5 = {
    nome: "Squirtle",
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    atributos: {
        ataque: 70,
        defesa: 62,
        magia: 40
    }
}

var carta6 = {
    nome: "Lucario",
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png',
    atributos: {
        ataque: 85,
        defesa: 70,
        magia: 83
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]
                // 0      1        2       3       4       5  


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 6)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 6)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
   exibeCartaJogador() 
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
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
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
 }

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}