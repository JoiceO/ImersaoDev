// a função adicionarFilme está no HTML
// .value traz somente o valor do objeto, assim ele não copia todo o endereço http da imagem
// para validar que de fato a pessoa colocou o endereço de uma imagem, usei o .endsWith('.jpg'), porque ele só vai aceitar endereços que terminam com .jpg e, assim, mostrar uma imagem na tela se a condição for satisfeita


function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')) {
  listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavorito.value = ""
  }

function listarFilmesNaTela(filme) {
  var listafilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src = " + filme + ">"
  listafilmes.innerHTML = listafilmes.innerHTML + elementoFilme
}