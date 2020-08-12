const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");


// GAME VARS AND CONSTS
let frames = 0;
const DEGREE = Math.PI/180;


// LOAD BACKGROUND IMAGE 
const city = new Image();
city.src = "images/background.png";


// BACKGROUND
const bg = 
{
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvs.height - 226,
    draw : function(){
        ctx.drawImage(city, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(city, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
}







function update() 
{
    
}









// DRAW
function draw(){
    
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    
    bg.draw();
  
}




// LOOP
function loop(){
    update();
    draw();
   frames++;
    
   requestAnimationFrame(loop);
}
loop();