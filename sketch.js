let cobra;
function setup() {
    createCanvas(400, 400)
    frameRate(7)
    cobra = new Cobra();
}

function draw(){
    background(220)
    cobra.desenhoCobra()
    cobra.movimento()
    cobra.controle()
    cobra.colisao();
}