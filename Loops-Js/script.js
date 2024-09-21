//* Loops


//! For Loop
//* to run a singular code multiple times if the condition is true
//? Syntax
// for (<statement 1>; <statment2>; <statement 3>){ {
//     Code to be execute;
// }
// Statment 1: It is used to initialize the variable and executed only once
// Statment 2: It is used to check the condition and if the condition is approved true code will be executed if not it wil stop
// Statment 3: It is used to increment or decrement the variable or change in the variable if the condition is approved
//? Example
a=1
for ( let num = 1;num < 100; num++) {
    console.log(a+num);
    
}


//! For In Loop 
//* to print object and array
// object
let obj1 = {
    Name:"Ayan",
    Age:13
}
// array
let arr1 = ['1','2','3','4','5','6']
//? Syntax
// for (const <Variable 1> in <Variable 2>){
    //          const <Variable 3>= <Variable 2>[<Variable 1>];
    // Code to print object;         
    //}
// Variable 1: to store key in it 
// Variable 2: object varname from which to take keys
// Variable 3: varname to store keys in from the object to print them
//? Example
for (const key in arr1) {
    const element = arr1[key];
    console.log(element);
    
}
for (const key2 in obj1) {
    const element = obj1[key2];
    console.log(key2,element);
    
}


//! For Of Loop 
//* For Of loop iterates or seperate each value in an array and each letter in a string
let Array2 = [
    'Ayaan', 'Saad','Siddique' ,'Rafay','Mohib' 
]
//? Syntax
// for (const <Variable 1> of <array name/string name>){
    // Code to print object;         
    //}
    // Variable 1: variable to store iterated value
//? Example
    for (const element of Array2) {
    console.log(element);

}



//! While Loop
//* to run a code multiple times if the condition is true
//? Syntax
// while (<condition>){
    //      Code to be execute;
    // }
    // Condition: until the condition is satisfied the loop wil run continuously 
//? Example
let y=0
while (y<=100) {
    console.log(y);
    y++;
}

//! Do While Loop
//* to run a code atleast once before checking if the condition is true 
//* the code will run one time before checking if the condition is true
//? Syntax
// do{
    //      Code to be executed;
    // }while(<condition>)
// Condition: until the condition is satisfied the loop wil run continuously    
    // }

//? Example
let z=0
do {
    console.log(z);
    z++;
} while (z<=200);