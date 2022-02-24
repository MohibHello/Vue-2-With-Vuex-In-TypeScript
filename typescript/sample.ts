let number: number = 10;

let userName: String = 'Hello';

let listOfNumber: Array<number> = [1, 2, 3, 4, 5];

let listOfLetters: Array<String> = ['A', 'B', 'C'];

let listOfObject: Array<Object> = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];

// return type string
let userId = (a: string, b: number): string => a + b;

let target: HTMLElement = document.getElementById('target');

target.onclick = (event: MouseEvent) => event.button;

// diffrent types
let things: string | number |string[]| boolean = true;

//type alias
type thing = string | number | boolean;

//using type alias defined
let returnSomething = (input: thing) => {
    return input
}

//type alias for object
type stuff = {name:string}


let unit: string = "awesome"
let miles: "MILES" = "MILES" //type string should match

