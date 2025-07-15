
const users = [{firstName: "dailwar",age:10},{firstName: "hossain",age:61},{firstName: "farid",age:50},{firstName: "md",age:30}]

// const age = users.map(function(users){
// return users.age + 10;
// })

const name = users.reduce(function(acc,curr){
    if( curr.age < 50){
        acc.push(curr.firstName);
    }
    return  acc;
},[])

console.log(name);

