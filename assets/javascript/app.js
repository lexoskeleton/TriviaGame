//create a variable for the Q+A
//this variable is an array containing multiple objects (key value pairs)
//each question/answer is an object that can be called with JS
var questionsAnswers = [
    { 
        question: "What is the name of Hermione Granger's pet cat?",
        answer: ["Hedwig", "Crookshanks", "Scabbers", "Kreacher"],
        correctAnswer:  "Crookshanks",

    },
    { 
        question: "What is the name of the wizarding prison?",
        answer: ["Alcatraz", "Azkaban", "Alderaan", "Azazel"],
        correctAnswer: "Azkaban",

    },
    { 
        question: "Of the objects named, which one is not one of Voldemort's horcruxes?",
        answer: ["The Diadem of Ravenclaw", "The Sword of Gryffindor", "Regulus Black's Locket", "Marvolo Gaunt's Ring"],
        correctAnswer: "The Sword of Gryffindor",
    }


]

var correct = 0;
var wrong = 0;
var unanswered = 0;
var questionsAsked = 0;
var questionsToAnswer= 5;
var timeToAnswer =15;
var result = 1;
var ticker = 1;



//create a function that randomizes the questions/answers + populates Q+A
function randomQuestion () {
   questionAnswers[Math.floor(Math.random() * questionAnswers.length)];

}


//create a decrement function that starts the timer
//and times out when finished
function countdown(){
	if(ticker != 1) {
		timeToAnswer--;
		$("#timer").text(timeToAnswer);
		if(timeToAnswer === 0) {
			timeToAnswer = 15;
			ticker = 1;
			alert("Time's Up!");
		}
	}
}


//create click event that grabs the start button & hides the button 
//as well as reveals the timer, random question, & answer choices
$("#startButton").on("click", function(){
    $("#startButton").hide();
    $("div").show();
    $("#timer").text("Time to Answer: " + timeToAnswer);
    countdown();
});



//create a function that populates question div with the first random question dynamically


//create a function to populate answers div with first set of answers as individual buttons
//compare user input with correct answer


//uLTIMATELY: on the click event
//shuffle the questions--> replace the opening screen w/ questions and answers
//set the interval countdown to 5,000; which populates the question
//populate the question 

//


