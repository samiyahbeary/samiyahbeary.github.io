var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var img1, img2, img3, img4, img5, img6;
var game = "starts";

function preload(){
  img1 = loadImage('https://samiyahbeary.github.io/player.png');
  img2 = loadImage('https://samiyahbeary.github.io/green.jpg');
  img3 = loadImage('https://samiyahbeary.github.io/red.png');
  img4 = loadImage('https://samiyahbeary.github.io/pink.png');
  img5 = loadImage('https://samiyahbeary.github.io/home.jpg');
  img6 = loadImage('https://samiyahbeary.github.io/gameover.png'); 
}

function setup() {
createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
  }
function draw() {
 
  if(game == "starts"){
  background(img5);
  levelZero();
  }
  
  if(game == "L1"){
  background(img2);
  levelOne();
  }
  
  if(game == "L2"){
  background(img3);
  levelTwo();
  }
  
  if(game == "L3"){
  background(img4);
  levelThree();
  }
  if(game == "L4"){
  background(img4);
  levelThree();
  }
  if(game == "L5"){
  background(img4);
  levelThree();
  }
  
  if(score>= 50){
  background(img6);
  game = "Refresh the page to play again.";
  }
  
  text(("Score: " + score), width/2, 40);
  
  
} // end of draw

function levelZero(){
 text("Begin", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width - 5);
    bally = random(height - 5);
    score = score + 1;
  }
  
  if(score>= 1){
    game = "L1";
    background(img2);
  }
  
  image(img1, ballx, bally, ballSize, ballSize);
  line(ballx + 24 , bally + 20 , mouseX, mouseY);
  }

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx= random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  
  if(score>= 10){
    game = "L2";
    background(img3);
  }
  image(img1, ballx, bally, ballSize, ballSize);
  line(ballx + 24 , bally + 20 , mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx= random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  line(ballx + 24 , bally + 20 , mouseX, mouseY);
  image(img1, ballx, bally, ballSize, ballSize);
    
    if(score>= 20){
      game = "L3"
    }
} //end level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx= random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  line(ballx + 24 , bally + 20 , mouseX, mouseY);
  image(img1, ballx, bally, ballSize, ballSize);
    
    if(score>= 30){
      game = "L4"
    }
}

function levelFour(){
  text("level 4", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx= random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  line(ballx + 24 , bally + 20 , mouseX, mouseY);
  image(img1, ballx, bally, ballSize, ballSize);
    
    if(score>= 40){
      game = "L5"
    }
}

function levelFive(){
  text("level 4", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx= random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  line(ballx + 24 , bally + 20 , mouseX, mouseY);
  image(img1, ballx, bally, ballSize, ballSize);
    
   if(score>= 50){
    game = "Refresh the page to play again.";
    background(img6);
  }
}
