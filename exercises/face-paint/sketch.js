var mic;
var capture;
var tracker;

function setup() {
	capture = createCapture(VIDEO);
	capture.size(windowWidth / 2, windowHeight / 2);
	capture.position(0, 0);

	var canvas = createCanvas(windowWidth / 2, windowHeight / 2);
	canvas.position(0, 0);

	noStroke();

	mic = new p5.AudioIn();
	mic.start();

	tracker = new clm.tracker();
	tracker.init(pModel);
	tracker.start(capture.elt);

}

function draw() {
	var facePos = tracker.getCurrentPosition();

	fill(random(255), 255, 255);
	var diameter = map(mic.getLevel(), 0, 0.5, 1, 75);
	var yPos = map(mic.getLevel(), 0, 0.5, height, 0);

	//get x and y position of 62nd point of the face tracker
	if (facePos) {
		ellipse(facePos[62][0], facePos[62][1], diameter, diameter);
	}
}