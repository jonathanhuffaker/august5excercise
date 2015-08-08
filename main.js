



//below is a function that divides by 10

function goingToDivide(num) {
	return num /10;
}


//tested that it works-commenting out doc write
var divOnMan = goingToDivide(20);
// document.write(divOnMan);


//function that mult by 5 its test commented out
function multplyBy5(num) {
	return num*5;
}
var multOnMan = multplyBy5(25);
// document.write(multOnMan);

//When the button is clicked, call a JavaScript 
//function that checks if the user has entered in a value in the input field
//below is working
function EntValInField () {
var empt = document.getElementById("firstInput").value;
if (empt == "") {
	alert("Please input a value");
	return false;
}
//I tried to comment the two lines below out and use the other else if
//statement built but was unsucessful
else {
	alert("Thanks for entering a value!");
	return true;
}
}
// ABOVE IS WORKING ^	


// If there is a value, and its numeric value is greater than 10000, 
// call a function that passes in the user-entered value as an argument, 
// and the name of the function that divides by 10.

function myOtherFunction() {

var greaterThanTenThou = document.getElementById("firstInput").value;
if (greaterThanTenThou >10000) {
	return document.write(goingToDivide(greaterThanTenThou));
	
	
}
}

// 8. If there is a value, and its numeric value is less than 10000, 
// call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5. 

function myOtherOtherFunction() {
	var lessThanTenThou = document.getElementById("firstInput").value;
	if(lessThanTenThou <10001) {
	return document.write(multplyBy5(lessThanTenThou));
}
}







