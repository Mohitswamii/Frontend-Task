let num = Number(prompt("Enter a number:"));

if (Number.isInteger(num)) {
    console.log("Integer:", num);
} else {
    console.log("Decimal:", num);
}