
//** There are two types of variables 
//! 1.Global
// we can use global variables all over our code
// we can set variables using let out of the block to make them global 
let age =13;
let age2 = age+1;
console.log(age) ;
{
    console.log(age2);
}
//? Or
// we can use var instead of let any where to make a global variable
var age3 = 13;
{
    var age4 = age + 3;
    console.log(age3);
    
}
console.log(age4);
//! 2.Local
// we use local variables inside a specific block
// we can use let inside the block to make them local variable
{
    let age5 = 10;
    console.log(age5);
}

// ! Constant Variable
// we use const variable to make them constant and cant change them again during whole code
const constvar = "Ayan";
console.log(constvar);
// We Cant do    constvar= 12;

//! usually it is better to use let


//* Objects




//* Data Types
console.log("Data Types");

// Two Types of Data Types

// ! 1.Primitive Data Types
//? 1. Number
//  used to specify integers
let num = 10;
console.log(num);

//? 2. String
// used to specify text
let str = "Hello";
console.log(str);

//? 3. Boolean
// used to specify true or false
let bool = true;
console.log(bool);

//? 4. Null
// used to specify no value
let nullVar = null;
console.log(nullVar);

//? 5. Undefined
// used to specify no value
let undef = undefined;
console.log(undef);

//? 6. Float
// used to specify decimal value
let floatNum = 10.5;
console.log(floatNum);

//? 7.Prompt
// used to get user input
let user = prompt("Enter your name");
console.log("Welcome",user);

//? 8. Symbol
// used to create a unique identifier
let sym = Symbol();
console.log(sym);

//? 9. BigInt
// used to specify a large number
let bigInt = 12345678901234567890n;
console.log(bigInt);


//! 2.Object
// used to store a collection of key / value pairs
let obj = {
    name: "John",
    age: 30
}
console.log(obj);
// To furthur add more values we use .
{/* <var name>.<key> = <value>; */}
// ? Example:
obj.salary="1 crore";
// Now 
console.log(obj);  



//* Change Data Types
console.log("Change Data Types");

//? 1. Number
let strtonum = Number(245);
console.log(strtonum);

//? 2. String
let numtostr = String(245);
console.log(numtostr + 10);

//? 3.Prompt
// prompt stores data in the form of string
let username = prompt("Enter your name");
console.log("Welcome",username);
// We can change it
let username2 = Number(prompt("Enter your number"));
console.log(username2 + 10);



//* Another way to write the value of variables is usin  Template Literals
console.log("Template Literals");

let userid = prompt("Enter your name");
console.log(`Welcome ${userid}`);


//* To Check Data Type
console.log("Check Data Types");
// console.log(typeof <var name>);
let data=true;
console.log(typeof data);

