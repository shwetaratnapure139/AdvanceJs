// Restoperator in js

function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(200,400,500));


function square(val1,val2,...num2){
    return num2
}

console.log(square(100,400,800,900));

let user={
    username:"Shweta",
    price:999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

if(true){
    let a=30;
    const b=20;
    var c=40;
}
// console.log(a);
// console.log(b);
console.log(c);