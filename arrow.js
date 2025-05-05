//THIS IS FOR reffer CURRENT CONTEXT

/*
const user ={
    username :"ABC",
    price:999,
   
    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()

// Change the current context i.e values
user.username="sam"
user.welcomeMessage()


output of using this keyword inside welcomeMsessage: function
++++++++OUTPUT++++++++++
ABC,Welcome to website
{
  username: 'ABC',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam,Welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}




*/



// const user ={
//     username :"ABC",
//     price:999,
   
//     welcomeMessage: function(){
//         console.log(`${this.username},Welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()

// Change the current context i.e values
// user.username="sam"
// user.welcomeMessage()

// console.log(this); // output {} 

// +++++++++++++FOR INTERVIEW++++++++++
/*
We print the 
console.log(this);

inside brower we get window object beacuese widow is globally accessible anywhere
*/

// +++++++++++++=================================




// function chai(){

//     let username="XYA"
//     console.log(this.username);//undefined
// }

// chai()


// const chai =()=>{
//     let username="abc"
//     console.log(this);
// }
// chai() //{}


// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));//7

///Implicit return
// const addTWO =(num1,num2)=>num1+num2
// console.log(addTWO(3,4));


const addTWO=(num1,num2)=>(num1+num2)


const addFour=(x,y)=>({username:"PZY"})
// console.log(addFour(4,5));
console.log(addFour());
console.log(addTWO(3,4));

let pen={
  name:"ball",
  price:288,


}
pen.name="gel"
console.log(pen["name"]);
console.log(Object.keys(pen),"=",Object.values(pen),Object.assign(pen),Object.entries(pen));
