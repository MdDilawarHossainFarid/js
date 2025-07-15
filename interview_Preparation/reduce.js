const arr = [1,2,3,4];

function findMax(arr){
         let max = 0;
    for(let i = 0; i < arr.length; i++){
     if(arr[i] > max){
    max = arr[i];
     }
    }
    return max;
}

// console.log( findMax(arr));

const output = arr.reduce(function(max,cur){
    // acc = acc + cur;
    if(cur > max){
        max = cur;
    }
    return max ;
},10);

console.log(output);
