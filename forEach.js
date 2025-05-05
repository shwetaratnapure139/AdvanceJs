const coading =['js','ruby','java','python','cpp']

// const values = coading.forEach((item)=>{
//     return item
// })
// console.log(values);
//O/P undefined


// const muNums=[1,2,3,5];

// const newnum=muNums.filter((num)=>num>4)
// console.log(newnum);

//O/P: 5

/* **************With return*************/

const  myNums =[1,3,5,6,7,8]

// const  newNums = myNums.filter((num)=>{ 
//     //Scope return so we use return
//     return num>4
// })
// console.log(newNums);


// const  newNums =[]

// myNums.forEach((num)=>{
// if(num>4){
//     newNums.push(num)
// }
// })
// console.log(newNums);


// const books =[
//     {title:'Book One',genre:'Fiction',publish:1981, edition:2004},
//     {title:'Book Two',genre:'Non-Fiction',publish:1981, edition:2004},
//     {title:'Book Three',genre:'History',publish:1981, edition:2004},
//     {title:'Book Four',genre:'Fiction',publish:1981, edition:2004},
//     {title:'Book Five',genre:'Fiction',publish:1981, edition:2004},
//     {title:'Book Six',genre:'Fiction',publish:1981, edition:2004},
//     {title:'Book Seven',genre:'Fiction',publish:1981, edition:2004},
//     {title:'Book Eight',genre:'Fiction',publish:1981, edition:2004},
//     {title:'Book Nine',genre:'Fiction',publish:1981, edition:2004},

// ];

// const userBooks = books.filter((bk)=>bk.genre==='History')

// console.log(userBooks);


// let Movie =[
//     {mName:'Krish',Year:2018,actor:'Hritik'},
//     {mName:'Salman',Year:2020,actor:'Tiger'},
//     {mName:'Shahrukh',Year:2021,actor:'DDLJ'},
//     {mName:'Amir',Year:2025,actor:'Lal Singh'},
//     {mName:'Akshay',Year:2023,actor:'Boss'},
//     {mName:'Vikky',Year:2025,actor:'Sambhaji'},
//     {mName:'Saif',Year:2018,actor:'Talash'},
//     {mName:'Tiger',Year:2021,actor:'HeroPanti'},
//     {mName:'Ayush',Year:2018,actor:'Barfi'},
// ]

// const NewMovie = Movie.filter((mv)=>mv.Year===2021)
// console.log(NewMovie);


const books =[
    {title:'Book One',genre:'Fiction',publish:1981, edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1981, edition:2004},
    {title:'Book Three',genre:'History',publish:1981, edition:2004},
    {title:'Book Four',genre:'Fiction',publish:1981, edition:2004},
    {title:'Book Five',genre:'Fiction',publish:1981, edition:2004},
    {title:'Book Six',genre:'Fiction',publish:1981, edition:2004},
    {title:'Book Seven',genre:'Fiction',publish:1981, edition:2004},
    {title:'Book Eight',genre:'Fiction',publish:1981, edition:2004},
    {title:'Book Nine',genre:'Fiction',publish:1981, edition:2004},

];

let userBooks= books.filter((bk)=>{
    return bk.genre==='Fiction' && bk.publish===1981
})
console.log(userBooks);



