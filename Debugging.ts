// 1.
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// Isn't working because we are sending a number to a string variable
myString = 9;
// myString = "9"; could be a good solution

// ---------------------------------------------------------------

// 2
function sayHello(name: string){
    return `Hello, ${name}!`;
}
 // This is working great:
console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // Isn't working because we are sending a number to a string variable
console.log(sayHello(9));
// console.log(sayHello("9")); could be a good solution as well.

// ---------------------------------------------------------------

// 3
function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
 // This works:
console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));
// We could send a empty argument to send the 3 arguments the function needs, so it woll be something like console.log(fullName("Jimbo", "", "Jones"));

// 4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belt: 4
    // It says belt instead of bealts, that would fix the problem
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

// ---------------------------------------------------------------

// 5
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
    debug(){
        console.log("Console.log() is my friend.")
    }
}
 // This is not making an instance of Ninja, for some reason:
//  We nee to add thew new keyword and the data inside the function
// const shane = new Ninja("Shane", "Lastname");
const shane = Ninja();
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
// Would be better to write it like this const turing = new Ninja("Alan", "Turing")
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

// ---------------------------------------------------------------

// 6
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y => x * y;
// Nor is this working:
var math = (x, y) => let sum = x + y;
   let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];

// This is missing the parenthesis, it should look like this
// var increment = (x:number) => x + 1;
// console.log(increment(3));
// var square = (x:number) => {x * x};
// console.log(square(4));
// var multiply = (x:number,y:number) => x * y;
// var math = (x:number, y:number) => {
//     let sum = x + y;
//     let product = x * y;
//     let difference = Math.abs(x-y);
//     return [sum, product, difference];
// }

// ---------------------------------------------------------------

// 7
class Elephant {
    constructor(public age: number){}
    birthday = function(){
        this.age++;
        // this.age = age
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// class Elephant {
//     constructor(public age: number){}
//     birthday = () => {
//        this.age++;
//     }
//  }
//  const babar = new Elephant(8);
//  setTimeout(babar.birthday, 1000)
//  setTimeout(function(){
//     console.log(`Babar's age is ${babar.age}.`)
//     }, 2000)





