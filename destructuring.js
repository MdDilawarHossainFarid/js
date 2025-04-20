array
const arr = [1,2,3,4]

const [a,b,c] = arr;
console.log(a)
console.log(b)
console.log(c)

const [d,,e] = arr;
console.log(d)
console.log(e)

Object

const person = {
    name:"farid",
    city:"beldanga"
}


const {name:aa,   city:bb} = person;
const {name, city} = person;
console.log(aa);
console.log(bb);

Function

function sum([a,b]){
    console.log(a+b);
}

sum([1,2]);


function  greet({name}){
    console.log(`Good moring ${name}`)
}

greet({name:"Farid"})


