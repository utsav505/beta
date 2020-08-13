class Chain {

    constructor (bodyA,pointB){
        options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 1,
            stiffness = 0.05
        }

        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);

        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }

};