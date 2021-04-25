class rope {
    constructor(bodyA, bodyB, xOffSet, yOffSet){
        var options = {
            bodyA:bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10

        }
        this.xOffSet=xOffSet;
        this.yOffSet=yOffSet;


        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }
   display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position

       line(pointA.x+this.xOffSet, pointA.y+this.yOffSet, pointB.x, pointB.y);

   } 
}