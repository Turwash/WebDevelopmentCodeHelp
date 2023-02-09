console.log("Lets Start");

let rectangle = {
    length : 2 ,
    breadth : 4,

    draw : function() {
        console.log("Draw function is here")
    }
}
console.log(rectangle.length);
console.log(rectangle.breadth);
console.log(rectangle.draw());

//----------------------------------------------------
// Function to create object : 
// factory function 

function createRectangle (length , breadth) {
    return rectangle = {
        length,
        breadth,
    
        draw : function() {
            console.log("Draw function is here")
        }
    };
}

let rectangleObj1 = createRectangle(5 , 6); // function is invoked / called and stored in rectangleObj1
console.log(rectangleObj1)
let rectangle2 = createRectangle(6, 2);
console.log(rectangle2)



// constructor Function 

function Rectangle (len , bre) {
    this.length = len;
    this.breadth = bre ;
    this.draw = function () {
        console.log("Drawing Function")
    }
}

let rectangleObject = new Rectangle (5 , 6); 
console.log(rectangleObject);
// adding
rectangleObject.color = 'Yellow';
console.log(rectangleObject)
//deleting
// delete rectangleObject.color;
// console.log(rectangleObject)



//---------------
// Primitive 
let a = 10;
let b = a ;
a++ 
console.log(a);
console.log(b);


// Reference 

let c = {value :10};
let d = c;
c.value++
console.log(c)
console.log(d)

// primitive , pass by value concept

let x= 10; 
function inc (x){
    x++;
}
inc(x);
console.log(x)

// reference , pass by refrence concept
let y = {value : 10}
inc(y);
console.log(y);

function inc(y){
    y.value++;
}


//FOR - IN LOOP 

let rect = {
    length : 2,
    breadth : 4,
};

for(let key in rect){
    console.log(key)
    console.log(rectangle[key]) // to access value of key 
}

// for (let key of rect){
//     console.log(key)
// }

for ( let key of Object.keys(rect)){  // .entries for value
    console.log(key)
}


if ('color' in rect){
    console.log("yes")
}
else {
    console.log("No")
}

if ('length' in rect){
    console.log("yes")
}
else {
    console.log("No")
}


// Object cloning 
//Iteration cloning

let src = {
    a : 10,
    b : 20,
    c : 30,
};
let dest = {};

for (let key in src){
    dest [key] = src [key]
}
console.log(dest);
src.a++
console.log(dest);

// Assign Cloning
let source = {
    a : 10,
    b : 20,
    c : 30,
};

let source2 = {
    d : 40 
}

let destination = object.assign({}, source , source2);
console.log(destination);
source.a++ ;
console.log(destination);


// Spread Cloning

let src2 = {
    a : 10,
    b : 20 ,
    c : 30 ,
} ;

let dest2 = {...src2};
console.log(dest2);
src2.a++;
console.log(dest2)
