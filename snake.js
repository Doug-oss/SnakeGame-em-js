class Cobra{
    constructor(){
        //tamanho de cada parte
		this.tam = 10;
		//velocidades
		this._vX = 10;
		this._vY = 0;
        //cores da cobra
        this.cor = [
            {_corMargin:'#FFFFFF'},
            {_corUm: '#1B1B1B'},
            {_corDois: '#FFA500'}
        ];
        //parte da cobra
        this.corpo = [
            {_x: 30, _y:200},
            {_x: 20, _y:200},
			{_x: 10, _y:200},
        ];

    }
	/*--------------------DRAW------------------*/
    desenharCobra() {
        //colocarCores
        stroke(this.cor[0]._corMargin)
        fill(this.cor[1]._corUm)
        
        //colocar corpo pra c/array
        function desenharCorpo(parte){
            rect(parte._x, parte._y, 10, 10)
        }
		//
		this.corpo.forEach(desenharCorpo)
    }
	/*------------------Movimento--------------*/
	mover(){
		//movimento da posição inicial no eixo x
		const cabeca = {
			_x: this.corpo[0]._x + this._vX,
			_y: this.corpo[0]._y + this._vY
		}
		//adiciona nova posição
		this.corpo.unshift(cabeca);
		//tira a ultima posição
		this.corpo.pop();
		
		console.log(this.corpo[0])
		
		
		//colisão com limite da tela
		this.corpo[0]._x = constrain(this.corpo[0]._x, 0, width - this.tam);
		this.corpo[0]._y = constrain(this.corpo[0]._y, 0, height - this.tam);
		
		//colisão com a parede
		if(this.corpo[1]._x == this.corpo[0]._x && this.corpo[1]._y == this.corpo[0]._y){
			fill('black')
			textSize(20)
			text("Colidiu", 200, 200, 110, 110)
		}
	}
	// função pra mudar direção
	dir(x,y){
		this._vX = x;
		this._vY = y;
	}
}