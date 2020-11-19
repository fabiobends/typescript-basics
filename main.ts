export { }
let phrase = "Hello";
console.log(phrase);

let x = 10;
const y = 20;

let sum;
const title = 'Duh';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Fábio";

let sentence: string = `My name is ${name}, just a beginner`;

console.log(sentence);

let a: null = null;
let b: undefined = undefined;

let weirdBool: boolean = null;
let weirdString: string = undefined;
let weirdNumber: number = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let various: [string, number] = ['Fábio', 23];

enum Color { Red, Blue, Green };

let c: Color = Color.Red; // result = 0
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'hey';

let myVariable: unknown = 0;

const hasName = (obj: any): obj is { name: string } => {
  return !!obj &&
    typeof obj === 'object' &&
    'name' in obj
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

// (myVariable as string).toUpperCase(); //error only when executing

// these can be accepted with 'any'!
// myVariable();
// myVariable.name = 'huu';
// myVariable.toUpperCase();

// ok
let k;
k = 10;
k = 'k';

//  not ok
let l = 10; // it's a number in the initialization
// l = '10';

let multiType: number | boolean;
multiType = 10;
multiType = false;

// ?: assignment (optional)
// const add = (num1: number, num2?: number) => {
//   if (num2) {
//     return num1 + num2;
//   }
//   return num1 + num2;
// }


const add = (num1: number, num2: number = 10) => {
  if (num2) {
    return num1 + num2;
  }
  return num1 + num2;
}

add(5,10); // the first case
add(5); // the second case

interface Person {
  name: string,
  lastname: string,
}

function fullName (person: Person){
  return console.log(`${person.name} ${person.lastname}`);
}

let p = {
  name: "Bruce",
  lastname: "Wayne"
}

fullName(p);

class Employee {
  private employeeName: string;

  constructor(name: string){
    this.employeeName = name;
  }

  greet(){
    console.log(`Hello sr. ${this.employeeName}`);
  }
}

let emp1 = new Employee("Daniel");
// console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(name: string){
    super(name);
  }

  delegateWork(){
    console.log("Delegating works");
  }
}

let m1 = new Manager("Lucas");
// console.log(m1.employeeName);
m1.greet();
m1.delegateWork();