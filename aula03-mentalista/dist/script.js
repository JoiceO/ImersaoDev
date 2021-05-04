//Formas de interação com o usuário aprendidas até então: alert, document.write, console.log (ensinado neste 3º desafio)
//math.random é uma função que escolhe aleatoriamente números entre 0 e 1, com o 0 incluso (ou seja, mostra números decimais). Neste caso, como quero números inteiros entre 0 e 10, coloquei o math.random() * 10

var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while(tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 0 a 10"))

      if (numeroSecreto == chute) {
      alert("Acertou")
      break
      } else if (chute > numeroSecreto) {
        alert("O número secreto é menor")
        tentativas = tentativas - 1
      } else if (chute < numeroSecreto) {
        alert("O número secreto é maior")
        tentativas = tentativas - 1
      }
}
 if ( chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O número certo era " + numeroSecreto)
}