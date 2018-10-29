var numberOfDots = 100;
var multiplier = 2;
var circleRadius = 200;
var dotRadius = 10;
var lineWidth = 1;
var offSetX = 550;
var offSetY = 150;

var pointX = [];
var pointY = [];

$(document).ready(function() {
    $(document).on("input", "#multiplierSlide", function() {
        multiplier = $(this).val();
        draw();
    });
});

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(context);
    drawDots(context);
    drawLines(context);
       

}
/**
 * 
 * @param {canvasRenderingContext2D} context 
 */
function drawCircle(context){
    context.lineWidth = lineWidth;
    context.strokeStyle ="white";
    
    var circleCenterPointX = circleRadius + offSetX;
    var circleCenterPointY = circleRadius + offSetY;
    context.arc(circleCenterPointX, circleCenterPointY, circleRadius, 0, 2*Math.PI);
    context.stroke();
}
/**
 * 
 * @param {canvasRenderingContext2D} context 
 */
function drawDots(context) {
    var angle = 2* Math.PI / numberOfDots;
    for (var i = 0; i < numberOfDots; i++) {
        context.beginPath();
        var newAngle = angle * i;
        var x = Math.cos(newAngle) * circleRadius;
        var y = Math.sin(newAngle) * circleRadius;
        var circleCenterPointX = circleRadius + offSetX;
        var circleCenterPointY = circleRadius + offSetY;
        pointX.push(x+circleCenterPointX);
        pointY.push(y+circleCenterPointY);
        context.arc(circleCenterPointX + x,circleCenterPointY + y, 3, 0, 2*Math.PI);
        context.fill();
      
 
        // radien + radien * cos v 
       }
    
}
   
function drawLines(context) {
    context.beginPath();
    for (var i = 0; i < numberOfDots; i++) {
      /*   var drawTo = i * multiplier;
        var startX = Math.cos(newAngle) * circleRadius;
        var startY = Math.sin(newAngle) * circleRadius;
        var endX = startX * multiplier;
        var endY = startY * multiplier;
        context.moveTo(startX, startY);
 */
        var rest = i* multiplier % pointX.length;
        context.moveTo(pointX[i], pointY[i]);
        context.lineTo(pointX[rest], pointY[rest]);       
    
    }
     context.stroke();       
}
