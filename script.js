

var questions = [
    { q: "The sky is what color.", a: "red", b: "blue", c: "yellow", d: "brown", e: "blue" },
    { q: "There are 365 days in a .", a: "leap year", b: "week", c: "month", d: "year", e: "year" },
    { q: "There are 42 ounces in a pound.", a: "t", b: "s", c: "blue", d: "w", e: "blue" },
    { q: "The Declaration of Independence was created in 1745.", a: "t", b: "s", c: "blue", d: "w", e: "blue" },
    { q: "Bananas are vegetables.", a: "blue", b: "s", c: "e", d: "w", e: "blue" },
];
var count = 0;
var indexQ = 0;
var beakLoop = questions.length;
var numOfQ = questions.length;

var questionsTB = document.querySelector("#questionTB");
var button1RB = document.querySelector("#button1");
var button2RB = document.querySelector("#button2");
var button3RB = document.querySelector("#button3");
var button4RB = document.querySelector("#button4");
var button5RB = document.querySelector("#button5");
var button6RB = document.querySelector("#button6");
var buttonClick1 = document.querySelector("#button1");
var buttonClick2 = document.querySelector("#button2");
var buttonClick3 = document.querySelector("#button3");
var buttonClick4 = document.querySelector("#button4");
var buttonClick5 = document.querySelector("#button5");
var buttonClick6 = document.querySelector("#button6");
var countText = document.querySelector("#count");
var timeLeft = document.querySelector("#timer");
var mainEl = document.getElementById("main");
var secondsLeft = 100;
var answer = ".";
var timerInterval = 0;
//console.log("num of q = 5   " + numOfQ);
countText.textContent = "SCORE: " +count;
document.getElementById('button5').style.visibility = 'hidden';
document.getElementById('button6').style.visibility = 'hidden';
var startgame = true;
startGame();


function startGame(){
    document.getElementById('button5').style.visibility = 'visible';
    document.getElementById('button5').textContent = 'START GAME';
    document.getElementById('button1').style.visibility = 'hidden';
    document.getElementById('button2').style.visibility = 'hidden';
    document.getElementById('button3').style.visibility = 'hidden';
    document.getElementById('button4').style.visibility = 'hidden';
    var startgame = false;
      
}



//console.log("step 1.1")
 






function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
   
        sendMessage();
      }
  
    }, 1000);
  } 
  
  
  
    function setCounterText() {
      countText.textContent = "SCORE: " +count;
    }
      



function gameOver() {
    clearInterval(timerInterval);
    questionsTB.textContent = "GAME OVER"
    button1RB.textContent = "";
    button2RB.textContent = "";
    button3RB.textContent = "";
    button4RB.textContent = "";
    answer = "GAME OVER";
    button6RB.textContent = " Do you want to save your score";
    document.getElementById('button6').style.visibility = 'visible';
    document.getElementById('button1').style.visibility = 'hidden';
    document.getElementById('button2').style.visibility = 'hidden';
    document.getElementById('button3').style.visibility = 'hidden';
    document.getElementById('button4').style.visibility = 'hidden';
  }



function nextQ() {
 
    
if (indexQ <= 4) {
questionsTB.textContent = questions[indexQ].q;
button1RB.textContent = questions[indexQ].a;
button2RB.textContent = questions[indexQ].b;
button3RB.textContent = questions[indexQ].c;
button4RB.textContent = questions[indexQ].d;
answer = questions[indexQ].e;
    
document.getElementById('button5').style.visibility = 'hidden';
document.getElementById('button1').style.visibility = 'visible';
document.getElementById('button2').style.visibility = 'visible';
document.getElementById('button3').style.visibility = 'visible';
document.getElementById('button4').style.visibility = 'visible';

} else {
    gameOver();
clearInterval(timerInterval);
}

}

buttonClick1.addEventListener("click", function () {
    if (questions[indexQ].a === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
        //console.log(indexQ + "answqer is =" + answer);
    }else{
        indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";

        //console.log(indexQ + "answqer is was not " + answer );
    };
});

buttonClick2.addEventListener("click", function () {
    if (questions[indexQ].b === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
        //console.log(indexQ + "answqer is =" + answer);
    }else{
        indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";
        //console.log(indexQ + "answqer is was not " + answer );
    };
});

buttonClick3.addEventListener("click", function () {
    if (questions[indexQ].c === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
        //console.log(indexQ + "answqer is =" + answer);
    }else{indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";
        //console.log(indexQ + "answqer is was not " + answer );
    };
});
buttonClick4.addEventListener("click", function () {
    if (questions[indexQ].d === answer) {
        count++;
        setCounterText();
        indexQ++;
        nextQ();
        //console.log(indexQ + "answqer is =" + answer);
    }else{
        indexQ++;
        nextQ();
        timeLeft.textContent = (secondsLeft=  secondsLeft - 15) + " seconds left.";

               //console.log(indexQ + "answqer is was not " + answer );
    };
});
//console.log(indexQ + "indexq = " + indexQ)

buttonClick5.addEventListener("click", function () {
     nextQ();
     setTime();
});

buttonClick6.addEventListener("click", function () {
    
        console.log("save id end");
        document.createElement
    
});
