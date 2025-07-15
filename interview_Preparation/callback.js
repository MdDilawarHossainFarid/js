

function display(sum){
    console.log(sum)
}


function sum(a,b,cb){
let sum = a + b;
cb(sum)
}

sum(12,13,display);

