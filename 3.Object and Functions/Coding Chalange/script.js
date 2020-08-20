/* Coding Chalange
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
	
	var q1 = new Question('Is JavaScript the coolest programming language in the world?',
						  ['Yes', 'No'],
						  0);
	var q2 = new Question('What is the name of this course\'s teacher?',
						  ['John', 'Michel', 'Jonas'],
						  2);
	var q3 = new Question('What does best describe coding?',
						  ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
	var ques = [q1, q2, q3];
	var n = Math.floor(Math.random() * ques.length);
	console.log(n)
	
	function Question(question, answer, correct) {
		this.question = question;
		this.answer = answer;
		this.correct = correct;
	}
	Question.prototype.displayQuestion = function() {
		console.log(this.question);
		for(var i = 0; i < this.answer.length; i++) {
			console.log(i + ': ' + this.answer[i]);
		}
	}
	Question.prototype.checkAnswer = function (answer) {
		if (answer 	=== this.correct) {
			
			console.log('Correct Answer!');
		} else {
			console.log(' Wrong Answer! Try Again!');
		}
	}
	ques[n].displayQuestion();
	
	var answer = parseInt(prompt('Please Select The Correct Answer!'));
	console.log(answer);
	ques[n].checkAnswer(answer);
}());










