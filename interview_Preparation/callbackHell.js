
function fetchData(cb){
    setTimeout(()=>{
        console.log("Data is Fetched");
        cb();
    },5000);
}

function processData(cb){
setTimeout(()=>{
    console.log("Data is processed");
    cb();
},4000);
}

function displayData(){
    setTimeout(() => {
        console.log("Data is display");
    },2000)
}

fetchData(function(){
    processData(function () {
        displayData();
    })
})