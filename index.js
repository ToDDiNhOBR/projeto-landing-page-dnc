var Leonardo = document.getElementById("Leonardo")
var Bruna = document.getElementById("Bruna")
var Samantha = document.getElementById("Samantha")
var setaEsquerda = document.getElementById("seta-esquerda")
var setaDireita = document.getElementById("seta-direita")

function RolarParaDireita() {
  Bruna.style ="display:none"
  Samantha.style = "display:flex"
  setaEsquerda.style = "display:flex; margin-top:55px"
  setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
  Samantha.style ="display:none"
  Bruna.style = "display:flex"
  setaDireita.style = "display:flex"
  setaEsquerda.style = "display:none"
}