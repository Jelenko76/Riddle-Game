# Riddle Game

### Can you solve these riddles to win the game?
In this game, you'll face a series of riddles that will test your wit and cunning. Each riddle is defined in an array along with hints and answers. Your goal is to answer as many riddles as you can correctly to win the game.


In this section, you will include one or two paragraphs providing an overview of your project. Essentially, this part is your sales pitch. At this stage, you should have a name for your project so use it! Don’t introduce the project as a Portfolio project for the diploma. In this section, describe what the project hopes to accomplish, who it is intended to target and how it will be useful to the target audience. 

For example; Love Running is a site that hopes to help keep people motivated to meet up for runs on a regular basis in Dublin, Ireland. The site will be targeted toward runners who are looking for a way to socialise and keep themselves fit. Love Running will be useful for runners to see exactly when and where they should be to join the running club. 


## Features 
The game keeps track of the current riddle index and the user's score. The displayRiddle() function is used to show the current riddle to the user and reset the input field.
When the user submits an answer, the checkAnswer() function is called. It compares the user's answer to the correct answer for the current riddle. If the user is correct, their score is incremented, and the next unsolved riddle is displayed. If all riddles have been solved, the game is reset. If the user is incorrect, a hint is displayed, and the answer is marked as incorrect.


### Existing Features
Riddles Array
The riddles are stored in an array with hints and answers. This makes it easy to add or remove riddles from the game and ensures that players never get the same riddle twice.

Score Tracking
The game keeps track of your score and displays it at the top of the screen. This allows you to see how many riddles you've answered correctly and keeps you motivated to keep playing.

Hint System
If you get stuck on a riddle, the hint system will give you a clue to help you out. This ensures that players of all skill levels can enjoy the game and learn something new.

Responsive Design
The game is fully responsive and works on all devices, from desktop computers to mobile phones. This means you can play the game anywhere, anytime.
![Responsice Mockup]https://ui.dev/amiresponsive?url=https://jelenko76.github.io/Riddle-Game/

Existing Features
Riddle Display
The displayRiddle() function shows the current riddle and resets the input field. This ensures that players are always focused on the current riddle and don't get distracted by previous ones.

Answer Checking
The checkAnswer() function compares your answer to the correct one and updates your score accordingly. This ensures that the game is fair and accurate.
 
### Features Left to Implement
Multiplayer Mode
In the future, we plan to add a multiplayer mode where players can compete against each other to see who can answer the most riddles correctly. This will add a new level of competition.

## Testing 
Ihave conducted extensive testing to ensure that the game works well on all devices and browsers. it´s been tested game on desktop computers, laptops, tablets, and mobile phones, and it works.I have also tested the game on different browsers, including Chrome, Firefox, Safari, and Edge, and it works.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator]https://validator.w3.org/nu/?doc=https%3A%2F%2Fjelenko76.github.io%2FRiddle-Game%2F
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator]https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjelenko76.github.io%2FRiddle-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

### Unfixed Bugs

None what i can find. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 
