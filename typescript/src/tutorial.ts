// Type  annotations

let awesomeName: string = "Hello typescript";

awesomeName = "Javascript"; //can assign to another value of same datatype.

// awesomeName =32  --can not assign to different data type

let amount: number = 20;
amount = 12 - 1; //can do operations

// amount = 'can not assign to string as it is number type of variable'

//same for other datatypes

// CHALLENGE

// 1
let challengeVar1: string = "TRIAL";

console.log(challengeVar1.toLowerCase());

// 2

let challengeVar2: number = 5;
console.log(challengeVar2.toExponential());

// 3
let challengeVar3: boolean = true;
console.log(challengeVar3 && false);

// 4

// challengeVar1 = 234;   -- can not assign number to string type variable
// challengeVar2 ="sdv";      -- can not assign string to number type variable
// challengeVar3 = 23;     -- can not assign number to boolean type variable

const persons = ["2001", "bravae kid born", "on 14 dec"];
let foundPerson;
for (let person of persons) {
  if (person === "2001") {
    foundPerson = person;
    break;
  }
}
console.log(foundPerson);

// ARRAYS

let prices: number[] = [100, 34, 35];

// prices.push("can not push string as the type of array is number");

let fruits: string[] = ["orrange", "grapes"];
// fruits.push(43);    -- Can not push numbers in string type arrays

// let emptyTypeArray:[] = ["can not assign values to it as its type is empty array"]

let names = ["raman", "aman", "suman", 45];
let array: (string | boolean)[] = ["santra", "mango", true, false];

// TYPE ANNOTATION

let car: {
  brand: string;
  year: number;
} = {
  brand: "TATA",
  year: 324,
};

car.brand = "MAHINDRA";

let car1: {
  brand: string;
  year: number;
} = {
  brand: "Maruti",
  year: 2000,
};

let book = { title: "book", price: 10 };
let pen = { title: "pens", price: 5 };
let notebook = { title: "notebok", price: 50 };

let items: {
  readonly title: string;
  cost?: number;
}[] = [book, pen, notebook];

// FUNCTIONS

function calculate(price: number): number {
  return price * 9;
}
const finalcost = calculate(5);
console.log(finalcost);

//CHALENGES

let named: string[] = ["arjun", "karan"];

const name2: string = "karan";
function namefinder(name: string) {
  for (let nm of named) {
    if (nm === name) {
      return true;
      break;
    }
  }
}

// CHALLENGES
function processInput(union: string | number) {
  if (typeof union === "number") {
    return 2 * union;
  } else {
    return union.toUpperCase();
  }
}
processInput(24);

//OBJECTS AS PARAMETERES

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

//CHALLENGES

function processaData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else if (config.reverse) {
    return input.split("").reverse().join("").toUpperCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(processaData(10));
// console.log(processaData("Yuvraj"));
console.log(processaData("yuvraj", { reverse: true }));
console.log(processaData("yuvraj", { reverse: false }));

//TYPE ALIAS AND INTERFACES

type newUser = {
  id: number;
  name: string;
  isActive: boolean;
};

const ChampakLAL: newUser = {
  id: 12,
  name: "Champaklal",
  isActive: true,
};

function creatingUsers(user: newUser): newUser {
  console.log(`${user.name.toUpperCase()} is father of jethalal`);
  return user;
}

creatingUsers(ChampakLAL);
// CHALLENGE

type employee = {
  id: number;
  name: string;
  department: string;
};

type manager = {
  id: number;
  name: string;
  employees: employee[];
};

type Staff = manager | employee;
function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const amit: employee = { id: 3435, name: "amit", department: "s/w" };
const sumit: employee = { id: 57, name: "sumit", department: "n/w" };
const namit: employee = { id: 754, name: "namit", department: "h/w" };

const suresh: manager = {
  id: 420,
  name: "suresh",
  employees: [amit, sumit, namit],
};

printStaffDetails(amit);
// function printStaffDetails(input:staff)

// TYPE INTERSECTION

type book = {
  id: number;
  name: string;
  price: number;
};

type discountedBook = book & {
  discount: number;
};

const book1: book = {
  id: 23,
  name: "how to cook dragon",
  price: 4521,
};

const book2: book = {
  id: 23,
  name: "the secret life of dragon",
  price: 45,
};

const discountedBook: discountedBook = {
  id: 243,
  name: "Game of thrones",
  price: 1000,
  discount: 0.45,
};

// INTERFACE FUNDAMENTALS

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string; //Optional property
}

