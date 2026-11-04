let num = 1234;
let reverse = 0;
let sum = 0;

while (num > 0) {

    let digit = num % 10;

    reverse = reverse * 10 + digit;

    sum = sum + digit;

    num = Math.floor(num / 10);
}

console.log("Reverse:", reverse);
console.log("Sum of digits:", sum);