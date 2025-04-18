// const person ={

//     getFullName:function(village,dist){
//         console.log(this.firstName + " " + this.lastName + " , " + village + "," +dist)
//     }
// }


function getFullName(village,dist){
    console.log(this.firstName + " " + this.lastName + " , " + village + "," +dist)
}

// person.getFullName();

const person2 = {
    firstName: "dilawar",
    lastName: "farid",
}

getFullName.call(person2,"jhunka","msd");