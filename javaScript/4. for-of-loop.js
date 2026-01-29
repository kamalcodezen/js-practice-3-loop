/******************************
 *  for of loop / also use string or array
 *******************************/

// string value print   
let str = "kamaluddin";
for (let val of str) {
    console.log("val =", val);
    val++;
}


// size | length print ......
let fullName = "apnaCollage";
let size = 0;
for (let val of fullName){
    console.log(val);
    size++;
}
console.log(size);