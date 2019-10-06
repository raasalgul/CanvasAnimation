//Setting canvas to full width in Java script, Because in HTML and CSS we cannot cover full width.
var canvas=document.querySelector('canvas')
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var context=canvas.getContext('2d');
context.fillStyle="yellow";
context.fillRect(100,100,100,100);
context.fillRect(200,200,100,100);
context.fillRect(300,300,100,100);
context.fillRect(400,400,100,100);

context.fillRect(800,100,100,100);
context.fillRect(700,200,100,100);
context.fillRect(600,300,100,100);
context.fillRect(500,400,100,100);

context.beginPath();
context.moveTo(150,350);
context.lineTo(450,550);
context.lineTo(550,650);
context.stroke();

for(var i=0;i<600;i++)
{
var x=Math.random() * window.innerWidth;
var y=Math.random() * window.innerHeight;
context.beginPath();
context.arc(x,y,35,0,Math.PI*2,false);
context.strokeStyle="blue";
context.stroke();
}