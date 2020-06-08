class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
       
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)

            if(pointA.x<215){ 
            line(pointA.x - 20, pointA.y, pointB.x - 18, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 10, pointB.y);

            }
            else{
                line(pointA.x + 20, pointA.y, pointB.x - 18, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x + 10, pointB.y);
                
            }
            }
        
        
    }
    
}