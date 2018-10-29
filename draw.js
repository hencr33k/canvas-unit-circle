function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    drawHead(context);
    drawEyes(context);
    drawMouth(context);
    drawNose(context);
    context.stroke();
}
    /**
     * 
     * @param {*} context 
     */

    function drawHead(context) {
    context.lineWidth="5";
    context.beginPath();
    context.arc(300, 300, 100, 0, 2*Math.PI);   
    context.fillStyle="yellow";
    context.fill(); 
    }
    
    function drawMouth(context){
    context.moveTo(370, 300);
    context.arc(300, 300, 70, 0,Math.PI, false);
    }
    
    function drawEyes(context){
    context.moveTo(250, 250);
    context.arc(250, 250, 5, 0, 2*Math.PI, true);

    context.moveTo(350, 250);
    context.arc(350, 250, 5, 0, 2*Math.PI, true);
}
    function drawNose(context){
    context.moveTo(300, 300);
    context.arc(300, 300, 10, 0, 2*Math.PI, true);
    }
}