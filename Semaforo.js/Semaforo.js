let vermelho = document.querySelector(".vermelho")
let amarelo = document.querySelector(".amarelo")
let verde = document.querySelector(".verde")
corInicial = 0;
setInterval(() => {
    if (corInicial == 0) {
        vermelho.classList.add("vermelhojs")
        verde.classList.remove("verdejs")
    } else if (corInicial == 1) {
        vermelho.classList.remove("vermelhojs")
        amarelo.classList.add("amarelojs")
    } else if (corInicial == 2) {
        verde.classList.add("verdejs")
        amarelo.classList.remove("amarelojs")
    }
    corInicial++;
    if (corInicial == 3) {
        corInicial = 0
    }

}, 2000)