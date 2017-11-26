var inquirer = require("inquirer");

var wordPool = ["Edgar Allen Poe", "Kelsey Grammar", "toothpaste", "pizza", "lamp"];


var lettersOfTheWord = [];
var matchedLetters = [];
var guessedLetters = [];
var blanks = [];

var Word = function(word) {
	this.word = word;
	this.lettersOfTheWord = this.word.split("");

	this.makeBlanks = function(){
			for (var i = 0; i < this.lettersOfTheWord.length; i++) {
		blanks.push(" _ ");
		console.log(lettersOfTheWord[i]);
			}
	};
	return blanks;
};	
var wordInPlay = new Word(wordPool[Math.floor((Math.random() * wordPool.length))]);
console.log(wordInPlay);