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
    return union.toUpperCase();
  }
}
processInput(24);


//OBJECTS AS PARAMETERES


function createEmployee({id}:{id:number}):{id:number;isActive :boolean;}{
  return {id,isActive:id%2===0};
}

const first = createEmployee({id:1});
const second = createEmployee({id:2});

console.log(first,second);

//CHALLENGES


function processaData(input :string | number,config:{reverse:boolean}={reverse:false}):string|number{

  if(typeof input ==='number'){
    return input*input;
  }
  else if(config.reverse){
    return input.split('').reverse().join('').toUpperCase();
  }else{
    return input.toUpperCase();
  }
  
}

// console.log(processaData(10));
// console.log(processaData("Yuvraj"));
console.log(processaData('yuvraj',{reverse:true}));


//ALIAS AND INTERFACES

type newUser = {
  id:number;name:string;
  isActive:boolean
} ;

const ChampakLAL :newUser={
  id:12,
  name:"Champaklal",
  isActive:true
}


function creatingUsers(user:newUser):newUser{
  console.log(`${user.name.toUpperCase()} is father of jethalal`);
  return user;
}


// CHALLENGE

type employee = {
  id:number;
  name:string;
  department: string;
};

type manager ={
  id : number;
  name:string;
  employees :employee[];
};

type Staff= manager|employee;
function printStaffDetails(staff:Staff):void{
if('employees' in staff){
  console.log(`${staff.name} is an manager in the ${staff.employees.length} employees`);
}else
{
  console.log(
    `${staff.name} is an employee in the ${staff.department} department`
  );
}
}


const amit:employee={id:3435,name:"amit",department:"s/w"};
const sumit:employee={id:57,name:"sumit",department:"n/w"};
const namit:employee={id:754,name:"namit",department:"h/w"};

const suresh:manager ={id :420,name:"suresh",employees:[amit,sumit,namit]}

printStaffDetails(amit);
// function printStaffDetails(input:staff)
