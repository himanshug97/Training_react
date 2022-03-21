//Sorting Algo 

//Bubble sort

function bubblesort(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr;
}
console.log(bubblesort([5,3,8,2]))

//Insertion sort
function insertionsort(arr1){
    for(i=0;i<arr1.length;i++){
        for(j=i-1;j>-1;j--){
            if(arr1[j+1]<arr1[j]){
                [arr1[j+1],arr1[j]]=[arr1[j],arr1[j+1]];
            }
        }

    }
    return arr1;
}
console.log(insertionsort([7,12,3,4,1]))

//Selection Sort
function selectionsort(arr2){
    let min;
    for(let i=0;i<arr2.length;i++){
        min=i;
        for(let j=i+1;j<arr2.length;j++){

            if(arr2[j]<arr2[min]){
                min=j;
            }
        }
        if(min !==i){
            [arr2[i],arr2[min]]=[arr2[min],arr2[i]];
        }
    }
    return arr2;
}
console.log(selectionsort([29,72,98,13,87]))


//Quick Sort

function quicksort(arr3){
    if(arr3.length<=1){
        return arr3;    
    }else{
        var left=[];
        var right = [];
        var newArray = [];
        var pivot = arr3.pop();
        var length = arr3.length;
        
         for(var i=0;i<length;i++){
             if(arr3[i]<=pivot){
                 left.push(arr3[i]);
             }else{
                 right.push(arr3[i]);
             }
         }
         return newArray.concat(quicksort(left),pivot,quicksort(right));
    }
}

var myArray = [3,0,2,5,-1,4,1];
console.log(quicksort(myArray));


//Merge sort
function mergesort(left_part,right_part){

    var i=0;
    var j=0;
    var results = [];
    while(i<left_part.length || j<right_part.length){
        if(i===left_part.length){
            results.push(right_part[j]);
            j++;
        }
        else if(j===right_part.length || left_part[i]<=right_part[j]){
            results.push(left_part[i]);
            i++;
           }else{
               results.push(right_part[j]);
               j++;
           }
    }
    return results;
}
console.log(mergesort([1,3,4],[3,7,9]))