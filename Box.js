class Box{
    constructor(x,y,val){
        this.x=x;
        this.y=y;
        this.val=val>=1?1:0;
    }
    display=function(){
        if(this.val==1){
            fill(20);
        }
        else{
            fill(220);
        }
        rect(this.x,this.y,w,w);
    }

}