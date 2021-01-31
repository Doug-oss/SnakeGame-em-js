let cobra;
let comida;
function setup() {
    createCanvas(500, 500)
    frameRate(7)
    cobra = new Cobra();
    comida = new Comida();
    comida.gerarComida();
}

function draw(){
    background(220)
    cobra.desenhoCobra()
    cobra.movimento()
    cobra.controle()
    cobra.colisao();
    comida.desenhoComida();
    comerComida()
}