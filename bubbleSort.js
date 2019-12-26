var lines = [];
var n = 0;
var j = 0;
var bSortCanvas;
var bubbleButton;
var bubbleLoop;

function setup(){
    bSortCanvas = createCanvas(1000, 800);
    bSortCanvas.parent("bCanvas");
    for (var i = 0; i <width; i++){
        lines[i] = random(0, height);
    }
    bubbleLoop = false;
    bubbleButton = document.getElementById("bubble");
    bubbleButton.onclick = function proceedLoop(){
        bubbleLoop = true
    }

    console.log("Bubble running");
    
    
    
}

function draw(){
    background(0);
    if (bubbleLoop){
        for (var i = 0; i<lines.length; i++){   
            if(i%2==0){
                stroke(155);
                strokeWeight(5);
                line(i, height, i, height-lines[i]);
            }else{
                stroke(0);
                strokeWeight(5);
                line(i, height, i, height-lines[i]);
    
            }
        }
        if (n<lines.length){
            for (j = 0; j< lines.length; j++){
                if (lines[j]>lines[j+1]){
                    var temp = lines[j];
                    lines[j] = lines[j+1];
                    lines[j+1] = temp;
                }
            }
            n+=1;
        }else{
            noLoop();
        }
    }
    

    
    
}


