//Use For Shopping Cards
const array =[1,2,3,4,5];

//0+1+2+3+4+5
const initial=0;

const sumWithInitial =array.reduce(
   (accumulator,currentValue)=> accumulator + currentValue,initial
);
console.log(sumWithInitial);

const Add=[30,29,28,27,26,25,23,22,21]

const initialVal=0;
const addVal= Add.reduce(
    (prev,nex)=> prev+nex,initialVal
);
console.log(addVal);


const Mul=[10,20,30,40,50,60,70]
const initialMul =0;
const MulVal= Mul.reduce(
    (current,next)=>current+next,initialMul
)
console.log(MulVal);