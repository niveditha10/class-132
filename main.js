img="";
status="";
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.position(320,100);
detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="staus:detecting objects";
}

function modelLoaded(){
    console.log("cocossd is loaded");
    status=true;
    detector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
}
}

function draw(){
image(img,0,0,640,420);

fill(255,0,0);
text("dog",25,60);
noFill();
stroke(255,0,0);
rect(20,30,450,350);
fill(255,0,0);
text("cat",320,120);
noFill();
stroke(255,0,0);
rect(300,90,270,320);
}