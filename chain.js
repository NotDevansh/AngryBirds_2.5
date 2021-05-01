class Chain
{
  constructor(A,B){
     var options = { 
         bodyA: A,
         bodyB: B,
         length: 10,
         stiffness: 0.04

     }
      this.chain = Constraint.create(options);
      World.add(world,this.chain);


  }
  display()
  {
    var ptA = this.chain.bodyA.position;
    var ptB = this.chain.bodyB.position;

    line(ptA.x,ptA.y,ptB.x,ptB.y);
  }
}
