var gameWords = ["apple", "android", "honda", "toyota", "house"];

function randomWord(wordsArray) {
    var random = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[random];
}

function isCorrectGuess(word, letter) {
    for (var i=0; i < word.length; i++) {
    if (word.includes )
        return true;
    }
        return false;

    }

    function getBlanks(word) {
        var blanksArray = [];
        for (var i = 0; i < word.length; i++) {
            blanksArray.push("_");
    }
        return blanksArray;
    }

    function fillBlanks(word, puzzleState, letter) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                puzzleState[i] == letter;
            }
        }
        return puzzleState
    }

    function setupRound(word) {
        var newRound = {
            word : word,
            guessesLeft: 9,
            wrongGuesses: [],
            puzzleState : getBlanks(word),
        }
        return newRound;
    }
    
    function updateRound(thisRound, letter) {
        if (isCorrectGuess(thisRound.word, letter)) {
            thisRound.puzzleState = fillBlanks(thisRound.word, thisRound.puzzleState, letter);
        }
        else {
            console.log("wrong guess");
            thisRound.wrongGuesses.push(letter);
            thisRound.guessesLeft;
        }
        }

    function hasWon(puzzleState) {
        for (var i = 0; i < puzzleState.length; i++) {
            if (puzzleState[i] === "_") {
                return false;
            }
            }
                return true;
        }

    function hasLost(guessesLeft) {
        if (guessesLeft === 0) {
            return true;
        }
        else {
            return false;
        }
        }

    function isEndOfRound(thisRound) {
        if (thisRound.guessesLeft === 0) {
            return true;
        }
        if (hasWon(thisRound.puzzleState)) {
            return true;
        }
            return false;
        }

    function setupGame(words, wins, losses) {
        var game = {
        words : words,
        wins : wins,
        losses : losses,
        round : setupRound(randomWord(words)),
        }
            return game;
        }

    function startNewRound(game) {
        var puzzleState = game.round.puzzleState;
            if (hasWon(puzzleState) === true) {
                ++game.wins;
                winRound.play();
                alert("Congratulations!!! The word was " + game.round.word);
            }
            else {
                ++game.losses;
                alert("We're Sorry!!! The word was " + game.round.word);
            }
            return game; 
        }

        var myGame = setupGame(gameWords, 0, 0);

        var audio = newAudio ('https://www.youtube.com/watch?v=hV6FDajxV8U')

        function startGame () {
            selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
            letter = selectedWord.split("");
            numBlanks = letter.length;

            guessesLeft = 9;
            wrongGuesses = [];
            blanksAndSuccesses = [];

            for (var i=0; i<numBlanks; i++) {
                blanksAndSuccesses.push("_");
            }
        }