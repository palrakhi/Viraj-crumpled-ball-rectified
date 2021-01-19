class ball{
    constructor(x, y, radius) {
        var options = {
       restitution:'0.3',
       isStatic:false,
       friction: 0.5,
       density:1.2

        }
        this.body = Bodies.circle(x, y,radius, options);
       this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        push();
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}