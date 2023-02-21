// adding 100para using loop
// const t1 = performance.now();
// for (let i = 1; i<=100 ; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);

// }
// const t2 = performance.now();

// console.log("this took"+ (t2-t1)+ "ms");

// optimising a bit: - 
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for (let i = 1; i<=100 ; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     document.body.appendChild(element);

// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();

// console.log("this optimised code took"+ (t4-t3)+ "ms");

// but here div is extra , so we need to more optimise the code: - 

// Using fragment : - 
// let fragment = document.createDocumentFragment();
// for (let i = 1; i<=100 ; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);

// }
// document.body.appendChild(fragment); // single reflow and single repaint 




// Single Threading :- 

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'JS IS SINGLE';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'Ki Haal Chaal';
//     document.body.appendChild(para);
// }

// addPara() ;
// appendNewMessage() ; 



// SetTimeout: - 

setTimeout(() => {
    console.log("Hellow Everyone")
}, 5000);

// will print after 5 sec 
