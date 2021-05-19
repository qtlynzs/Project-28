class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
    
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
        this.bodyA = bodyA
        this.pointB = pointB
    }
       display(){
        if(this.launcher.bodyA){
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)

        }
        


       }
       fly(){
       this.launcher.bodyA = null;           




       }
}