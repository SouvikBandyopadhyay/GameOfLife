class Box{
    constructor(x,y,val){
        this.x=x;
        this.y=y;
        this.val=val>=1?1:0;
        this.count=0;
    }
    display=function(){
        if(this.val==1){
            if(this.count<2){
                fill(200,20,20);
            }
            else if(this.count<3){
                fill(20,200,20);
            }
            else if(this.count<4){
                fill(20,20,200);
            }
        }
        else{
            fill(220);
        }
        rect(this.x,this.y,w,w);
    }

}