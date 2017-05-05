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
		return pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

const Pikachu = new Pokemon("Pikachu","amarillo",50);
const Charmander = new Pokemon("Charmander","rojo",40);
const Diglet = new Pokemon("Diglet","marron",30);
const Snorlax = new Pokemon("Snorlax","morado",80);
const Jynx = new Pokemon("Jynx","rojo",90);

console.log(Pikachu.atacar(Charmander));    

function pelear(){
	var pokemonEspacio1 = document.getElementById("seleccion1").value;
	var pokemonEspacio2 = document.getElementById("seleccion2").value;
	var texto = document.getElementById("texto");

	var seleccion1 = new Pokemon(pokemonEspacio1,"cielo",90);
	var seleccion2 = new Pokemon(pokemonEspacio2,"tierra",80);

	if(pokemonEspacio1 == pokemonEspacio2){
		alert("No te puedes atacar a ti mismo, escoge otros Pokemones");
	}else{
		texto.innerHTML = seleccion1.nombre + " atacó a " + seleccion2.nombre + " y a " + seleccion2.nombre + " le queda " + seleccion1.atacar(seleccion2) + " de vida restante." + "<img src='Pokeball.png' alt='pokeball' width='300' />";
	}
}

/*var pika = document.getElementsByClassName("pikachu");
pika[0].innerHTML=Pikachu.nombre;
pika[1].innerHTML=Pikachu.nombre;

var char = document.getElementsByClassName("charmander");
char[0].innerHTML=Charmander.nombre;
char[1].innerHTML=Charmander.nombre;*/