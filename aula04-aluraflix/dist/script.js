var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNzQyOWM2ZDUtMWQ4Zi00NDJiLTllMDYtZjBmNzBmYWJiNzJmXkEyXkFqcGdeQXVyMjUwMDM3NzE@._V1_UY268_CR7,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src =" + listaFilmes[i] + ">")
}
//img src faz com que aqueles hiperlinks acima sejam mostrados no formato da imagem, que são os pôsteres dos filmes escolhidos