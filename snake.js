class Cobra {
	constructor(){
		this.posicao = [
			{_x: 60, _y:200},
			{_x: 40, _y:200},
			{_x: 20, _y:200},
			{_x: 0, _y:200}
		]
		this.tamanho = 20;
		this.velX = 1;
		this.velY = 0;
		this.cauda = []
		this.compri = this.posicao.length
		
	}
	desenhoCobra(){
		fill('black')
		stroke('white')
		this.posicao.forEach(
			function (pos,lugar){
				rect(pos._x, pos._y, cobra.tamanho , cobra.tamanho)
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

		/*for(var i = 0; i < this.posicao.length; i++) {
			console.log(i+' pedaço: '+this.posicao[i]._x +' cabeca: '+ this.posicao[0]._x);	
		}*/
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
		this.cols = floor(width/20)
		this.rows = floor(height/20)
	}
	gerarComida(){
		this.comida = createVector(floor(random(this.cols)), floor(random(this.rows)))
		this.comida.mult(20)
	}
	desenhoComida(){
		fill('#FF0000')
		rect(this.comida.x, this.comida.y, 20, 20)
	}
}
function comerComida(){
	if(cobra.posicao[0]._x === comida.comida.x && cobra.posicao[0]._y === comida.comida.y){
		//console.log('Comeu')
		cobra.posicao.push(cobra.cauda)
		comida.gerarComida();
		cobra.compri += 1;
    }
}