var lines = []
var mergeButton;

function setup(){

    mCanvas = createCanvas(1000, 800);
    mCanvas.parent("mCanvas");
    for (var i = 0; i <width; i++){
        lines[i] = random(0, height);
    }
    mergeButton = document.getElementById("merge");
    mergeButton.onclick = function proceedLoop(){
        console.log("merge button clicked");
    }
    lines = mergeSort(lines);



}
function draw(){
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


}

function mergeSort(arr){

    if (arr.length<2){
        return arr;
    }
    var midpoint = Math.trunc(arr.length/2);
    var firstHalf = mergeSort(arr.slice(0,midpoint));
    var secondHalf = mergeSort(arr.slice(midpoint, arr.length));
    return mergeSortedArrays(firstHalf, secondHalf);
}

function mergeSortedArrays(arr1, arr2){
    var i = 0;
    var j = 0;
    var mergedArr = [];
    while (i<arr1.length && j<arr2.length){
        if (arr1[i]<arr2[j]){
            mergedArr.push(arr1[i]);
            i++;
        }else if (arr1[i]>arr2[j]){
            mergedArr.push(arr2[j]);
            j++;
        }else{
            mergedArr.push(arr2[j]);
            j++;
            i++;
        }
    }

    while (i<arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j<arr2.length){
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}
