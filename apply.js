// const person = {
//     fullName:function(city,country){
//         console.log(this.fname + " " + this.lname + "," + city + "," + country)
//     }
// }

function fullName(city,country){
        console.log(this.fname + " " + this.lname + "," + city + "," + country)
}

const person2 = {
    fname:"farid",
    lname:"hossain"
}

 fullName.apply(person2,["Beldanga","India"])

