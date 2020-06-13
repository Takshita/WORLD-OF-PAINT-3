var drawing = [];
var reset;
function setup (){
    createCanvas(400,400); 
    reset = createSprite(200,200);

}
 


function draw (){
    background(0);
  reset.display();
    if (mouseIsPressed) {
var point = {
x: mouseX,
y: mouseY
}
     drawing .push(point);
    }
beginShape();
stroke(255);
strokeWeight(4);
noFill();
for (var i = 0;i < drawing.length; i++){
    vertex (drawing [i].x,drawing [i].y)
}

endShape();
}

