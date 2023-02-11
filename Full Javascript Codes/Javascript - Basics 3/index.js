// Two types of string in js
// Primitive datatype
let name = 'Turwash';
console.log(typeof name)
// string object
let firstName = new String('Love');
console.log(typeof firstName)

//converting primitive to object 
console.log(name.length)
console.log(name[3])
console.log(name.includes("Tu"))
console.log(name.startsWith('Tur'))
console.log(name.startsWith('Mno'))
console.log(name.endsWith('ash'))
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim()); //trims starting and ending spaces
console.log(name.replace('Tur','Pur'))

//

let message = 'This is my message';
let word = message.split(" ");
console.log(word)

// Template Literal :-
let msg = 'This \nis \' my message';
console.log(msg)
// backtick is used to ignore \n
let msg1 = `This 
is my ' message, also we use Hello ${name}`;
console.log(msg1)

// Date and Time
// Date
let date = new Date();
console.log(date);
let date2 = new Date ('June 20 1998 07:15')
console.log(date2)
let date3 = new Date(1998 , 6 , 20, 7)
console.log(date3)
date3.setFullYear(2000)
console.log(date3)

// ARRAYS IN JAVASCRIPT: - 

//creation of array: 
let arr = [1, 3, 5, 7]
console.log(arr)
// adding in array
// end
let number =[1,3,5,7]
console.log(number.push(9))
console.log(number)
// beginning
console.log(number.unshift(8))
console.log(number)
// middle
console.log(number.splice(2,0,'a','b','c','d'))
console.log(number)

// Find out number 
let numbers = [1,4,5,7]
console.log(numbers)
console.log(numbers.indexOf(1))

// console.log(numbers.include(7))

console.log(numbers.indexOf(4,2))

// NOW ON REFRENCES : - 

let course = [
    { no:1 , name: 'Love'},
    {no:2, name:'Babbar'}
]

console.log(course)
console.log(course.indexOf({ no:1 , name: 'Love'})) // will give -1 , because it is not primitive its object (reference is different), we cant use indexOf here in objects

// find now call back function use
let c = course.find(function(course){
    return course.name == 'Love'
})
console.log(c);
// arrow function
let d = course.find(course => course.name == 'Love');
console.log(d);


// Removing element : 
let num = [1,2,3,4,5,6,7,8,9]
num.pop() //end
console.log(num);
num.shift() //beginning
console.log(num);
num.splice(3,1) //middle
console.log(num);

// Emptying an array
let emp = [1,2,3,4,5]
let num2 = emp
// emp = []  // (1) this is not a good practice
emp.length=0 // (2) this is good practice and used more
// also 
// emp.splice(0,number.length)  // (3) this is also good practice

// (4) using loop :
// while(numbers.length>0)
// emp.pop();

console.log(emp)
console.log(num2) // address is copied