let cobra;
let comida;
function setup() {
    createCanvas(400, 400)
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
}