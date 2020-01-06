

let display;

let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0;
let plus, minus, times, divide, btnC, equals;
let displayString = "0";

display = document.getElementById('display');
display.innerHTML = displayString;


// Atach same listener to all num buttons
let numBtns = document.getElementsByClassName('num');

for(let i = 0; i < numBtns.length; i++){
	numBtns[i].addEventListener('click', writeNum);
}
 
// Click handler
function writeNum(e){

	let num = e.target.textContent;
	let numString = num.toString();

	
	if(displayString === "0"){
		displayString = numString;
	} else {
		displayString += numString;
	}
	
	display.innerHTML = displayString;
}