let num = 9087654;

let count = 0;
let even = 0;
let odd = 0;

while (num > 0) {

    let digit = num % 10;

    count++;

    if (digit % 2 == 0) {
        even++;
    }
    else {
        odd++;
    }

    num = Math.floor(num / 10);
}

console.log("Total Digits:", count);
console.log("Even Digits:", even);
console.log("Odd Digits:", odd);