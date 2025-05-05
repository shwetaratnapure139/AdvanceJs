const course ={
    courseName:"JS",
    price:999,
    courseInstruc:"hitesh"
}

const{courseInstruc}=course;
// console.log(courseInstruc);
// to change value

const {courseInstruc:instructor}=course;

// console.log(instructor);
// console.log(course);


// console.log(Object.entries(course));

// console.log(Object.keys(course));

course.gree=function(){
    console.log(`hello user my couse${this.courseName}`);
}

course.gree();
console.log(course);

for (const key in course) {
    console.log(key,"=",course[key]);
    
}

// class vehicle{
//    constructor(name,size,engine){
//     this.name=name;
//     this.size=size;
//     this.engine=engine;
//    }

// }
// let car =  new vehicle("GT",5000,6000);
// console.log(car);

