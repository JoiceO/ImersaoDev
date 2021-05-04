var valorEmDolarTexto = prompt("Qual é o valor em dólar que você quer converter para real?")
var valoremDolarNumero = parseFloat(valorEmDolarTexto)


var valorEmReal = valoremDolarNumero * 5.50
var valoremRealFixado = valorEmReal.toFixed(2)
alert("R$" + valoremRealFixado)

// Revisão:
// variáveis -> var. Pode ser booleana, float, string, inteiro
// alert
//parseInt e parseFloat
//prompt
//operações matemáticas
//como fazer comentários