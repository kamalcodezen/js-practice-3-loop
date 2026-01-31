
// continue | skip ___________________


// even number skip
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


// odd skip
let j = 1;
while (j <= 15) {
    j++;
    if (j % 5 !== 0) {
        continue;
    }
    console.log(j);
}