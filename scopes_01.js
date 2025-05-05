function one(){
    const username="Shweta"

    function two(){
        const website ="youtube";

        console.log(username);
    }
    // console.log(website);


    two()
}
one()


if(true){
    const username ="abc"

    if(username === "abc"){
        const website ="youtube"
        console.log(username +website);
    }
   // console.log(website); //website is not defined

}

// ***************************
console.log(addOne(5));//6 hoisting
function addOne(num) {
    return num+1
    
}


addTwo(5) // got error in this case because function is stored in variable and access function before declaration 
const addTwo= function(num){
    return num+2
}
