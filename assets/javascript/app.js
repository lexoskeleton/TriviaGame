//create a variable for the Q+A
//this variable is an array containing multiple objects (key value pairs)
//each question/answer is an object that can be called with JS
var questionsAnswers = [
    { 
        question: "What is the name of Hermione Granger's pet cat?",
        answer: ["Hedwig", "Crookshanks", "Scabbers", "Kreacher"],
        correctAnswer:  "Crookshanks",

    }
    { 
        question: "What is the name of the wizarding prison?",
        answer: ["Alcatraz", "Azkaban", "Alderaan", "Azazel"],
        correctAnswer: "Azkaban",

    }
    { 
        question: "Of the objects named, which one is not one of Voldemort's horcruxes?",
        answer: ["The Diadem of Ravenclaw", "The Sword of Gryffindor", "Regulus Black's Locket", "Marvolo Gaunt's Ring"],
        correctAnswer: "The Sword of Gryffindor",
    }


]

//create click event that grabs the start button & hides the button 
//var hideButton = document.getElementById("startButton");
document.onkeyup = function() {
$("#startButton").hide();
$("div").show();
}


//and populates the question div with the first random question
//create a function to start the timer
//and shows the question/answer divs
//populate question div with first question
//populate answers div with first set of answers as individual buttons
//create click event that captures the user input
//compare user input with correct answer

