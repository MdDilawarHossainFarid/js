// copy array

const arr = [1,2,3];

const arr1 = [...arr];
// console.log(arr1);


// concat array

const arr2 = [11,22,33,44]
const arr3 = [111,222,333,444]

const arr4 = [...arr1,...arr2,...arr3]

console.log(arr4);