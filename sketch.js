function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    object1 = new Ground ()
   
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    //strokeWeight(4);
    ground.display();
    slingshot.display();    
}
