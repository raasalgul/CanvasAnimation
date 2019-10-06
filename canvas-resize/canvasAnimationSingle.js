//Setting canvas to full width in Java script, Because in HTML and CSS we cannot cover full width.
var canvas=document.querySelector('canvas')
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var context=canvas.getContext('2d');

var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=5*(Math.random()-0.5);
var dy=5*(Math.random()-0.5);
var radius=30;
function animation(){
requestAnimationFrame(animation);
context.clearRect(0,0,window.innerWidth,window.innerHeight);
context.beginPath();
context.arc(x,y,radius,0,2*Math.PI,false);
context.fillStyle="blue";
context.fill();
x+=dx;
y+=dy;
if(x+radius*2>=window.innerWidth || x-radius<=0) 
{
dx=-dx;

}
if(y+radius*2>=window.innerHeight|| y-radius<=0)
{
    dy=-dy;
}
}
animation();