class Cobra {
	constructor(){
		this.posicao = [
			{_x: 50, _y:200},
			{_x: 40, _y:200},
			{_x: 30, _y:200},
			{_x: 20, _y:200}
		]
		this.tamanho = 10;
		this.velX = 1;
		this.velY = 0;
		this.cauda = []
		this.compri = this.posicao.length
		
	}
	desenhoCobra(){
		stroke('white')
		this.posicao.forEach(
			function (pos,lugar){
				rect(pos._x, pos._y, 10 , 10)
				if (lugar % 2){
					//console.log('par')
					fill('black')
				}else{
					//console.log('impar')
					fill('orange')
				}
			},
		);
	}
	movimento(){

		const cabecaCobra = {
			_x: this.posicao[0]._x + this.velX * this.tamanho,
			_y: this.posicao[0]._y + this.velY * this.tamanho
		}
		this.posicao.unshift(cabecaCobra)
		this.posicao.pop()

		this.dir = function(x,y) {
			this.velX = x;
			this.velY = y;
		}

	}
	controle(){

		if(key === 'ArrowUp'){
			this.dir(0, -1);
		}else if(key === 'ArrowDown'){
			this.dir(0 , 1);
		}else if(key === 'ArrowLeft'){
			this.dir(-1, 0);
		}else if(key === 'ArrowRight'){
			this.dir(1, 0);
		}

	}
	colisao(){
		this.posicao[0]._x = constrain(this.posicao[0]._x, 0, width - this.tamanho);
		this.posicao[0]._y = constrain(this.posicao[0]._y, 0, height - this.tamanho);
	}
}

class Comida{
	constructor(){
		this.tamanho = 10;
		this.color = 'red';
	}
	gerarComida(){

	}
	desenhoComida(){

	}
}