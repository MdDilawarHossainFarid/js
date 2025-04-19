// Function are pass by reference
function higher(HOF){
    let reference = function HOF(a,b){
        return a * b;
    }
   
    return  reference;
}



const returnValue = higher(function sum(a,b){
    return a + b;
})

console.log(returnValue(2,3))

// array

let arr = [1,2,3];

function CallByReference(a){
// a = [...a,12,22,33];
a.push(6);
console.log(a);
}


CallByReference(arr)
console.log(arr);

const person = {
    name: "farid",
    ps:"Beldanga"
}


function CallByReferenceObject(obj){
console.log(obj);
obj.name = "Dilawar";
obj = {
    name:"max"
}
console.log(obj);
}

CallByReferenceObject(person)
console.log(person);


