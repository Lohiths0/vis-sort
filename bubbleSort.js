var lines = [];
var n = 0;
var j = 0;
var myCanvas;

function setup(){
    myCanvas = createCanvas(300, 200);
    myCanvas.parent("bSort-canvas");
    for (var i = 0; i <width; i++){
        lines[i] = random(0, height);
    }
}

function draw(){
    background(0);

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
    }
}


