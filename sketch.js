var w=15;
var boxes=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<int(windowHeight/w);i++){
    var boxes1=[];
    for(let j=0;j<int(windowWidth/w);j++){
      boxes1.push(new Box(j*w,i*w,random(-25,2))); 
    }
    boxes.push(boxes1);
  }
  noStroke();

  
}

function draw() {
  background(220);
  for(let i=0;i<boxes.length;i++){
    for(let j=0;j<boxes[i].length;j++){
      boxes[i][j].display();
    }
  }
  boxes=check([...boxes]);
  fill(20);
  textSize(width>750?int(width/35):int(width/15));
  text("Click and Drag mouse",width/10,height/2);
}

