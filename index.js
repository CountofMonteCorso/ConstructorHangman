var inquirer = require("inquirer");

var wordPool = ["guacamole", "sports", "toothpaste", "pizza", "lamp", "bird"];

var lettersArray = [];
var guesses = 10;
var gameOver = false;
var matchedLetters = false;

// This constructor represents a single letter
var Letter = function(letter) {
	this.letter = letter; // Set the value of the letter
	this.isGuessed = false; // Has the letter been guessed?
};


var Word = function(someWord) {

	this.word = someWord; // The value of the word

	for (var i = 0; i < this.word.length; i++) {
		var letterObject = new Letter(this.word[i]); // Create new Letter Object
		lettersArray.push(letterObject); // Push new Letter object into array	
	}
};	

// Pick a random word from the wordPool
var randomWord = wordPool[Math.floor((Math.random() * wordPool.length))];

// Create a new word object
var wordObject = new Word(randomWord);

//Log out the "word" property of the "wordObject" we just created

// console.log("wordObject", wordObject.wordDisplay);


//Start user input
	console.log("Hey boogerbreath. Let's play hangman.")
var promptStart = function() {

	inquirer.prompt([
      {
        name: "input",
        message: "Guess a letter ya ding dong!",
    	validate: function(value) {
            // Is a valid character
          	if (value.length === 1 && value.match(/[a-z]/i)) {
            	return true;
          	} else {
          		return "I'll have you know that's not a letter ya stupid bitch!!!";
          	}
        }
      },
    ]).then(function(userInput) {
		// Loop each Letter Object inside our lettersArray
		var userInput = userInput.input;
		var output = ''; // Output to display
		//Loop each Letter object in lettersArray
		for (i = 0; i < lettersArray.length; i++){

		    // Check each letter and set isGuessed to true if it matches the userInput

			if (userInput == lettersArray[i].letter) {
				lettersArray[i].isGuessed = true;
				matchedLetters = true;
			}

		    // if letter has been guessed (now or previously) add it to our output string
			if (lettersArray[i].isGuessed === true) {
			    output = output + lettersArray[i].letter;
			    
			}
			// Otherwise add an underscore to our output string
			else {
				output+= " _ "; //same as (output = output + " _ ")

			}
		}; // End loop

		if (matchedLetters === true) {
			console.log("Lucky guess, biotch.");
		}
		else {
			console.log("Ha! Nope. Dumbass...")
			guesses--;
		}
		console.log(guesses);
		console.log(output);

		matchedLetters = false;

		var endGame = function(){
			var correctLetters = 0;

			for (i = 0; i < lettersArray.length; i++){ 
				if (lettersArray[i].isGuessed == true){
					correctLetters++;
					if (correctLetters === lettersArray.length){
						console.log("Wow. I can't believe someone as dumb as you actually managed to win. I'm impressed.")
						gameOver = true;
					}
				}
				
			};				
			if (guesses === 0){
					gameOver = true;
					console.log("haaaa you suuuuuck lol")
			}

			if (gameOver === false){
				promptStart();
			}
		};	
		endGame();
		// End User input
	});		
}

promptStart();