// Andrea Gemmani 22/04/2020
// GitHub Gimmmy97	https://github.com/Gimmmy97






var m1, puls, scriv;
var refreshFramesCount;
var flagUpdateDraw;

var testoStronzo = 1;

function setup() {

	createCanvas(560, 500);

	refreshFramesCount = 5;

	m1 = new matrixToPNG(48,48,10,10,10);
	scriv = new Scrivitore();
	puls = new Pulsantiera();

	flagUpdateDraw = 1;
	background(50);

}

draw = function() {

	// disegno solo ogni refreshFramesCount frames
	// if (! ((frameCount + 10) % refreshFramesCount) ) {
	if(flagUpdateDraw) {

		background(150);

		m1.mostra();

		flagUpdateDraw = 0;

	}

	if (! ((frameCount + 10) % refreshFramesCount) ) {
		background(150);
		m1.mostra();
		flagUpdateDraw = 0;
		
		scriv.mostra();
	}


}


function touchStarted() {
	scriv.controllaClick();
}


