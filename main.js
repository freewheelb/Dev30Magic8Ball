// MAGIC 8 BALL PROJECT

// USERNAME HANDLING

const userName = 'Stephen';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// QUESTION HANDLING
const userQuestion = "Will I get a job in coding after this program?";
console.log(`${userName} wants to know: ${userQuestion}`);

// RANDOM NUMBER GENERATION
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';

// IF/ELSE METHOD
if (randomNumber === 0){
    eightBall = 'For sure! You got this!';
}
else if (randomNumber === 1){
    eightBall = 'It is decidedly so';
}
else if (randomNumber === 2){
    eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3){
    eightBall = 'Cannot predict now';
}
else if (randomNumber === 4){
    eightBall = 'Quite possibly. Ask again';
}
else if (randomNumber === 5){
    eightBall = 'My sources say no';
}
else if (randomNumber === 6){
    eightBall = 'Outlook not so good';
}
else if (randomNumber === 7){
    eightBall = 'Signs point to yes';
}

// SWITCH METHOD - Researched on YouTube and used Gemini to explain syntax and use. I appreciate the compact code it produces.
switch (randomNumber) {
    case 0: 
    eightBall = 'For sure! You got this!';
    break;
    case 1: 
    eightBall = 'It is decidedly so';
    break;
    case 2: 
    eightBall = 'Reply hazy try again';
    break;
    case 3: 
    eightBall = 'Cannot predict now';
    break;
    case 4: 
    eightBall = 'Quite possibly. Ask again';
    break;
    case 5: 
    eightBall = 'My sources say no';
    break;
    case 6: 
    eightBall = 'Outlook not so good';
    break;
    case 7: 
    eightBall = 'Signs point to yes';
}

console.log(`The Magic 8 Ball says: ${eightBall}`);
