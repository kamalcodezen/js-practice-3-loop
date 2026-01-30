
const nums = 70;
if (nums <= 10) {
    console.log(`This is small number`);
}

console.log(`i'm practice while loop`);


// --------WHILE LOOP -------------     

let num = 0;
while (num < 5) {
    console.log(`this is while loop `)
    num++;
    // num = num + 1;
    // num += 1;
}

// 1 - 10 print
let range = 1;
while (range <= 10) {
    console.log(range);
    range++;
}


// SUM =======

// let number = 1;
// let sum = 0;
// while (number <= 5) {
//     console.log(number);
//     sum = sum + number;
//     console.log("sum =", sum);
//     number++;
// }


let number = 1;
let sum = 0;
while (number <= 5) {
    console.log(number)
    sum += number;
    console.log(`sum = ${sum}`);
    number++;
}
console.log("Total sum =", sum);



// even number print

let j = 1;
while (j <= 10) {
    if (j % 2 === 0) {
        console.log(`even number ${j}`);
    }
    j++;
};


// increment 
let i = 10;
while (i <= 20) {
    console.log(i);
    i++;
};



// decrement
let n = 20;
while (n >= 10) {
    console.log(n);
    n--;
}



// 1st way even number check
let s = 0;
while (s <= 10) {
    if (s % 2 === 0) {
        console.log("This is even number =", s);
    }
    s++;
};


// 2nd way even number check
let f = 0;
while (f <= 10) {
    if (f % 2 !== 1) {
        console.log("this is even number", f);
    }
    f++;
}

// 3rd way different
let k = 0;
while (k <= 10) {
    console.log("this is even number ==", k);
    k += 2;
}