//* Javascript Operators

//! Arithemetic Operators

// + Addition          to add values
let add= 3
console.log(add+5);
// - Subtraction       to subtract values
let subtract= 8
console.log(subtract-3);
// * Multiplication  =  to multiply values
let multiply=6
console.log(multiply*2);
// / Division          to divide values
let division=6
console.log(division/2);
//   Exponential   =   to add the exponents
let Exponential=3
console.log(2**Exponential);
// % Modulus           to check the reminder of a division
let modulus=6
console.log(modulus/2);
/*  ++ Increment        increases the value by one
    :
    :--> Suffix: <var name>++ shows the result before adding 1
    :--> Prefix: ++<var name> shows the result after adding 1
     */
let increment_pre =20
console.log(++increment_pre);
let increment_post =20
console.log(increment_post++);
/*
-- Decreement       decreases the value by one
    :--> Suffix: <var name>-- shows the result before subtracting 1
    :--> Prefix: --<var name> shows the result after subtracting 1
*/
let decrement_pre =20
console.log(--decrement_pre);
let decrement_post =20
console.log(decrement_post--);

//! Assignment Operaters

// =  to assign values
let assign= 3
console.log(assign);



// +=  to add values
let addAssign= 3
console.log(addAssign+=5);

// -=  to subtract values
let subAssign= 8
console.log(subAssign-=3);

// *=  to multiply values
let mulAssign=6
console.log(mulAssign*=2);

// /=  to divide values
let divAssign=6
console.log(divAssign/=2);

// %=  to check the reminder of a division
let modAssign=6
console.log(modAssign%=2);

// **=  to add the exponents
let expAssign=3
console.log(expAssign**=3);

//! Camparison Operators

// ==  to compare values only
let compare= 3
console.log(compare==3);

// ===  to compare values and type
let compare2= "3"
console.log(compare2===3);

// != values not equal 
let compare3= 3
console.log(compare3!=3);

// !== values and types not equal 
let compare4= 3
console.log(compare4!==3);

// >  greater than
let compare5= 3
console.log(compare5>3);


// >=  greater than or equal to
let compare6= 3
console.log(compare6>=3);

// <  less than
let compare7= 3
console.log(compare7<3);

// <=  less than or equal to
let compare8= 3
console.log(compare8<=3);

//! Logical Operators

// &&  AND   if any value is false it will return false else it will return as true
let and1 = 5<3;//false
let and2 = 4>3;//true
let and3 = 6>4;//true

console.log( and1 && and2 ); //false as one value is false
console.log( and2 && and3 ); //true as both values are true


// ||  OR   if any one is true result will be true esle it will be false
let or1 = 4<3; //false
let or2 = 3>2; //true
let or3 = 2>3; //false

console.log( or1 || or2 ); //true as one value is true
console.log( or1 || or3 ); //false as both values are false



//  ! NOT   shows the opposite boolean value
let not1 = ""; // an empty string and number 0 is expected to be a false
let not2 = 3;   
console.log( !not1 );



// * If else
// it is used that if a variable value meets a condition it will run this else run that 
let age = prompt("Enter Your Age")
if (age>=18){
    console.log("Yes, You Can Drive");

}

else{
    console.log("No, You can't drive");
    
}


//* If Else Ladder
let u = 18
if(u>=18){
    console.log("You Are Mature");
}

if(u<=0){
    console.log("You are Kidding");
}
else{
    console.log("You are not Mature");
}



// ! Turnary Operator
//  it is A shorthand for if else statment
// the value after ? is shown when the condition is true else the value after : is shown 
let drive_age = 18
let canDrive = drive_age>=18 ? "Yes" : "No";
console.log(canDrive);