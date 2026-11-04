let arr = [12, -5, 0, 23, -18, 0, 7, -2, 15];
let positiveSum = 0;
let negativeSum = 0;
let zeroCount = 0;

for (let num of arr) {

    if (num > 0) {

        positiveSum = positiveSum + num;

    }
    else if (num < 0) {

        negativeSum = negativeSum + num;

    }
    else {

        zeroCount++;
    }
}

console.log("Positive Sum:", positiveSum);
console.log("Negative Sum:", negativeSum);
console.log("Zero Count:", zeroCount);