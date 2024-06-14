var leonardo = document.getElementById("leonardo")
var bruna = document.getElementById("bruna")
var samantha = document.getElementById("samatha")
var setaDireita = document.getElementById("seta-direita")
var setaEsquerda = document.getElementById("seta-esquerda")

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style="display:flex"
    setaDireita.style= "display:none"
    setaEsquerda.style = 'display:flex; margin-top:90px'
}

function RolarParaEsquerda(){
    leonardo.style="display:flex"
    bruna.style="display:none"
    setaDireita.style="display:flex; margin-top:65px"
    setaEsquerda.style="display:none"
}