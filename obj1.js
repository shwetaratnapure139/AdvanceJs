const mySym =Symbol("key1")

const JsUser={
    name:"Shweta",
    [mySym]:"myKey1",
    age:18,
    email:"shweta@gmail.com"
}

// console.log(typeof mySym);
JsUser.email="shwetar@gmail.com"
console.log(JsUser["email"]);

// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email="shweta13@gmail.com";
// console.log(JsUser);



// JsUser.greeting =function(){
//     console.log("Hello JS");
// }
// console.log(JsUser.greeting());


// Access the function inside object
JsUser.greetinh=function(){
    console.log(`HelloJS${this.name}`);
    
}
console.log(JsUser.greetinh());
console.log(JsUser);




// singleton 
// Object.create

// object literls
const mySym1 = Symbol("key1");
let Student ={
    name:"Java",
    
    age:21,
    location:"Jaipur",
    email:"java@gmail.com",
    lastDate:["Monday"]
}