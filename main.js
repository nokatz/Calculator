

let display;

let displayString = "0";
let firstOp, secondOp, operation = 0;
let result;
let endCalc = false;	// flag set when the last btn clicked is 'equals'

display = document.getElementById('display');
display.innerHTML = displayString;


// Atach same listener to all num buttons
let numBtns = document.getElementsByClassName('num');

for(let i = 0; i < numBtns.length; i++){
	numBtns[i].addEventListener('click', writeNum);
}
 
// Num btns click handler
function writeNum(e){
	
	let num = e.target.textContent;
	let numString = num.toString();

	
	if(displayString === "0" || endCalc === true){
		displayString = numString;
	} else {
		displayString += numString;
	}
	
	endCalc = false;
	
	display.innerHTML = displayString;
}


// Atach listener to operation buttons
let opBtns = document.getElementsByClassName('op');

for(let i = 0; i < opBtns.length; i++){
	opBtns[i].addEventListener('click', setOperation);
}

function setOperation(e){
	
	endCalc = false;
	firstOp = displayString;
	operation = e.target.textContent;
	displayString += " " + operation + " ";
	display.innerHTML = displayString;
	
}


// Equals button calculations
let equalsBtn = document.getElementById('btn-equals');

equalsBtn.addEventListener('click', calculate);

function calculate(){
	
	secondOp = displayString.slice(displayString.lastIndexOf(" "), displayString.length);
	
	switch(operation){
		case '+':
			result = (parseInt(firstOp) + parseInt(secondOp)).toString();
			break;
		case '-':
			result = (parseInt(firstOp) - parseInt(secondOp)).toString();
			break;
		case '*':
			result = (parseInt(firstOp) * parseInt(secondOp)).toString();
			break;
		case '/':
			result = (parseInt(firstOp) / parseInt(secondOp)).toString();
			break;
	}
	
	operation = 0;
	endCalc = true;
	displayString = result;
	
	display.innerHTML = displayString;
	
}











