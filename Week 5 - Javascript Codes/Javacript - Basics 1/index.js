//console.log is used to print in javascript

console.log("Namaste Duniyaaa...");

// (1) Variable : 

let b = 5;
// let a = 'Turwash'
// let a = true;
// let a = 12.4
console.log(a); 

var a = 5;
var a = 5; //redeclaration in var 
console.log(a);

const co = 12;
console.log(co); // fixed const

// (2) Dynamic typing in javascript : 

let lastName = 'Turwash' ;
console.log(lastName);
lastName = 5; // data type changed
console.log(lastName); 

// (3) OPERATORS : _
// ARITHMETIC OPERATOR :-

let num = 4;
let num1 = 2;
console.log(num - num1);
let num2 = 4 ** 4; // 4 to the power 4 
console.log(num1)
// similaryly for ( - , / , % , * )


// COMPARISON OPERATOR : -
console.log(2 > 4); // False
console.log(4 > 1); // True
console.log(3 >= 3); // True
console.log(5 < 10); // True
let number = 1;
let str = '1';
console.log(number == str); // True (Loose equality)
console.log(number === str); // False (strict equality)

//Pre Post Increment operator

let x = 6;
console.log(++x); //this will print 7

let y = 6;
console.log(y++); // this will print 6 but then update value of y to 7 
console.log(y); // here its 7

// Ternary Operator 
let age = 17;
let status = (age >= 18 ) ? 'can vote' : 'cant vote';
console.log(status); // no vote

// Logical operator with non boolean 

// run in console in browser : - 
// (true || false ) // true
// (true || true) // true
// (false || 1 || 5) // 1


// (5) IF ELSE CONTROL STATEMENT : 
console.log('If Else');
let marks = 98 ; 
if(marks >= 90){
    console.log('A GRADE');
}
else if (marks >= 80){
    console.log('B GRADE');
}
else if (marks >= 70){
    console.log('C GRADE');
}
else if(marks >= 60){
    console.log('D GRADE');
}
else {
    console.log('E GRADE');
}


// (6) SWITCH CASE CONTROL STATEMENT 
console.log('Switch case');
let numberr = 2 ; 
 switch (numberr){
    case 1 : console.log('A');
    break;
    case 2 :  console.log('B');
    break;
    case 3 : console.log('C');
    break;
    default : console.log('D');
 }

 // (7) LOOOOOOPSSSSS : - 

 // for loop:-
 console.log('For Loop');
 for (let i = 0;  i < 5 ; i++){
    console.log(i);
 }

 // While loop :- 
 console.log('While Loop');
let j = 1
 while (j < 4){
    console.log(j);
    j++;
 }
 // Do- while loop:- 
 console.log('Do - While Loop');
let k = 0;
do {
    console.log('Yes');
    k++;
} while(k < 10)