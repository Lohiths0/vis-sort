var bubble = function( p ) { // p could be any variable name
    
    var lines = [];
    var n = 0;
    var j = 0;
    var bSortCanvas;
    var bubbleButton;
    var bubbleLoop;
    p.setup = function() {
        bSortCanvas = p.createCanvas(1000, 800);
        bSortCanvas.parent("bCanvas");
        for (var i = 0; i <p.width; i++){
            lines[i] = p.random(0, p.height);
        }
        bubbleLoop = false;
        bubbleButton = document.getElementById("bubble");
        bubbleButton.onclick = function proceedLoop(){
            bubbleLoop = true
        }
    
    };
  
    p.draw = function() {
        p.background(0);
        if (bubbleLoop){
            for (var i = 0; i<lines.length; i++){   
                if(i%2==0){
                    p.stroke(155);
                    p.strokeWeight(5);
                    p.line(i, p.height, i, p.height-lines[i]);
                }else{
                    p.stroke(0);
                    p.strokeWeight(5);
                    p.line(i, p.height, i, p.height-lines[i]);
        
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
                p.noLoop();
            }
        }    
    };
  };

var bubblep5 = new p5(bubble, 'bCanvas');
  
  // Sketch Two
var selection = function( p ) { 
    var lines = [];
    var sSortCanvas;
    var n;
    var j;
    var minEleIndex;
    var selectionButton;
    var selectionLoop; 
    p.setup = function() {
        sSortCanvas = p.createCanvas(1000, 800);
        sSortCanvas.parent("sCanvas");
        for (var i = 0; i<p.width; i++){
            lines[i] = p.random(0, p.height);
        }
        n = 0;
        j = 0;
        minEleIndex = 0;
        selectionLoop = false;
    
        selectionButton = document.getElementById("selection");
        selectionButton.onclick = function proceedLoop(){
            selectionLoop = true
        }
    };
  
    p.draw = function() {
        p.background(0);
        if (selectionLoop){
            
            for (var i = 0; i<lines.length; i++){
                if (i%2==0){
                    p.stroke(155);
                    p.strokeWeight(5);
                    p.line(i, p.height, i, p.height-lines[i]);
                }else{
                    p.stroke(0);
                    p.strokeWeight(5);
                    p.line(i, p.height, i, p.height-lines[i]);
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
                p.noLoop();
            }
        }
    };
  };
  var slectionp5 = new p5(selection, 'sCanvas');


  var insertion = function( p ) {
    let iLines = []
    var iSortCanvas;
    var n;
    var j;
    var insertButton;
    var insertLoop;

    p.setup = function(){
        iSortCanvas = p.createCanvas(1000, 800);
        iSortCanvas.parent("iCanvas");

        for (var i = 0; i<p.width; i++){
            iLines[i] = p.random(0, p.height);
        }
        n = 0;
        j = 0;
        insertLoop = false;
        insertButton = document.getElementById("insertion");
        insertButton.onclick = function proceedLoop(){
            insertLoop = true
        }

    }

    p.draw = function(){
        p.background(0);
        if (insertLoop){
            for (var i = 0; i<iLines.length; i++){
                if (i%2==0){
                    p.stroke(155);
                    p.strokeWeight(5);
                    p.line(i, p.height, i, p.height-iLines[i]);
                }else{
                    p.stroke(55);
                    p.strokeWeight(5);
                    p.line(i, p.height, i, p.height-iLines[i]);
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
                p.noLoop();
            }
        }
        
    }
  }

  var insertionp5 = new p5(insertion, "iCanvas");