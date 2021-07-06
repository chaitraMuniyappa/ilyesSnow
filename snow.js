class Snow {
    constructor(x,y,width,height){
    var options = {
       'restitution' : .8,
       'friction':1,
       'density':1,
       'isStatic': false
    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("images/snow1_flake.png");
        this.image2 = loadImage("images/snow2_flake.png");
        this.image3 = loadImage("images/snow3_flake.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        var rand = Math.round(random(1,3));
        if(rand === 1){
            image(this.image1,0,0,this.width, this.height);
        }else if(rand ===2){
            image(this.image2,0,0,this.width, this.height);
        }else{
            image(this.image3,0,0,this.width, this.height);
        }
        pop();
      }
}
