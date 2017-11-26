var inquirer = require("inquirer");

var wordPool = ["Edgar Allen Poe", "Kelsey Grammar", "toothpaste", "pizza", "lamp"];


var numLetter = [];
var matchedLetters = [];
var guessedLetters = [];
var blanks = [];
var attempts = 10;

var Word = function() {
	this.word = word;
	this.numLetter = this.word.split("");

	this.makeBlanks = function(){
			for (var i = 0; i < this.numLetter.length; i++) {
		blanks.push(" _ ");

		console.log(numLetter[i]);
			}

	};
	return blanks;
};	
var wordInPlay = new Word(wordPool[Math.floor((Math.random() * wordPool.length))]);
console.log(wordInPlay);