const wingsOfFire: Book = {
  isbn: 2453462346,
  title: "Wings-of-fire",
  author: "A.P.J. Abdul kalam",
  genre: "biography",
};

// CHALLENGE

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}
const laptop: Computer = {
  id: 3432,
  brand: "Lenovo",
  ram: 4,
  upgradeRam(ammount) {
    this.ram += ammount;
    return this.ram;
  },
};
laptop.storage = 512;
console.log(laptop.upgradeRam(2));
console.log(laptop);

// INTERFACE INHERITANCE

interface Person {
  name: string;
  getPersonDetails(): string;
}

interface catOwner {
  catname: StringConstructor;
  getCatName(): string;
}

interface Person {
  age: number;
}
const person: Person = {
  name: "shamu",
  age: 432,
  getPersonDetails() {
    return `name :${this.name},Age: ${this.age}`;
  },
};
interface Employeee extends Person {
  employeeId: number;
}
const employeee: Employeee = {
  name: "kate",
  age: 45,
  employeeId: 234,
  getPersonDetails() {
    return `Name ${this.employeeId} Employee ID ${this.employeeId}`;
  },
};

// TUPLES AND ENUMS

enum serverResponseStatus {
  success,
  error,
}
console.log(serverResponseStatus);
interface serverResponse {
  result: serverResponseStatus;
  data: string[];
}

function getServerResponse(): serverResponse {
  return {
    result: serverResponseStatus.success,
    data: ["first", "second"],
  };
}

// CHALLENGE

enum UserRole {
  admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};
function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 23,
  name: "salman khan",
  role: UserRole.admin,
  contact: ["user@account", "2349528"],
});

// TYPE UNKNOWN    --ANY

let something: any = "this is anything";
let strLength: number = (something as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  pending = "pending",
  declined = "declined",
}

type Users = {
  name: string;
  status: Status;
};

const statusValue = "Pending";
const users: Users = {
  name: "prajwal",
  status: statusValue as Status,
};

// NEVER

type theme = "light" | "dark";
function checkTheme(theme: theme): void {
  if (theme === "light") {
    console.log("Light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  return;
}
enum Color {
  red,
  blue,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.red:
      return "Its red";
    case Color.blue:
      return "Blue";
    default:
      throw new Error(`Unexpected color found :${color}`);
  }
}
console.log(getColorName(Color.red));

// MODULES

import newStudent, {
  saySomething,
  person as personss,
  type Student,
} from "./action";

saySomething("Typescript is mood");
console.log(newStudent);
console.log(personss);

const anotherStudent: Student = {
  name: "bavri",
  age: 25,
};
console.log(anotherStudent);

// TYPE PREDICATE

try {
  throw "something wrong ";
  throw new Error("this is also error");
} catch (error) {
  if (error instanceof Error) {
    console.log(`caught an error object :${error.message}`);
  } else {
    console.log("Unknown error...");
  }
}

function checkInput(input: Date | string) {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random = checkInput("2020-05-05");

console.log(year);
console.log(random);

// GENERICS

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(6, "hello"));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(10, "hello");
let arrayNumbers = createArray<number>(15, 100);

console.log(arrayStrings);
console.log(arrayNumbers);

// FETCH DATA
const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  something:boolean
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP errr! status:${response.status}`);
    }
    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "there was a big error :-)";
    console.log(errorMsg);
    return [];
  }
}
const tours = await fetchData(url);
console.log(tours);
tours.map((tour) => {
  console.log(tour.name);
});
