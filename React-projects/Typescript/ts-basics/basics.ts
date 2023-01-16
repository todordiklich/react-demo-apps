//Primitives: number, string, boolean

let age: number = 32;

let firstName: string = 'Max';

let isInstructor: boolean = true;

//More complex types: arrays and objects

let hobbies: string[] = ['Skiing', 'Running'];

type Person = {
  name: string;
  age: number;
};
let person: Person;

person = {
  name: 'Max',
  age: 32,
};

//Type inference
let course = 'React - The Complete Guide.';
//course = 213123; // displays an error

//Union types
let unionType: string | number = 'React - The Complete Guide.';
unionType = 213123;

//Functions & types
function add(a: number, b: number): number {
  return a + b;
}

function printValue(value: any): void {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}
const demoArr = [1, 2, 3];
const updatedDeamoArr = insertAtBeginning(demoArr, 0);
const stringArr = insertAtBeginning(['b', 'c', 'd'], 'a');
