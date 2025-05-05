const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:'app'
}

for (const key in myObject) {
//   console.log(myObject[key]);
/* console.log(`${key} shortcut is ${myObject} `);

// ++++++++++++++++++++++++++++++++++++
js shortcut iis [object Object] 
cpp shortcut iis [object Object] 
rb shortcut iis [object Object] 
swift shortcut iis [object Object] 

*/
// console.log(`${key} shortcut for ${myObject[key]} `);



}


const programming =['JS','rby','py','Java','cpp']

/*for(const key in programming){
    
    console.log(key);
}

output: 0
1
2
3
4
*/

for (const key in programming) {
   console.log(programming[key]);
}
//output:
//JS
// rby
// py
// Java
// cpp


//Map is not iterable 


