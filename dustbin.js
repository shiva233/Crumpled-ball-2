class dustBin {

    constructor(x,y) {

        this.angle = 0;
        this.width = 20;
        this.height = 200;

        this.bodyleft = Bodies.rectangle(x+80,y,this.width,this.height,{isStatic: true});
        this.bodyright = Bodies.rectangle(x-80,y,this.width,this.height,{isStatic: true});
        this.bodybottom = Bodies.rectangle(x,y,this.width,this.height - 230,{isStatic: true});
        
        Matter.Body.setAngle(this.bodyleft,this.angle);
        Matter.Body.setAngle(this.bodyright,-1 * this.angle);
        
        
        
        this.image = loadImage("dustbingreen.png");

        

        World.add(world, this.bodyleft);
        World.add(world,this.bodyright);
        World.add(world,this.bodybottom);


    }

    display(){
        var posLeft =this.bodyleft.position;
        var posRight=this.bodyright.position;
        var posBottom=this.bodybottom.position;
        

        push();
        translate(posLeft.x, posLeft.y);
        rotate(this.angle)
        rectMode(CENTER);

        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
        push();
        translate(posRight.x, posRight.y);
        rotate(-1*this.angle)
        rectMode(CENTER);

        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
        push();
        translate(posBottom.x, posBottom.y);
        
        imageMode(CENTER);

        fill("yellow");
        image(this.image, 0, 0,200,200);
        pop();


      }
    

}