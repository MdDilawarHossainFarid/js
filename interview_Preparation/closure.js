
function createCounter(){
    let count = 0;
    return function(){
        count++
       console.log(count);
    }
}

const counter1 = createCounter();
let myinterval = setInterval(counter1,1000);

setTimeout(()=>{
    clearInterval(myinterval)
},7000)