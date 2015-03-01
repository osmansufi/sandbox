// JavaScript comments use the same syntax as C++ comments

var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Osmans Sandbox';

var myParagraph = document.querySelector('p');
myParagraph.innerHTML = 'No man is an Iland, intire of it selfe; every man is a peece of the Continent, a part of the maine; if a Clod bee washed away by the Sea, Europe is the lesse, as well as if a Promontorie were, as well as if a Mannor of thy friends or of thine owne were; any mans death diminishes me, because I am involved in Mankinde; And therefore never send to know for whom the bell tolls; It tolls for thee.';

var manIsIsland = true;

if(manIsIsland === true)
{
	alert("No, that is not correct. Man is a social species, and every individual is an aggregate of social relations, some part of human culture expressed in the form of a person. And so no man is an Iland...");
}
else
{
	alert("That is true, and so, never send to know for whom the bell tolls; It tolls for thee...");
}

document.querySelector('html').onclick = function()
{
	alert("Aren't these pop-ups irritating? I wonder what douche thought it would be a good idea to launch a pop-up every time someone clicks anywhere on the page.");
}