document.getElementById("game_header").style.textAlign = "center";
var isPressed = 0;
var graphCanvas = document.getElementById("graphCanvas");
graphCanvas.style = "left: 0px; right: 0px; bottom: 0px;"+
" margin: auto; border:2px solid blue";
var exprBtn = document.getElementById("exprBtn");
var graphCtx = graphCanvas.getContext("2d");
drawFaceFunction();


 graphCanvas.addEventListener("mousedown", function(e) {
    getMousePos(graphCanvas, e);
});

function getMousePos(graphCanvas, evt)
{
    var rect = graphCanvas.getBoundingClientRect();

    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    if(intersects(x,y,graphCanvas.width/2,graphCanvas.height/2,50)){
      exprFunction();
    }

 }
 function intersects(x, y, cx, cy, r) {
     var dx = x-cx;
     var dy = y-cy;
     return dx*dx+dy*dy <= r*r;
 }

function exprFunction(){
  console.log("button pressed.");
  if(isPressed % 2 == 0){
    console.log("isPressed");
    graphCtx.clearRect(0,0, graphCanvas.width, graphCanvas.height);
    graphCtx.beginPath();
    graphCtx.arc(graphCanvas.width/2, graphCanvas.height/2,50, 0, 2 * Math.PI);
    graphCtx.fillStyle = "yellow";
    graphCtx.fill();
    graphCtx.beginPath();
    graphCtx.arc(graphCanvas.width/2, graphCanvas.height/2,2, 0, 2 * Math.PI);
    graphCtx.fillStyle = "black";
    graphCtx.fill();

    graphCtx.beginPath();
    graphCtx.arc(graphCanvas.width/2-25, graphCanvas.height/2-20, 10, 0,
      2 * Math.PI);
    graphCtx.fillStyle = "black";
    graphCtx.fill();

    graphCtx.beginPath();
    graphCtx.arc(graphCanvas.width/2+25, graphCanvas.height/2-20, 10, 0,
       2 * Math.PI);
    graphCtx.fillStyle = "black";
    graphCtx.fill();
    graphCtx.beginPath();
    graphCtx.arc(graphCanvas.width/2, graphCanvas.height/2+30, 20, 180,
       2 * Math.PI);
    graphCtx.stroke();
    exprBtn.innerHTML = "Make me happy";
    isPressed ++;
  } else{
    drawFaceFunction();
    exprBtn.innerHTML = "Make me sad";
    isPressed ++;

  }
 }

 function drawFaceFunction(){
   graphCtx.beginPath();
   graphCtx.arc(graphCanvas.width/2, graphCanvas.height/2,50, 0, 2 * Math.PI);
   graphCtx.fillStyle = "yellow";
   graphCtx.fill();
   graphCtx.beginPath();
   graphCtx.arc(graphCanvas.width/2, graphCanvas.height/2,2, 0, 2 * Math.PI);
   graphCtx.fillStyle = "black";
   graphCtx.fill();

   graphCtx.beginPath();
   graphCtx.arc(graphCanvas.width/2-25, graphCanvas.height/2-20, 10, 0,
      2 * Math.PI);
   graphCtx.fillStyle = "black";
   graphCtx.fill();

   graphCtx.beginPath();
   graphCtx.arc(graphCanvas.width/2+25, graphCanvas.height/2-20, 10, 0,
     2 * Math.PI);
   graphCtx.fillStyle = "black";
   graphCtx.fill();

   graphCtx.beginPath();
   graphCtx.arc(graphCanvas.width/2, graphCanvas.height/2+30, 15, 0, Math.PI);
   graphCtx.fillStyle = "red";
   graphCtx.fill();
 }
