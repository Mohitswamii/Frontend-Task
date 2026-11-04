let num = 462;

let evenSum = 0;
let oddSum = 0;

while (num > 0) {

    let digit = num % 10;

    if (digit % 2 == 0) {
        evenSum = evenSum + digit;
    }
    else {
        oddSum = oddSum + digit;
    }

    num = Math.floor(num / 10);
}

console.log("Even Sum:", evenSum);
console.log("Odd Sum:", oddSum);