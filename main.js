

let display, small;

let displayString = "0", smallString = "";
let firstOp, secondOp, operation = 0;
let result;
let endCalc = false;	// flag set when the last btn clicked is 'equals'

display = document.getElementById('large');
display.innerHTML = displayString;

small = document.getElementById('small');
small.innerHTML = smallString;


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

	drawNums();

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
	
	endCalc = true;
	
	// displayString += " " + operation + " ";
	smallString = displayString + " " + operation + " ";
	
	drawNums();
	
}


// Equals button calculations
let equalsBtn = document.getElementById('btn-equals');

equalsBtn.addEventListener('click', calculate);

function calculate(){
	
	// secondOp = displayString.slice(displayString.lastIndexOf(" "), displayString.length);
	secondOp = displayString;
	
	let o1 = parseFloat(firstOp), o2 = parseFloat(secondOp);
	
	switch(operation){
		case '+':
			result = o1 + o2;
			break;
		case '-':
			result = o1 - o2;
			break;
		case '*':
			result = o1 * o2;
			break;
		case '/':
			result = o1 / o2;
			break;
	}
	
	operation = 0;
	endCalc = true;
	displayString = result;
	smallString = '';
	
	drawNums();
	
}

function drawNums(){
	small.innerHTML = smallString;
	display.innerHTML = displayString;	
}











