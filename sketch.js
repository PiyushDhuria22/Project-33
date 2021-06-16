  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  
var ground;
var particle;


var plinkos = [];
var divisions=[];
var gameState='play';

var divisionHeight=300;
var score =0;
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(width/2,height,width,20);
 // particle=new Particle(350,350,10);



   for (var k = 0; k <=width; k = k + 80) {
    divisions.push( new Division (k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
text("Score : "+score,20,30);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(particle!=null){
particle.display();
if(particle.body.position.y>760)
{
if(particle.body.position.x<300)
{
  score=score=500;
  particle=null;
  if(count>=5)
  gameState='end';
}
else if(particle.body.position.x>301 && particle.body.position.x<600){
  score=score+100;
  particle=null;
  if(count>=5)
  gameState='end';
}
else if(particle.body.position.x>601&& particle.body.position.x<900)
{
score=score+200;
particle=null;
if(count>=5)
gameState='end';
}
}

  }
  
   for (var i = 0; i < divisions.length; i++) {
     
     divisions[i].display();
     
   }
 //  if(frameCount%60===0){
  //   particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
 //  }
 
 /* for (var j = 0; j < particle.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
*/

   fill("yellow");
  
  rect(400,height-divisionHeight-50,800,5);
  fill(255);
   for (var k = 0; k <=width; k = k + 80) {
     if(k<=300){
   text("500",k+20,height-divisionHeight+20);
     }
   else if(k>500){
      text("200",k+20,height-divisionHeight+20);
        }
        else{
          text("100",k+20,height-divisionHeight+20);
        }
   }
   if(gameState=='end'){
    textSize(40);
    fill(255,0,0);
    text("GAME OVER",300,250);
   }



   //score.display();
}
function mousePressed(){
  if(gameState!=='end'){
    count++;
    particle=new Particle(mouseX,10,10,5);
  }
}