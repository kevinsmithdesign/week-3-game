
		
		// global variables	
		var wins = 0;
		var losses = 0;
		var guesses = 0;
		var guessesLeft = 8;
		var lettersGuessed = [];

		// On Click letters Array
		var alphabet = ["a","b","c","d","e","f","g","h","i","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"];

		var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

		document.onkeyup = function() {
			var userguess = String.fromCharCode(event.keyCode).toLowerCase();
			
			//guesses--;
			console.log(userguess);
			console.log(computerGuess);

		//Show user the letters guessed to the screen and subtracts 1 for every turn.
		if(userguess) {
			guessesLeft--;
			document.getElementById("guesses").innerHTML = guessesLeft;
		}

		// Increases wins if user and computer guess the same answer. Otherwise, after you've had 8 guesses without a correct answer you receive a loss. 
		lettersGuessed.push(userguess);
		if(userguess === computerGuess) {
			wins++
			document.getElementById("win").innerHTML = wins;
		} else if(guessesLeft === 0) {
			losses++
			document.getElementById("loss").innerHTML = losses;
			
		}

		if(guesses === 0)

		{
			reset();
		}
			//Shows individual letters that were already choosen. 
			document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" | ");

		}	


		//Resets Guesses and Guesses Left. 
		var reset = function() {
			if(guessesLeft == 0){


				guesses = 0;
				guessesLeft = 9;
				lettersGuessed = [];
				document.getElementById("guesses").innerHTML = guesses;
				document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
				computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			}
		}	


	