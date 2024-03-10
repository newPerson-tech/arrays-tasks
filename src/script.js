const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const countNonNegative = 0;
const sumNonNegative = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        countNonNegative++;
        sumNonNegative += numbers[i];
    }
}

console.log("Number of non-negative numbers: " + countNonNegative);
console.log("Sum of non-negative numbers: " + sumNonNegative);