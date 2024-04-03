export function saySomething (name:string):void{
  console.log(`Hey ${name}`);
}

export let person = 'champak';

export type Student = {
  name: string;
  age: number;
}

const newStudent :Student={
  name:"baga",
  age:34
};
export default newStudent;