// IMPORTING LIBRARIES
var readlineSync = require("readline-sync");
const chalk = require('chalk');

// UNIVERSAL VARIABLES
var level = 1;
var points = 0;
var userName = readlineSync.question("Can I have your full name please? ");
var leaderBoard = [
  {
    name: "Hardik Goyal",
    score: 36,
  },
  {
    name: "Kriti Bahl",
    score: 30,
  },
  {
    name: "NULL",
    score: 0,
  },
];

// POINTS AND LEVEL TALLY FUNCTION
function pandl(answer) {
  if(answer === 0 || answer === -1) {
    console.log(chalk`{redBright.bold Your answer is WRONG!}
You have {bold ${points} points}.
You are on {rgb(128, 128, 0).bold Level ${level}}.`);
  } else {
    switch(level) {
      case 1: points += 2;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}`);
      if(points >= 6) {
        level++;
        console.log(chalk.rgb(128, 128, 0).bold("Congratulation, you have reached Level ", level));
        break;
      }
      console.log(chalk.rgb(128, 128, 0).bold("You are on Level ", level));
      break;
      
      case 2: points += 4;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}.`);
      if(points >= 18) {
        level++;
        console.log(chalk.rgb(128, 128, 0).bold("Congratulation, you have reached Level ", level));
        break;
      }
      console.log(chalk.rgb(128, 128, 0).bold("You are on Level ", level));
      break;

      case 3: points += 6;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}`);
      if(points >= 36) {
        level++;
        console.log(chalk.rgb(128, 128, 0).bold("Congratulation, you have reached Level ", level));
        break;
      }
      console.log(chalk.rgb(128, 128, 0).bold("You are on Level ", level));
      break;
      
      case 4: points+= 8;
      console.log(chalk`{rgb(128, 128, 0).bold Your answer is CORRECT!}
You have {bold ${points} points}.
You are on {rgb(128, 128, 0).bold Level ${level}}.`);
      break;
    }
  }
  console.log("--------------------------------------------");
}

// USER ANSWER CHECKING FUNCTION
function check(answer, userAnswer) {
  if(userAnswer === -1)
    pandl(-1);
  else if(userAnswer === answer)
    pandl(1);
  else if(userAnswer != answer)
    pandl(0);
}

// WELCOME NOTE 
console.log(chalk`
Hey {bold ${userName}}!
Let's get started with {bold "How Well Do You Know Adhish!"}
I am a quiz, developed by Adhish Bahl.

--------------------------------------------
Let's look at the {bold rules of the game} first:
1. There are {bold 4 Levels} in the game.
2. Points for the correct answer depends on the level you are at:
   2.1{redBright  {bold +2} when you are at {bold Level 1}}
   2.2{rgb(255, 255, 0)  {bold +4} when you are at {bold Level 2}}
   2.3{rgb(255, 255, 0)  {bold +6} when you are at {bold Level 3}}
   2.4{rgb(128, 128, 0)  {bold +8} when you are at {bold Level 4}}
