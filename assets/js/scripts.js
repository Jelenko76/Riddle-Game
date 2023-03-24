// Define the riddles and answers
const riddles = [
    {
      text: "I am always hungry, I must always be fed. The finger I touch, Will soon turn red. What am I?",
      answer: "fire",
      hint: "Think about something that needs to be fed to keep burning"
    },
    {
      text: "I am light as a feather, yet the strongest man can't hold me for much more than a minute. What am I?",
      answer: "breath",
      hint: "What do you do when you inhale and exhale?"
    },
    {
      text: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
      answer: "pencil",
      hint: "What do you write with?"
    },
    
  ];
  
  // Define variables for the game
  let currentRiddleIndex = 0;
  let score = 0;
  
  // Display the current riddle and reset the input field
  function displayRiddle() {
    document.getElementById("riddle").textContent = riddles[currentRiddleIndex].text;
    document.getElementById("answer").value = "";
    document.getElementById("hint").style.display = "none";
  }
  
  // Check the user's answer and update the score and hint
  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById("score").textContent = `Score: ${score}`;
      document.getElementById("answer-result").textContent = "Correct!";
      currentRiddleIndex++;
      if (currentRiddleIndex === riddles.length) {
        alert("You have solved all the riddles!");
      } else {
        displayRiddle();
      }
    } else {
      document.getElementById("hint").style.display = "block";
      document.getElementById("hint").textContent = riddles[currentRiddleIndex].hint;
      document.getElementById("answer-result").textContent = "Incorrect.";
    }
  }
  
  // Initialize the game
  displayRiddle();
  document.getElementById("score").textContent = `Score: ${score}`;
  