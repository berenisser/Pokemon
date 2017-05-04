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

const Pikachu = new Pokemon("Pikachu","amarillo",50);
const Charmander = new Pokemon("Charmander","rojo",40);
const Diglet = new Pokemon("Diglet","marron",30);
const Snorlax = new Pokemon("Snorlax","morado",80);
const Jynx = new Pokemon("Jynx","rojo",90);

Pikachu.atacar(Charmander);
console.log(Charmander.vida);