function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.poderDeAtaque = poderDeAtaque;

	this.nivelDeAmistad = 0;
	this.vida = 100;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

const Pikachu = new Pokemon("Pikachu","amarillo");