/**********************************
 * string method | these are built in function to manipulate a string
 ***********************************/


// str.toUpperCase()

let fullName = "kamaluddin";

console.log(fullName.toUpperCase());
// fullName.toUpperCase();

let newName = fullName.toUpperCase();
console.log(newName);

fullName = fullName.toUpperCase();
console.log(fullName);




// str.tolowerCase

let name = "kamal";

console.log(name.toLowerCase());

name = name.toLowerCase();
console.log(name);

let nameNew = name.toLowerCase();
console.log(nameNew);



// str.trim (method) starting and ending white space trim kore dei

let str = "    kamal  uddin   ";
console.log(str.trim());



// str.slice(start , end?);  str.slice(1,3)-- return (1,2)

let title = "apnaCollege";

console.log(title.slice(0, 4));
console.log(title.slice(3));




// str1.concat(str2)--  joins str1 + str2;

let str1 = "kamal";
let str2 = "Uddin";

console.log(str1.concat(str2));

let res = "my name is " + str1 + str2 + 123; //another way
console.log(res);




// str.replace method ("searchVal ", "newVal");  string er jekono value dhoro and oi value ta soriye onno value dite paro ---


let val = "i love you aisha";
console.log(val.replace("love", "hate"));




// str.charAt(); index mane jekono string er value find kore debo tar position onujayi;


let str3 = "kamaluddin";
console.log(str3.charAt(2)); // string position find
console.log(str3[0]); // string indices position find in string