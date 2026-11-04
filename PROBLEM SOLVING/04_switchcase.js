let str = prompt("Enter a string:");

switch (true) {

    case str !== null:
        console.log("Original String:", str);
        console.log("After removing spaces:", str.trim());
        break;

    default:
        console.log("Invalid Input");
}