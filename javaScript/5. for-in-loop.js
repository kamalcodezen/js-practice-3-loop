/********************************
 * for in loop | also use object and array
 *********************************/


// object print__________________
const student = {
    fullName: "kamal",
    age: 23,
    cgpa: 4.5,
    isPass: true
}

for (let key in student) {
    console.log("key =", key, ":", student[key]);
}