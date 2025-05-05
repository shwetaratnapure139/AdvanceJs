const coding =["js","ruby","java","python","cpp"]

// coding.forEach( function(val) {
// console.log(val);
// })



coding.forEach( (val)=>{
// console.log(val);
})

// function pritMe(item){
//     console.log(item);
// }

// coding.forEach(pritMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding =[
    {
        lannguageName:"javascript",
        languageFilename:"java"
},
{
    lannguageName:"javascript",
    languageFilename:"java"
},
{
    lannguageName:"javascript",
    languageFilename:"java"
}

]

// const myNums =[1,2,3,5,5,6];
// const newNums=myNums.filter((num)=>num>4)
// console.log(newNums);



//return is important here it defienes a scope
const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>{
//    return num>4
// })
// console.log(newNums);



const newNums=[]

myNums.forEach((num)=>{
if(num>4){
    newNums.push(num)
}
})
console.log(newNums);

