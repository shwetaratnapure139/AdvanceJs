const tinderUser = new Object() 

// const tinderUser={} 
// console.log(tinderUser);

 tinderUser.id="1233abc"
 tinderUser.name="sam"
 tinderUser.isLoggedin=false
//  console.log(tinderUser);


let regularUser={
    email:"Someemail@gmail.com",
    fullName:{
        userName:{
            firstName:"Shweta",
            lastName:"Ratnapure"
        }
    }
}
// console.log(regularUser.fullName.userName);

// combine objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));


const teacher={}
teacher.id="123";
teacher.fname="somesh";
teacher.isSign="true";
console.log(teacher);

let actor={
    email:"kat@hmail.com",
    actorName:{
        userName:{
            first:"Katrina",
            last:"Kaif"
        }
    }
}


console.log(actor.actorName.userName.first);

let movie={
    name:"xoxo",
    role:"actor",
    char:"lead",
    isLog:"true"
}

// console.log("key=",Object.keys(movie));
// console.log(Object.values(movie));
// console.log(Object.entries(movie));


// console.log(movie.hasOwnProperty('isLog'));

for(let i in movie){
    console.log("Keys=",i,"values=",movie[i]);
}









// let arr =[1,2,3,4,5];
// let newArr=arr.splice(1,3,4);
// console.log(newArr);
// console.log(arr);

// let arr =["heroo","actor","actress",["abc","xyz"],"pqr"];

// console.log(arr.flat());

