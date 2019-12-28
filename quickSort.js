var qLines = []


function setup(){
    qSortCanvas = createCanvas(1000, 800);
    qSortCanvas.parent("qCanvas");

    for (var i = 0; i<width; i++){
        qLines[i] = random(0, height);
    }
    console.log(qLines);
}

function draw(){
    background(0);

    for (var i = 0; i<qLines.length; i++){
        if (i%2==0){
            stroke(155);
            strokeWeight(5);
            line(i, height, i, height-qLines[i]);
        }else{
            stroke(55);
            strokeWeight(5);
            line(i, height, i, height-qLines[i]);
        }
    }
    qLines = quickSort(qLines);


}

function controlRecursion(arr){


    return 
}

function quickSort(arr){

    if (arr.length<2){
        return arr;
    }

    var small = [];
    var newArr = [];
    var big = [];
    //var pivot = arr[random(0, arr.length)-1];
    var pivot = arr.pop();  
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<=pivot){
            small.push(arr[i]);
        }else if (arr[i]>pivot){
            big.push(arr[i]);
        }
    }

    return newArr.concat(quickSort(big), pivot ,quickSort(small));  

    
}
/**
 * def quickSort(l):
    from random import randint
    if len(l)<2:
        return l

    small,equal,big = [],[],[]
    pivot = l[randint(0,len(l)-1)]

    for i in l:
        if i<pivot: small.append(i)
        elif i==pivot: equal.append(i)
        elif i>pivot:   big.append(i)
    
    return quickSort(small)+quickSort(equal)+quickSort(big)
 * 
 */