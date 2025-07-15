
let data = new Promise((resolve,reject)=>{
console.log("data is loading.....");
setTimeout(() => {
    let fetchData = "XYZ";
    if(true){
        resolve("XYZ")
    }else {
        reject("failed to fetch data")
    }
},3000)
})

 data.then((data)=>{})
