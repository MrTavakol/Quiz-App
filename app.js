var questions = {
	0:{
		0 : "what is your favorite color?",
		1 : "Blue",
		2 : "Red",
		3 : "Green",
		4 : "Black",
		5 : 1
	},
	1:{
		0 : "Where do you live?",
		1 : "Isfahan",
		2 : "Tehran",
		3 : "Shiraz",
		4 : "Ardabil",
		5 : 2
	},
	2:{
		0 : "which one is more than 20 ?",
		1 : "twenty",
		2 : "three",
		3 : "two",
		4 : "twenty one",
		5 : 4
	}
};


const numOfKeys = Object.keys(questions).length;
let i = 0;
let corrects = 0;
let answer;
let userAnswer;
let subBtn

showQuestion(i);

function showQuestion(counter){
	
	document.querySelector('#question').innerText = questions[counter][0];
	document.querySelector('#a-label').innerText = questions[counter][1];
	document.querySelector('#b-label').innerText = questions[counter][2];
	document.querySelector('#c-label').innerText = questions[counter][3];
	document.querySelector('#d-label').innerText = questions[counter][4];
	
	answer = questions[counter][5]
	subBtn = document.querySelector('#submit');
	
	subBtn.addEventListener('click',() => {
		
		if (document.getElementById("a").checked == true) {
			userAnswer = 1;
		}
		else if (document.getElementById("b").checked == true) {
			userAnswer = 2;
		}
		else if (document.getElementById("c").checked == true) {
			userAnswer = 3;
		}
		else if (document.getElementById("d").checked == true) {
			userAnswer = 4;
		}
	
		
		document.querySelector('#a').checked = false;
		document.querySelector('#b').checked = false;
		document.querySelector('#c').checked = false;
		document.querySelector('#d').checked = false;
		
		if (answer === userAnswer){
			corrects++;
		}
		counter++;
		
		answer = "a different value";
		userAnswer = "another value";
		
		if (counter < numOfKeys){
			
			showQuestion(counter);
		}else{
			document.querySelector('#question').style.display = 'none';
			document.querySelector('#answers').style.display = 'none';
			document.querySelector('#submit').style.display = 'none';
			result = document.querySelector('#result');
			result.style.display = 'block';
			result.innerText = `Correct Answers: ${corrects}\nQuestions: ${numOfKeys}`
		}
	});
};

