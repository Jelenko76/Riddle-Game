# Riddle-Game

This code is for a riddle game where the user must answer a series of riddles correctly to win. The riddles are defined in an array, along with their answers and hints.

The game keeps track of the current riddle index and the user's score. The displayRiddle() function is used to show the current riddle to the user and reset the input field.

When the user submits an answer, the checkAnswer() function is called. It compares the user's answer to the correct answer for the current riddle. If the user is correct, their score is incremented, and the next unsolved riddle is displayed. If all riddles have been solved, the game is reset. If the user is incorrect, a hint is displayed, and the answer is marked as incorrect.

The getNextUnsolvedRiddleIndex() function is used to find the next unsolved riddle, or return -1 if all riddles have been solved.

The resetGame() function is called when the game needs to be reset. It sets the current riddle index and score to 0, marks all riddles as unsolved, and displays the first riddle.

Finally, the code includes some modal functionality to show a "Try again?" message when the user has completed all the riddles.
