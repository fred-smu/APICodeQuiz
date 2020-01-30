

var questions = [
    { q: "The sky is what color.", a: "red", b: "blue", c: "yellow", d: "brown", e: "blue" },
    { q: "There are 365 days in a .", a: "leap year", b: "week", c: "month", d: "year", e: "year" },
    { q: "There are how many ounces in a pound.", a: "4", b: "8", c: "20", d: "16", e: "16" },
    { q: "The Declaration of Independence was created in  what year.", a: "2000", b: "1776", c: "1642", d: "1820", e: "1776" },
    { q: "What is the speed of Light.", a: "186 282.397 per sec", b: "200 mph", c: "light dose not have a speed", d: "faster then supperman", e: "186 282.397 per sec" },
];
var count = 0;
var indexQ = 0;
var beakLoop = questions.length;
var numOfQ = questions.length;

var h4Head = document.getElementById("h4Top"); 
var button1RB = document.querySelector("#button1");
var button2RB = document.querySelector("#button2");
var button3RB = document.querySelector("#button3");
var button4RB = document.querySelector("#button4");
var button5RB = document.querySelector("#button5");
var button6RB = document.querySelector("#button6");
var button7RB = document.querySelector("#button7");
var buttonSaveRB = document.querySelector("#buttonSave");
var buttonReturnRB = document.querySelector("#buttonReturn");
var buttonClick1 = document.querySelector("#button1");
var buttonClick2 = document.querySelector("#button2");
var buttonClick3 = document.querySelector("#button3");
var buttonClick4 = document.querySelector("#button4");
var buttonClick5 = document.querySelector("#button5");
var buttonClick6 = document.querySelector("#button6");
var buttonSaveClick = document.querySelector("#buttonSave");
var buttonReturnClick = document.querySelector("#buttonReturn");
var countText = document.querySelector("#count");
var timeLeft = document.querySelector("#timer");
var mainEl = document.querySelector(".mainDiv");
var secondsLeft = 100;
var answer = ".";
var timerInterval = 0;

countText.textContent = "SCORE: " +count;
var startgame = true;
startGame();

/*****************************************************************
 * Funtion section
 * startGame() starts the game
 * setTime()   starts the timmer
 * gameOver()  ends the game
 * nextQ()     sets the questions 
 * 
 */
function startGame(){
    document.getElementById('button5').style.display = 'block';
    document.getElementById('button5').textContent = 'START GAME';
    document.getElementById('button1').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button3').style.display = 'none';
    document.getElementById('button4').style.display = 'none';
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    countText.textContent = "SCORE: " +count;

    startgame = false;
    initInput.value = ""; 
}


function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
} 

function setCounterText() {
    countText.textContent = "SCORE: " +count;
}

function gameOver() {
    clearInterval(timerInterval);
    h4Top.textContent = "GAME OVER"
    button1RB.textContent = "";
    button2RB.textContent = "";
    button3RB.textContent = "";
    button4RB.textContent = "";
    answer = "GAME OVER";
    button6RB.textContent = " Do you want to save your score";
    document.getElementById('button6').style.display = 'block';
    document.getElementById('button1').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button3').style.display = 'none';
    document.getElementById('button4').style.display = 'none';
}

function nextQ() {
    if (indexQ <= 4) {
    h4Top.textContent = questions[indexQ].q;
    button1RB.textContent = questions[indexQ].a;
    button2RB.textContent = questions[indexQ].b;
    button3RB.textContent = questions[indexQ].c;
    button4RB.textContent = questions[indexQ].d;
    answer = questions[indexQ].e;
        
    document.getElementById('button1').style.display = 'block';
    document.getElementById('button2').style.display = 'block';
    document.getElementById('button3').style.display = 'block';
    document.getElementById('button4').style.display = 'block';
    document.getElementById('button5').style.display = 'none';
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';

    } else {
        gameOver();
    clearInterval(timerInterval);
    }
}

/*************************************************************
 * Buttons click events
 * button discription 
 * button1 > answer A
 * button2 > answer B
 * button3 > answer C
 * button4 > answer D
 * button5 > Starts Game
 * button6 > is uses 2 times 
 *              1) askes "do you want to save your score"
 *              2) saves your INITALS
 * button7 > return to game. resets vars
 * 
 * NOTE if ansers dont match questions[indexQ].e  15 sec is taken away from the clock
 */

buttonClick1.addEventListener("click", function () {
    if (questions[indexQ].a === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
    }else{
        indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";
    };
});

buttonClick2.addEventListener("click", function () {
    if (questions[indexQ].b === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
    }else{
        indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";
     };
});

buttonClick3.addEventListener("click", function () {
    if (questions[indexQ].c === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
    }else{indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";
    };
});

buttonClick4.addEventListener("click", function () {
    if (questions[indexQ].d === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
    }else{
        indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";
    };
});

buttonClick5.addEventListener("click", function () {
    indexQ = 0;
    secondsLeft = 100;
     nextQ();
     setTime();
});

buttonClick6.addEventListener("click", function () {
    h4Top.textContent = "Enter Your Initals";
    
    initInput.style.display = "block"; 
    button7RB.style.display = "block"; 
    button7RB.textContent = " Return To Game";   
    if (buttonClick6.textContent === " Save Your Score") {
        var gameInit = initInput.value;
        var liCreate = document.createElement("li");
        topScore.style.display = "block";
        var topDisply = document.getElementById("topScore");
        topDisply.appendChild(liCreate).textContent= gameInit + "  " + count ;
    } 
button6RB.textContent = " Save Your Score";
});

button7RB.addEventListener("click", function () {
    h4Top.textContent = "Question";
    initInput.style.display = "none"; 
    startgame = true;
    vsecondsLeft = 100;
    answer = ".";
    timerInterval = 0;
    count = 0;
    countText.textContent = "SCORE: " +count;
    startgame = true;
    topScore.style.display = "none";
    startGame();
    
});

