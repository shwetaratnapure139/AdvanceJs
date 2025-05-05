//IMMEDIETLI INVOKED FUNCTION EXPRESSION
// WE GET PROBLEM WHILE DECLARING GLOBAL SCOPE IT IS ACCESSIBLE IN ANYWHARE SO REDUCES THE POLLUTION WE USE IIME

//()=used for function declaration ()= function call

(function chai(){
    console.log("DB connected");
})();
//o/p DB Connetecd WE necessory to write semicolon here we got error otherwise

(()=>{
    console.log("DB connected TWO");
})();

(
    function Myfunction(){
        console.log("This is MyFunction");
    }
)();

(
    (myname)=>{
        console.log(`DB CONNECTED SUCCESSFULLY ${myname}`);
    }
)("Shweta")



// +++++++++++++++++++++++++++++++++++++++++++++ONLY FOR PRACTICE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let pen ={
    type:"Solid",
    name:"get",

    Mypen:function mywork(){
        console.log(`Hello ${this.name}`);
    }
    




}
pen.Mypen();

let Car={};
Car.name="Maruti"
Car.type="Xo"
Car.color="green"
console.log(Car.name.toUpperCase());



const greeting ={
    name:"shweta",
    email:"abc@gmail.com",
    mode:"online"
    
}

greeting.JSuser=function Mygreet(){
    console.log(`hello JsUser ${this.name}`);
}
greeting.JSuser()

console.log(greeting);


greeting.MygreetTwo=function NewFyn(){
    console.log(`Hello JS`);
}
greeting.MygreetTwo()
greeting.MygreetTwo()
greeting.MygreetTwo()
console.log(greeting);
// console.log(greeting.MygreetTwo());
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++