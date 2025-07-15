const person = {
    name:"Dilwar",
    greet:() =>{
        console.log(`Hello, ${this.name}`)
    }
};

person.greet();