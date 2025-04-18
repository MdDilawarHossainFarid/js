// const person = {
//     fullName:function(city,country){
//         console.log(this.fname + " " + this.lname + "," + city + "," + country)
//     }
// }

function fullName(city,country){
        console.log(this.fname + " " + this.lname + "," + city + "," + country)
}

const person2 = {
    fname:"farid dilawar",
    lname:"hossain"
}

const name = fullName.bind(person2,"Beldanga","India")

name();