var lines = [];
var sSortCanvas;
var n;
var j;
var minEleIndex;
var selectionButton;
var selectionLoop;

function setup(){
    sSortCanvas = createCanvas(1000, 800);
    sSortCanvas.parent("sCanvas");
    for (var i = 0; i<width; i++){
        lines[i] = random(0, height);
    }
    n = 0;
    j = 0;
    minEleIndex = 0;
    selectionLoop = false;

    console.log(selectionLoop);
    selectionButton = document.getElementById("selection");
    selectionButton.onclick = function proceedLoop(){
        selectionLoop = true
        console.log(selectionLoop);
    }

}

function draw(){
    background(0);
    if (selectionLoop){
        
    for (var i = 0; i<lines.length; i++){
        if (i%2==0){
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
        var minEleIndex = n; 
        
        for (var j = n; j < lines.length; j++){
            if (lines[minEleIndex]>lines[j]){
                minEleIndex = j;
            }
        }

        var temp = lines[n];
        lines[n] = lines[minEleIndex];
        lines[minEleIndex] = temp;
        n+=1;
    }else{
        noLoop();
    }
    }
    


}

function slectionSort(){
    for (var i = 0; i < lines.length; i++){
        var minEleIndex = i; 
        for (var j = i; j < lines.length; j++){
            if (lines[minEleIndex]>lines[j]){
                minEleIndex = j;
            }
        }
        //swap
        var temp = lines[i];
        lines[i] = lines[minEleIndex];
        lines[minEleIndex] = temp;
    }
}