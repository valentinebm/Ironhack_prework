var user = {}
var responses = []

function question1() {
	var name = prompt('What is your name?')
	user.name = name
}


function question2() {
	var firstQuestion = prompt ('Am I hungry? (Yes or No)')
		if (firstQuestion.toLowerCase() === 'yes') {
			firstQuestion = true
			prompt('Yes.. Let\'s go eat soon!')
		} else if (firstQuestion.toLowerCase() === 'no') {
			firstQuestion = false
		} else {
			alert("Please, answer yes or no. Don't add anything else such as punctuation, even if you're very hungry..");
			return question2()
		}
		responses.push(firstQuestion);
}

function question3() {
	var secondQuestion = prompt ('What is the capital of Switzerland - Bern, Geneva, or Lausanne?')
		if (secondQuestion.toLowerCase() === 'bern') {
			secondQuestion = true
			prompt('Nice one! Proud of you.')
		} else if (secondQuestion.toLowerCase() === 'geneva') {
			secondQuestion = false
		} else if (secondQuestion.toLowerCase() === 'zurich') {
			secondQuestion = false
		} else {
			alert("Hey, I'm not tricking you. It's one of the three options I mentioned.. Pick one! ");
			return question3()
		}
		responses.push(secondQuestion);
}

function question4() {
	var thirdQuestion = prompt ('OK, last question was easy. Let\'s try something more difficult. I know geography is not your strength..So, what is the capital of India? Again, I\'ll give you three choices: Mumbai, New Dehli, Hyderabad')
		if (thirdQuestion.toLowerCase() === 'new dehli') {
			thirdQuestion = true
			prompt('Good job! Impressed.')
		} else if (thirdQuestion.toLowerCase() === 'mumbai') {
			thirdQuestion = false
			prompt('No.. Next time you\'ll do better!')
		} else if (thirdQuestion.toLowerCase() === 'hyderabad') {
			thirdQuestion = false
			prompt('No.. Next time you\ll do better!')
		} else {
			alert("Hey, again, I'm not tricking you. It's one of the three options I mentioned.. Pick one! ");
			return question4()
		}
		responses.push(thirdQuestion);
}


function evaluate(array) {
	 totalTrue = 0;
	 totalFalse = 0;

 for (var i = 0; i < array.length; i++) {
 	if (array[i] == true) {
 		totalTrue += 1;
 	}

 	else {
 		totalFalse += 1;
 	}
}

 	user.correct = totalTrue;
 	user.wrong = totalFalse;

 	showResults();
	}

function showResults() {
	alert('Hi' + user.name + '! Cool you took the quiz. You answered' +' ' + user.correct + ' ' + 'questions correctly and made ' + user.wrong + ' errors. Good job!')
	}



question1();
question2();
question3();
question4();

evaluate(responses);



