//* Faulty Calculator
/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong os as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/

//! Calculator


// makes a 10% possibility
let random = Math.floor(Math.random() * 10);

//? Method  1

// console.log(random);
if (random < 1) {
  function operative(a, o, b) {
    if (o === "+") {
      return a - b;
    }
    if (o === "-") {
      return a / b;
    }
    if (o === "*") {
      return a + b;
    }
    if (o === "/") {
      return a ** b;
    } else {
      console.log("Operation not Included");
      return null;
    }
  }
}
  else {
  function operative(a, o, b) {
    if (o === "+") {
      return a + b;
    }
    if (o === "-") {
      return a - b;
    }
    if (o === "*") {
      return a * b;
    }
    if (o === "/") {
      return a / b;
    } else {
      console.log("Operation not Included");
      return null;
    }
  }
}
let result = operative(
  Number(prompt("Enter First Number")),
  prompt("Enter Operator").trim(),
  Number(prompt("Enter Second Number"))
);
alert(result);

//? Method 2


// let obj_faulty_Operations={
//     '+' : '- ' ,
//     '*' : '+ ' ,
//     '-' : '/ ' ,
//     '/' : '**' 
// }





// let x=Number(prompt("Enter First Number"))
// let operator=prompt("Enter operator")
// let y=Number(prompt("Enter Second Number"))
// if (random < 1) {
// // faulty calculator
//     operator=obj_faulty_Operations[operator];
//     console.log(eval(`${x} ${operator} ${y}`));
//     alert(eval(`${x} ${operator} ${y}`));

// }
// else{
//     // Correct  calculator
//     console.log(eval(`${x} ${operator} ${y}`))
//     alert(eval(`${x} ${operator} ${y}`))

// }
