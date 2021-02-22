//based on example from class

function setup() {



	d = select('.div-block');
	d.position(0, 0);

	gui = new Gui();


	//set up individual panel
	let gui_setup = new dat.GUI();
	gui_setup.add(gui, "points", 0, 100);
	gui_setup.add(gui, "stroke", 0, 15);
	gui_setup.add(gui, "radius1", 50, 300);
	gui_setup.add(gui, "radius2", 50, 300);
	gui_setup.add(gui, "rotate", 0, 10);

	gui_setup.add(gui, "r", 0, 255);
	gui_setup.add(gui, "g", 0, 255);
	gui_setup.add(gui, "b", 50, 255);
	gui_setup.add(gui, "alpha", 0, 255);


	gui_setup.addColor(gui, "color");



	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(gui.color);
	strokeWeight(gui.stroke);
	fill(gui.r, gui.g, gui.b, gui.alpha);

	stroke('#eddbdf');
	
	translate(width / 2, height / 2);
	rotate(PI / gui.rotate);
	star(0, 0, gui.radius1, gui.radius2, gui.points);



}


function Gui() {
	this.points = 40;
	this.rotate = 5;

	this.stroke = 9.4;
	this.radius1 = 209;
	this.radius2 = 119;
	this.color = '#d7afa3';


	this.r = 218;
	this.g = 27;
	this.b = 112;
	this.alpha = 74;

}


function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints;
	let halfAngle = angle / 2.0;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}