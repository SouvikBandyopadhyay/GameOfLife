check=function(boxes1){
    for(let i=0;i<boxes1.length;i++){
        let tl=0;
        let tt=0;
        let tr=0;
        let l=0;
        let r=0;
        let ll=0;
        let lm=0;
        let lr=0;
        
        for(let j=0;j<boxes1[i].length;j++){
            try{
                tl=boxes1[i-1][j-1].val;
            }
            catch{
                tl=0;
            }
            try{
                tt=boxes1[i-1][j].val;
            }
            catch{
                tt=0;
            }
            try{
                tr=boxes1[i-1][j+1].val
            }
            catch{
                tr=0;
            }
            try{
                l=boxes1[i][j-1].val;
            }
            catch{
                l=0;
            }
            try{
                r=boxes1[i][j+1].val;
            }
            catch{
                r=0;
            }
            try{
                ll=boxes1[i+1][j-1].val;
            }
            catch{
                ll=0;
            }
            try{
                lm=boxes1[i+1][j].val;
            }
            catch{
                lm=0;
            }try{
                lr=boxes1[i+1][j+1].val;
            }
            catch{
                lr=0;
            }
            let count=tl+tt+tr+l+r+ll+lm+lr
            if(count<2){ //underpop
                boxes1[i][j].val=0;
            }
            else if(count>3){ //overpop
                boxes1[i][j].val=0;
            }
            else if(count==3){
                boxes1[i][j].val=1;
            }
            boxes1[i][j].count=count;
        }
      }
 return boxes1;
}

function mouseDragged(){

    let x=int(mouseX/w);
    let y=int(mouseY/w);
    try{
      boxes[y][x].val=1;
      boxes[y+1][x+1].val=1;
      boxes[y+1][x].val=1;
      boxes[y][x+1].val=1;
    }
    catch{
      console.log(x+" "+y);
    }
  
  }