3. There are {bold 12 questions} in total.
4. You can score maximum of {bold 60 points}.
5. You will get to {bold Level 2} when you have {bold 6 points}.
6. You will get to {bold Level 3} when you have {bold 18 points}.
7. You will get to {bold Level 4} when you have {bold 36 points}.
8. All The Best!
--------------------------------------------`);

// QUESTION 1
console.log("\nWhat does he prefer on weekends?");
var options = ['Study', 'Clean House', 'Go out with friends', 'Code'],
index = readlineSync.keyInSelect(options);
check(2,index);

// QUESTION 2
if (readlineSync.keyInYN("\nDoes he prefer burger over pizza?")) {
  pandl(0);
} else {
  pandl(1);
}

// QUESTION 3
console.log("\nWhat is his favorite colour?");
var options = ['Blue', 'Black', 'Red', 'Yellow'],
index = readlineSync.keyInSelect(options);
check(3,index);


// QUESTION 4
if (readlineSync.keyInYN("\nWas he born in Agra?")) {
  pandl(0);
} else {
  pandl(1);
}


// QUESTION 5
console.log("\nWhich school is he from?");
var options = ['MPS', 'St. Stephens', 'Mayoor School', 'St. Anslems'],
index = readlineSync.keyInSelect(options);
check(2,index);

// QUESTION 6
console.log("\nWhich programming language he knows the best?");
var options = ['C', 'JavaScript', 'Java', 'C++'],
index = readlineSync.keyInSelect(options);
check(0,index);


// QUESTION 7
if (readlineSync.keyInYN("\nDoes he do freelancing?")) {
  console.log(chalk.bold("He doesn't have enough skills to freelance :c"));
  pandl(0);
} else {
  console.log(chalk.bold("He doesn't have enough skills to freelance :c"));
  pandl(1);
}

// QUESTION 8
if (readlineSync.keyInYN("\nIs he there on LinkedIn?")) {
  console.log(chalk.bold("Search \"Adhish Bahl\" on LinkedIn and connect with him!"));
  pandl(1);
} else {
  console.log(chalk.bold("Yes, search \"Adhish Bahl\" on LinkedIn and connect with him!"));
  pandl(0);
}

// QUESTION 9
if (readlineSync.keyInYN("\nDoes he prefer Series over Movies?")) {
  pandl(0);
} else {
  pandl(1);
}

// QUESTION 10
console.log("\nWhich kind of songs he listen the most?");
var options = ['Slow', 'English', 'Party', 'Punjabi'],
index = readlineSync.keyInSelect(options);
check(3,index);

// QUESTION 11
if (readlineSync.keyInYN("\nDoes he prefer Coffee over Tea?")) {
  pandl(1);
} else {
  pandl(0);
}

// QUESTION 12
console.log("\nWhich is his favorite sport?");
var options = ['Football', 'Swimming', 'Basketball', 'Cricket'],
index = readlineSync.keyInSelect(options);
check(1,index);

console.log(chalk` {rgb(128, 128, 0).bold \nCongratulation, your Final Points are  ${points}.}`);
var i = 0;
for(i = 2; i >= 0; i--)
{
  if(points > leaderBoard[i].score)
    continue;
  else
    break;
}

if(i === 1) {
  console.log(chalk.rgb(128, 128, 0).bold("\nYou have broke the third heighest record."));
  console.log(chalk.bold("Send a screenshot of your score to Adhish so that he can update in the code."));
  leaderBoard[2].name = userName;
  leaderBoard[2].score = points;
} else if(i === 0) {
  console.log(chalk.rgb(128, 128, 0).bold("\nYou have broke the second heighest record."));
  console.log(chalk.bold("Send a screenshot of your score to Adhish so that he can update in the code."));
  leaderBoard[2].name = leaderBoard[1].name;
  leaderBoard[2].score = leaderBoard[1].score;
  leaderBoard[1].name = userName;
  leaderBoard[1].score = points;
} else if(i === -1) {
  console.log(chalk.rgb(128, 128, 0).bold("\nYou have broke the heighest record."));
  console.log(chalk.bold("Send a screenshot of your score to Adhish so that he can update in the code."));
  leaderBoard[2].name = leaderBoard[1].name;
  leaderBoard[2].score = leaderBoard[1].score;
  leaderBoard[1].name = leaderBoard[0].name;
  leaderBoard[1].score = leaderBoard[0].score;
  leaderBoard[0].name = userName;
  leaderBoard[0].score = points;
} 

console.log(chalk` {bold \nLeader Board:}
{rgb(128, 128, 0).bold First Position : ${leaderBoard[0].name}\t  ${leaderBoard[0].score}}
{rgb(128, 128, 0).bold Second Position: ${leaderBoard[1].name}\t  ${leaderBoard[1].score}}
{rgb(128, 128, 0).bold Third Position : ${leaderBoard[2].name}\t  ${leaderBoard[2].score}}

{bold Thank you ${userName} for playing the game!}
--------------------------------------------`);

