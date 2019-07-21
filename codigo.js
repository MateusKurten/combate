
// Rolar dados (Max = numero de lados)
function getRandomInt(max) {
  max = Math.floor(max);
  resultado = Math.floor(Math.random() * max) + 1;
  return resultado;
}

//Classe Jogador
class Jogador{
	constructor(){
	this.habilidade = getRandomInt(6) + 6;
	this.energia = getRandomInt(6) + getRandomInt(6) + 12;
	this.sorte = getRandomInt(6) + 6;
	}
	
}

//Classe Monstro
class Monstro{
	constructor(nome,habilidade,energia){
		this.nome = nome;
		this.habilidade = habilidade;
		this.energia = energia;
	}
}

//Alguns Monstros (estava fazendo de baixo pra cima)
ElfoNegro = new Monstro('Elfo Negro', 4, 4);
Hidra = new Monstro('Hidra', 10, 17);
BalthusDire = new Monstro ('Balthus Dire', 12, 19);
PrimeiroGira = new Monstro ('Primeiro Gira',7,6);
SegundoGira = new Monstro ('Segundo Gira', 6,5);
Gark = new Monstro('Gark', 7, 11);


//Botão Batalhar Versão 2.
function batalha(){
	var ataqueJogador, ataqueMonstro;
	ataqueJogador = getRandomInt(6) + getRandomInt(6) + Jogador.habilidade;
	ataqueMonstro = getRandomInt(6) + getRandomInt(6) + monstroEscolhido.habilidade;
	if (ataqueJogador < ataqueMonstro){
		Jogador.energia -= 2;
		alert("O monstro te acertou!\nSua força de ataque: " 
		+ataqueJogador+ "\nMonstro: " + ataqueMonstro);
	}else{
		if (ataqueJogador > ataqueMonstro){
			monstroEscolhido.energia -= 2;
			alert("Você acertou o monstro!\nSua força de ataque: " 
			+ataqueJogador+ "\nMonstro: " + ataqueMonstro);
		}else{monstroEscolhido.energia = monstroEscolhido.energia;}
	}
	if (monstroEscolhido.energia <= 0)
		alert("Você derrotou o monstro!");
	if (Jogador.energia <= 0)
		alert("Você morreu.");
	document.getElementById("tabmonstroenergia").innerHTML = monstroEscolhido.energia;
	document.getElementById("tabenergia").innerHTML = Jogador.energia;
}

//Para esconder botão Rolar Dados
var hidden = false;
function esconder(){
	 hidden = !hidden;
        if(hidden) {
            document.getElementById('rolardados').style.visibility = 'hidden';
        } else {
            document.getElementById('rolardados').style.visibility = 'visible';
        }
}

//para Botão rolar Dados
function iniciarJogador(){
	Jogador = new Jogador();
	alert("Dados rodados!");
	esconder();
	document.getElementById("tabhabilidade").innerHTML = Jogador.habilidade;
	document.getElementById("tabsorte").innerHTML = Jogador.sorte;
	document.getElementById("tabenergia").innerHTML = Jogador.energia;
}


//Para botão re-rolar
function reroll(){
	Jogador.habilidade = getRandomInt(6) + 6;
	Jogador.energia = getRandomInt(6) + getRandomInt(6) + 12;
	Jogador.sorte = getRandomInt(6) + 6;
	document.getElementById("tabhabilidade").innerHTML = Jogador.habilidade;
	document.getElementById("tabsorte").innerHTML = Jogador.sorte;
	document.getElementById("tabenergia").innerHTML = Jogador.energia;
}

var monstroEscolhido;

function escolherGark(){
	document.getElementById("tabmonstrohabilidade").innerHTML = Gark.habilidade;
	document.getElementById("tabmonstronome").innerHTML = Gark.nome;
	document.getElementById("tabmonstroenergia").innerHTML = Gark.energia;
	monstroEscolhido = Gark;
}

function escolherMonstro(Monstro){
	Monstro = (typeof Monstro !== "object") ? {} : Monstro; //Passando o Objeto como Parâmetro
	Monstro.nome = Monstro.nome || 'João';
	Monstro.habilidade = Monstro.habilidade || 10 ;
	Monstro.energia = Monstro.energia || 15;
	document.getElementById("tabmonstrohabilidade").innerHTML = Monstro.habilidade;
	document.getElementById("tabmonstronome").innerHTML = Monstro.nome;
	document.getElementById("tabmonstroenergia").innerHTML = Monstro.energia;
	monstroEscolhido = Monstro;
}