for (let num = 100; num <= 999; num++) {

    let temp = num;
    let sum = 0;

    while (temp > 0) {

        let digit = temp % 10;

        sum = sum + (digit * digit * digit);

        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(num);
    }
}