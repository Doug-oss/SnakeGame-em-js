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
    textos()
}

function textos(){
    fill(0)
    textSize(22)
    let pontos = cobra.compri - 4
    text(pontos, 20, 20, 100, 100)
    if(chave == false){
        text('Jogo Pausado', 170, 250,200,50)
    }
}

let chave = true;
function keyPressed(){
    if(chave && keyCode === 115){
        noLoop()
        chave = false;
    }else if(chave == false && keyCode === 115){
        loop()
        chave = true;
    }
}