
var SPEED = 500;
var interval;
var frames = ["Purtrex", "Purtre", "Purtr", "Purt", "Pur", "Pu", "P", "P", "Pu", "Pur", "Purt", "Purtr", "Purtre"];
document.title = frames[0];
var currentFrame = 0;
var on = false;
function start(){
    setInterval(function () {
        document.title = frames[currentFrame];
        currentFrame += 1;
        if (currentFrame == frames.length) {currentFrame = 0;}
    }, SPEED);
}