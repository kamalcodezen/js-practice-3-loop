//  1 way odd number check
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log("This is ODD number =", i)
    }
}

// 2nd way odd number 
for (let n = 0; n <= 10; n++) {
    if (n % 2 === 1) {
        console.log(`this is another type odd number = ${n}`);
    }
}


// 3rd way loop jump odd number check
for (let j = 1; j <= 10; j += 2) {
    console.log("another type of ODD number =", j);
}




// Give me the list number between 1 to 30 divisible by 5;
for (let k = 1; k <= 30; k++) {
    if (k % 5 === 0) {
        console.log("divisible number by 5 =", k);
    }
}

// // another way divisible by 5
// for (let m = 1; m <= 30; m += 5) {
//     console.log("this number divisible 5 =", m)
// }


// // another way divisible by 3 
for (let m = 1; m <= 20; m++) {
    if (m % 3 === 0) {
        console.log("divisible number by =", m);
    }
}



//  divisible by 3 || divisible by 5

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}



//  divisible by 3 || divisible by 5

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("divisible number by 3 && 5 =", i);
    }
}

// Give me the sum of number from 1 to 30  tht are divisible by 3 .
let sum = 0;
for (let b = 1; b <= 30; b++) {
    if (b % 3 === 0) {
        console.log(b);
        sum += b;
        console.log("sum = ", b)
    }
}
console.log(`Total number of divisible by 3 and total sum = ${sum}`);