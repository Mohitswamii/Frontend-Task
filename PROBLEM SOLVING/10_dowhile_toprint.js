let num = 4827;

do {

    let digit = num % 10;

    console.log(digit);

    num = Math.floor(num / 10);

} while (num > 0);