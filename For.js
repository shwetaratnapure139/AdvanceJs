const arr=[1,2,3,4,5]

for(const val of arr){
    // console.log(val);
}


const greetings ="Hello  World";
for(const greet of greetings){

    // console.log(`Each char is ${greet}`);
   
}

// Maps maps are contains key value pairs it contains unique values

const map = new Map()
map.set('IN','India');
map.set("USA","United states of america")
map.set("Fr","France")

/*console.log(map);

Map(3) {
  'IN' => 'India',
  'USA' => 'United states of america',
  'Fr' => 'France'
}

*/


for(const [key,value] of map){
    console.log(key,"=",value);
}

/*
IN = India
USA = United states of america
Fr = France

*/

/*const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}
for(const [key,value] of myObject){
    console.log(key,":-",value );
}

*/

//We get output objects are not iterable