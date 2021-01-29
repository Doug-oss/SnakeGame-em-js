let cobra;
function setup(){
    createCanvas(400, 400);
    cobra = new Cobra;
}

function draw(){
    background(220)
    frameRate(5);
    cobra.desenharCobra()
    cobra.mover()

}
/*-----------------Controle---------------------*/
function keyPressed(){
    if(key === 'ArrowUp'){
        cobra.dir(0, -10);
    }else if(key === 'ArrowDown'){
        cobra.dir(0, 10)
    }else if(key === 'ArrowLeft'){
        cobra.dir(-10, 0)
    }else if(key === 'ArrowRight'){
        cobra.dir(10, 0)
    }
}