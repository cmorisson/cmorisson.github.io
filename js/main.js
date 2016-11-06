// alert($);
//JS alert box. Make sure everything is loading in. Popup alert that warns if everything is working and files communicating between each other.
//We can get rid of it.

//Dollar is the way JQ gives itself.
// $ is Hey JQuery!


//should be the top thing to do?:



function interrogate() {


var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is your last name?');
var fullName = firstName + ' ' + lastName;
console.log(fullName);



function ageQuestion(message) {


		var age = prompt(message);
		age = parseInt(age);


		if (isNaN(age)) {
			ageQuestion ('How old are you? Use only Hindu–Arabic numeral system, you idiot.');
			return false;

		}


		//return false says do not run the next code bit if the user doesn't put correct input


		if (age>= 18) {
			console.log('User is an adult');
		} else if (age >= 13) {

			console.log('User is a teenager');

		} else {
			console.log('User is a child');
		}

		}

//we need to introduce the function before we try to use it.

ageQuestion('How old are you?'); 






var firstName = prompt ('What is your first name?')
var lastName = prompt ('What is your last name?')

if (firstName === "General" && lastName !== "Assembly") {

	console.log ("Hello General!")

} else {
	console.log ("No greeting for you.")
}

//LOWER CASE "firstName.toLowerCase"




var faveColour = prompt ('What is your favourite colour?');
faveColour = faveColour.toLowerCase().trim();
if (faveColour === 'red' ||
	faveColour === 'green' ||
	faveColour === 'blue' ||
	faveColour === 'yellow') {
	$('h1').css('color', faveColour);
	}


}






//When the page loads. we are telling the browser to wait until the page is loaded.
$(function() {

	$('img').on('click', interrogate);



	//When the user clicks a h3 (Hey JQ, go into the DOM and find the h3 elements. Listen out for user clicking on h3)
	$('h3').on('click', function() {


	$(this).next().slideToggle(4000);
	//next: this referes to the actual element the user as clicked on, so get the next element after that. Find me the next one.
	//we use HIDE, TOGGLE, SLIDE. $(this).next().toggle();
	//Toggle the next element (we had hide before, instead of toggle. We can aso use SLIDE and have the animation for free)
	//CSS we can say s or ms but JQuery is by default ms - miliseconds)


	//if it's not working, go the CONSOLE on Chrome.

	})

	
//Now to make it show, we use code that someone already wrote.





})