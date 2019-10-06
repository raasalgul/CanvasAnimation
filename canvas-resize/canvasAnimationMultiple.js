//Setting canvas to full width in Java script, Because in HTML and CSS we cannot cover full width.
var canvas=document.querySelector('canvas')
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var context=canvas.getContext('2d');
var mouse={x:undefined,y:undefined};

window.addEventListener("mousemove",function(event){
mouse.x=event.x;
mouse.y=event.y;
})
function Circle(x,y,dx,dy,radius,color)
{
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=color;
this.create = function () {
    context.beginPath();
context.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
context.fillStyle=this.color;
context.fill();
}
this.update = function() {
    this.x+=this.dx;
    this.y+=this.dy;
    if(this.x+this.radius*2>=window.innerWidth || this.x-this.radius<=0) 
    {
    this.dx=-this.dx;
    
    }
    if(this.y+this.radius*2>=window.innerHeight|| this.y-this.radius<=0)
    {
        this.dy=-this.dy;
    }
    // if(mouse.x-this.x<50 && this.x+radius*2<=window.innerWidth)
    // {
    //     this.x+=5;
    // }
    if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50)
    {
        if(this.radius<35)
        this.radius+=1;
    }
    else
    {
        if(this.radius>radius)
        this.radius-=1;
    }
    this.create();
}
}
var circleArray=[];
for(var i=0;i<800;i++)
{
var radius=Math.random()*30+2;
var x=Math.random()*(innerWidth-radius*3)+radius;
var y=Math.random()*(innerHeight-radius*3)+radius;
var dx=5*(Math.random()-0.5);
var dy=5*(Math.random()-0.5);
var color="#";
for(var hex=0;hex<6;hex++)
{
var raondomizer=Math.round(Math.random()*1);
var induvidalraondomizer;
if(raondomizer===0)
{
raondomizer=Math.round(Math.random()*5);
induvidalraondomizer=String.fromCharCode(97+raondomizer);
color=color+''+induvidalraondomizer;
}
else{
    raondomizer=Math.round(Math.random()*9);
    induvidalraondomizer=raondomizer;
    color=color+''+induvidalraondomizer;
}
}
console.log(color);
var circle=new Circle(x,y,dx,dy,radius,color);
circleArray.push(circle);
}
function animation(){
requestAnimationFrame(animation);
context.clearRect(0,0,window.innerWidth,window.innerHeight);
circleArray.map(circle=>{circle.update()})
}
animation();
