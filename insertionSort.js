function setup(){
    iSortCanvas = createCanvas(1000, 800);
    iSortCanvas.parent("iCanvas");

    for (var i = 0; i<width; i++){
        iLines[i] = random(0, height);
    }
    n = 0;
    j = 0;

    
}

function draw(){

    background(0);
    for (var i = 0; i<iLines.length; i++){
        if (i%2==0){
            stroke(155);
            strokeWeight(5);
            line(i, height, i, height-iLines[i]);
        }else{
            stroke(55);
            strokeWeight(5);
            line(i, height, i, height-iLines[i]);
        }
    }
    
    if (n<iLines.length){
        var curr = iLines[n];
        j = n-1;
        while (j>=0){
            if (curr<iLines[j]){
                iLines[j+1] = iLines[j];
                iLines[j] = curr;
                j-=1
            }else{
                break;
            }
        }
        n+=1;
    }else{
        console.log(iLines);
        noLoop();
    }
}

