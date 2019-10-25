var canvas = document.getElementById("boardGameCanvas");
var ctx = canvas.getContext("2d");
var img = new Image();
var x = 0; //align to centre of the screen
var y = 0; //same as above
img.src="../images/basketball.jpg";
var speed = 5; //speed for the player to move at
canvas.style = "top:450px; left: 0px; right: 0px; bottom: 0px; margin: auto;";

var width = 30; //width of the player
var height = 30; //height of the player
const toggleSwitch =
document.querySelector('.theme-switch input[type="checkbox"]');
console.log(toggleSwitch);

window.onload = function() {
  document.getElementById("game_header").style.textAlign = "center";
  ctx.drawImage(img, 0, 0, 30,30);
  console.log("onload is called");
  document.addEventListener("keydown", update, false);
  toggleSwitch.addEventListener('change', switchTheme, false);
};
 function switchTheme(e){
   console.log("toggle is pressed.");
   if (e.target.checked) {
       document.documentElement.setAttribute("data-theme", "dark");
    }
   else {
       document.documentElement.setAttribute("data-theme", "light");
    }
 }
 function update(event)
 {
      if (event.keyCode == 38 && y!=0)
     {
         y -= speed; //going up
         console.log("up is pressed");

     }
     if (event.keyCode == 40 && y!=120)
     {
         y += speed; //going down
         console.log("down is pressed");

     }
     if (event.keyCode == 37 && x!=0)
     {
         x -= speed; //going left
         console.log("left is pressed");

     }
     if (event.keyCode == 39 && x!=270)
     {
         x += speed; //going right
         console.log("right is pressed");

     }
     render(ctx);
 }

 function render(ctx)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y,30,30);
    console.log(x+" "+y+" "+width +" "+height);
}
