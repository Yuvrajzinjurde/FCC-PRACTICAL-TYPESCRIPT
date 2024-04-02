// Type  annotations

let awesomeName:string ='Hello typescript';

awesomeName = 'Javascript'  //can assign to another value of same datatype.

// awesomeName =32  --can not assign to different data type

let amount:number = 20;
amount = 12-1;   //can do operations

// amount = 'can not assign to string as it is number type of variable'

//same for other datatypes


// CHALLENGE


// 1
let challengeVar1:string ='TRIAL' ;

console.log(challengeVar1.toLowerCase());

// 2

let challengeVar2:number = 5;
console.log(challengeVar2.toExponential());

// 3
let challengeVar3:boolean = true;
console.log(challengeVar3&&false);


// 4

// challengeVar1 = 234;   -- can not assign number to string type variable
// challengeVar2 ="sdv";      -- can not assign string to number type variable
// challengeVar3 = 23;     -- can not assign number to boolean type variable


const persons = ['2001','bravae kid born','on 14 dec'];
let foundPerson;
for(let person of  persons){
  if(person==='2001'){
  foundPerson = person;
    break;
  }
}
console.log(foundPerson);

// ARRAYS

let prices:number[] = [100,34,35];

// prices.push("can not push string as the type of array is number");

let fruits:string[] = ["orrange" , 'grapes'];
// fruits.push(43);    -- Can not push numbers in string type arrays

// let emptyTypeArray:[] = ["can not assign values to it as its type is empty array"] 

let names = ['raman','aman','suman',45];
let array :(string|boolean)[] = ['santra','mango',true,false];


// TYPE ANNOTATION

let car:{
  brand:string;
  year:number
}
=
{
  brand :"TATA",
  year:324
};


car.brand = "MAHINDRA";

let car1:{
  brand:string;
  year:number
}
=
{
  brand:"Maruti",
  year:2000
}

let book = {title:"book",price:10};
let pen  = {title:"pens",price:5};
let notebook  = {title:"notebok",price:50};

let items :{
  readonly title:string;cost?:number
}[] =[book,pen,notebook]


// FUNCTIONS

function calculate(price:number):number{
  return price*9;
}
const finalcost = calculate(5);
console.log(finalcost);


//CHALENGES

let named:string[] = ['arjun','karan'];

const name2:string = "karan";
function namefinder(name:string)
{
  for(let nm of named){
    if(nm ===name){
      return true;
      break;
    }
    }
}


// CHALLENGES
function processInput(union:string | number){
  if(typeof union === 'number'){
    return 2*union;
  }
  else{
    return union.toLocaleUpperCase();
  }
}
processInput(24);


