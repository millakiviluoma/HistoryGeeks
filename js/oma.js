var mw = w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var mh = h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var gs1 = 0
var gs2 = 1/5
var gs3 = 2/5
var gs4 = 3/5
var gs5 = 4/5
var gs6 = 1
	
	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d"); 
theCanvas.setAttribute('width', mw);
theCanvas.setAttribute('height', mh);
canvasApp();

function canvasApp() {
	
	var message = "WOW! Amazing Rainbow!";
	
	function drawScreen() {
		//Background
		
		context.fillStyle = "#000000";
		context.fillRect(0, 0, theCanvas.width, theCanvas.height);
		
		//Text
		
		context.font = mw/1.8 + "% 'Calibri, Ariel'" 
		context.textAlign = "center";
		context.textBaseline = "middle";
		
		var metrics = context.measureText(message);
		var textWidth = metrics.width;
		var xPosition = (theCanvas.width/2);
		var yPosition = (theCanvas.height/2);
        //x1: 0, y1: 0,
 // x2: 100, y2: 0,
		
		var gradient = context.createLinearGradient( 0,0,mw,0);
		for (var i=0; i < colorStops.length; i++) {
			var tempColorStop = colorStops[i];
			var tempColor = tempColorStop.color;
			var tempStopPercent = tempColorStop.stopPercent;
			gradient.addColorStop(tempStopPercent,tempColor);
			tempStopPercent += .015;
			if (tempStopPercent > 1) {
				tempStopPercent = 0;
			}
			tempColorStop.stopPercent = tempStopPercent;;
			colorStops[i] = tempColorStop;
		}
		
		
		context.fillStyle    = gradient;
		context.fillText  ( message,  xPosition ,yPosition);	
	
	
	}
	
	function gameLoop() {
		window.setTimeout(gameLoop, 20);
		drawScreen()	
	}
	var colorStops = new Array(
	{color:"#FF0000", stopPercent:gs1},
	{color:"#FFFF00", stopPercent:gs2},
	{color:"#00FF00", stopPercent:gs3},
	{color:"#0000FF", stopPercent:gs4},
	{color:"#FF00FF", stopPercent:gs5},
	{color:"#FF0000", stopPercent:gs6});
	gameLoop();

	
}