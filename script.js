var leonardo = document.getElementById('leonardo')
var samantha = document.getAnimations('samantha')
var bruna = document.getElementById('bruna')

var setaE = document.getElementById('seta-esquerda')
var setaD = document.getElementById('seta-direita')

bruna.style = "display:none"

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaD.style = "display: none; margin-top: 55px"
    setaE.style = "display: flex; margin-top: 55px"

}


function RolarParaEsquerda(){
    
    setaE.style = "display: none; margin-top: 55px"
    setaD.style = "display: flex; margin-top: 55px"
    bruna.style = "display:none"
    leonardo.style = "display:flex"

}

