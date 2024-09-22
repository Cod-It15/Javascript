//! Functions
//* In Javascript Functions are used to perform a specific task repeatively or contain a code in a block.
//? Syntax
// function <Func name>(<parameters>) {
//     code to be executed;
// }
// func name: It is used to name the function and to specify the values of params
// parameters: It is used to pass the values to the function or change the values
//? Example
function func1(name_of_user) {
  console.log("Hello " + name_of_user);
  return name_of_user;
}
// name_of_user=func1(prompt("Enter your name")) //for running on website only
let user = func1("Ayaan");
// console.log(user);

//! Sum Function
function func2(a, b) {
  console.log(Number(a) + Number(b));
  return a+b; // the return statement is used to return the value to the function from where the raw value came bcz when func1 provides the number from the prompt and if we store func1 in a variable js doesn't know what value is to be in the variable
}
let result = func2(prompt("Enter First Number"), prompt("Enter Second Number"));//for running on website only
// let result = func2(3, 5);

// // write the sum in the html File

// let para=document.getElementById("sumresult")
// para.innerHTML=result;

//! Function Passed Multiple Times
//? we can use a Function multiple times by calling it by it name and passing the parameters
// as we can pass parameters for func1 again
let user2 = func1("All Others As well");
//* the value will return in user2 then we can store it in a variable or print it
// console.log(user2);

//! We can use arrow function as well instead of our normal function
// In this we have to store our function ina variable and use it while normal function stores it in the variable automatcally with function keyword.
let func3 = (a, b) => {
  console.log(Number(a) + Number(b));
  return Number(a) + Number(b);
};
let result2 =func3(67,67);
// console.log(result2)
