/**********************************
 * string method str.length (inbuilt property);
 **********************************/


let str = "kamaluddin";
let str2 = "kamal";

console.log(str.length);
console.log(str2.length);


/*========================================*/

/************************************
 * string indices str[0,1] (index) position---
 ************************************/
console.log(str[1]); //a



/*================================== */


/**********************************
 * Template literals  = `string` = 
 **********************************/

let specialString = `This is template literal`;
console.log(typeof specialString);


const student = {
    fullName : "kamal",
    age : 23 ,
    cgpa : 5.8
};

console.log(`student name is ${student.fullName} and age is ${student.age}`);

console.log("student name is",student.fullName , "and age is",student["age"]);



/*****************************
 * escape character 
 * 1. \n next line
 * 2. \t tap space
 *****************************/

let name = "kamal\nuddin"; // next line
console.log(name);
let fullName = `apna\tCollege`; // tab space
console.log(fullName);
console.log(fullName.length);