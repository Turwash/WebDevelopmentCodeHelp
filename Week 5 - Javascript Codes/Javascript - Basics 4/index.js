// Function 
console.log("Function")


run(); // this will also work 
function run() { 
    console.log("Running");
}

// FUNCTION CALLING / INVOKE
run();

// function assignment 

let stand = function walk() {
    console.log("walking")
}

stand();

let jump = stand;

jump();

// Anonymous

let stand2 = function() {
    console.log("walking")
}

stand2();

// Js is dynamic language

let a = 1;
a = 'a'
console.log(a);

// Dynamic function ()
function sum(a,b){
    return a + b ;
}

// console.log(sum(1)) // will give NaN (undefined for b)
// console.log(sum()) ; //will give NaN (undefined for a and b)
// console.log(sum(1,2,3,4,5)) // only 1 and 2 will be taken rest is waste now
console.log(sum(1,2)); 


// Argument : - 
function sum1(a,b){
    console.log(arguments);
    return a + b ;
}

let ans = sum1(1,2,3,4,5,6)
console.log(ans)

// Pass number as much as u want (fdynamic function with multiple parameters)
function sum2(a,b){
    let total = 0 
    for(let value of arguments)
    total = total + value;
    return total;
}

let ans1 = sum2(1,2,3,4,5,6)
console.log(ans1)


// Rest operator
function sum(...args){
    console.log(args)
}

sum(1,2,3,4,5,6);

//ALSO : (and no parameter is allowed after args it is a last paramter)
function sum1(num , value, ...args){
    console.log(args)
}

sum1(1,2,3,4,5,6);

// default parameters 
function interest(p , r=5, t=2 ){   // if user input any value of r then it will be of user's value if no value is entered it will be as default 5
    return p*r*t/100;
}
console.log(interest(10000,10,5))
console.log(interest(1000,5)) // NaN without default paramter, if any of the values is removed it will show NaN
// for default value (fixed)
console.log(interest(10000,5))

// 

// let person = {
//     fname : 'Turwash',
//     lname : 'chakraborty'
// };

// function fullname (){ // this is only a read only function 
//     return `${person.fname} ${person.lname}`;
// }

// console.log(fullname()); 

// // for getter and setter 
// // for getter use get keyword

// let person1 = {
//     fname : 'Love',
//     lanem: 'Babbar',

//     get fullName() {
//         return `${person.fname} ${person.lname}`;

//     },
//     set fullName (value) {
//         if(typeof value !== String){
//         throw new Error ("Not a string");
//     }
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// };

// to call 
// console.log(person1.fullName); //getter
// person1.fullName = 'Rahul Kumar'; // setter
// console.log(person1.fullName); 



// try catch to throw error
// try {
//     person1.fullName = true;
// }
// catch (e){
//     alert(e)
// }
 

// Scope

// for(var i = 0; i<10; i++){

// }

// console.log(i);
// // 
// if(true){
//     var a = 5;
// }
// console.log(a)
// //
// function a(){
//     const ab = 5;
// }
// //
// const ab = 5;
// function b(){
//     const ab = 5;
// }

// Reducing an array : -
let arr = [1,2,3,4];
let total = 0;

for (let value in arr)
total = total + value;
console.log(total);

// to reduce

let totalSum = arr.reduce((accumulator , currentValue)=> accumulator + currentValue, 0);
console.log("Printing the sum")
console.log(totalSum)