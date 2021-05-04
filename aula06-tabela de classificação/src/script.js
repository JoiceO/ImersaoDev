var joice = {
  nome: "Joice",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var luiz = {
  nome: "Luiz",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

joice.pontos = calculaPontos(joice)
luiz.pontos = calculaPontos(luiz)

function calculaPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates * 1
    return pontos
}

var jogadores = [joice, luiz]

exibirJogadorNaTela(jogadores)
function exibirJogadorNaTela(jogadores){
  var html = "" //cada linha do jogador ficará nesta variável html
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>" //tr = table row e td = table data
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria("  + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
    
 var tabelaJogadores = document.getElementById("tabelaJogadores")
 tabelaJogadores.innerHTML = html
}
function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadorNaTela(jogadores)
}

function adicionarEmpate(i){
   var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadorNaTela(jogadores)
}

function adicionarDerrota(i){
   var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadorNaTela(jogadores)
}

