//! Arrays & Strings


//* String
// String is a collection of characters
// Casual Syntax 
let str = "Hello World";
console.log(str);
// Characters of a String are set to numbers of index seperately
// the string's index starts from 0
let str2 = "Hello";
// Index of H is 0 
// Index of E is 1 
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[2]);
console.log(str2[3]);
console.log(str2[4]);


//! Escape Sequence Characters
//* these characters are used to print special characters in a string
//? Are used very rarely in Javascript

// to add a new line
let str3 = "line1 \nline2";
console.log(str3);

// to add a new tab/or space 
let str4 = "Word1 \tWord2";
console.log(str4);

// to add a backslash
let str5 = "Word1 \\Word2";
console.log(str5);


//! String Properties and Functions
//* Diff btw properties and funcs are that func has brackets at the end 
let str6 = "Ayaan";


//? Check Length of a String
console.log(str6.length);

//? Make String Uppercase
console.log(str6.toUpperCase());

//? Make String Lowercase
console.log(str6.toLowerCase());

//? Slice a String
// Syntax 
//  <varname>.slice(<index to slice from>,<index to slice till >) 
console.log(str6.slice(1 , 4))
// if we only enter start index it will print whole str starting from the index 

//? Replace a String 
// Syntax 
//.replace("<text to be replaced>" , "<text to be replaced with>")
let new_name=str6.replace("Ay", "02")
console.log(new_name);

//? Concatinate two strings 
let name_2="Rafay";
str6.concat("And" , name_2 )

// Remove Whitespaces 
let text = "   Hello        " 
console.log("This is Text" , text);

let trimmed_text =text.trim()
console.log("This is Trimmed Text" , trimmed_text);





