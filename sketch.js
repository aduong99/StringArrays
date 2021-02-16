/***********************************************************************************
	String Arrays
	by An Duong

	Show basic string arrays functionality.

	Displays the first 3 verses of Maya Angelou's "Still I Rise" poem.
***********************************************************************************/

var strings = [];
var midX;
var startY;
var lineHeight = 24;

// Setup code goes here
function setup() {
	createCanvas(windowWidth, windowHeight);

	midX = width/2;
	startY = 60;

	textAlign(CENTER);
	textSize(24);

	loadStringArray();
 }


// Draw code goes here
function draw() {
	background(0);

	fill(255);
	for ( let i = 0; i < strings.length; i++ ){
		text( strings[i], midX, startY + (i * lineHeight) );
	}
}

function loadStringArray(){
	strings[0] = "You may write me down in history";
	strings[1] = "With your bitter, twisted lies,";
	strings[2] = "You may trod me in the very dirtBut still, like dust, I'll rise.";
	strings[3] = "But still, like dust, I'll rise.";
	strings[4] = "Does my sassiness upset you?";
	strings[5] = "Why are you beset with gloom?";
	strings[6] = "’Cause I walk like I've got oil wells";
	strings[7] = "Pumping in my living room.";
	strings[8] = "Just like moons and like suns,";
	strings[9] = "With the certainty of tides,";
	strings[10] = "Just like hopes springing high,";
	strings[11] = "Still I'll rise.";

}