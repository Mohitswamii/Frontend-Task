let Student = {
    Rahul: 85,
    Priya: 92,
    Amit: 76,
    Renu: 89,
    Kiran: 68
};
let total = 0;
let count = 0;

let highest = 0;
let topper = "";

for (let name in Student) {

    total = total + Student[name];

    count++;

    if (Student[name] > highest) {

        highest = Student[name];

        topper = name;
    }
}

let average = total / count;

console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Highest Marks:", highest);
console.log("Topper Name:", topper);