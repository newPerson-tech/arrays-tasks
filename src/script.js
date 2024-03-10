/*Task 1. From a given array count amount of non-negative numbers and their total summ*/

const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let countNonNegative = 0;
let sumNonNegative = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        countNonNegative++;
        sumNonNegative += numbers[i];
    }
}



console.log("Number of non-negative numbers: " + countNonNegative);
console.log("Sum of non-negative numbers: " + sumNonNegative);

/* Task2. In current array find the smallest number and its index*/

// Initialize variables to store minimum number and its index
let min = numbers[0];
let minIndex = 0;

// Iterate through the array starting from index 1
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
        minIndex = i;
    }
}

console.log("Minimum number: " + min);
console.log("Index of minimum number: " + minIndex);


/** Task3. In current array find the biggest number and its index*/

let max = numbers[0];
let maxIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        maxIndex = i;
    }
}

console.log("Maximum number: " + max);
console.log("Index of maximum number: " + maxIndex);

/** Task 4. Count how many negative numbers are in current array*/

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count++;
    }
}

console.log("Number of negative numbers: " + count);


/** Task 5. In current array count amount of non paired positive numbers */

const unpairedPositiveNumbers = new Set();

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && !numbers.includes(-numbers[i])) {
        unpairedPositiveNumbers.add(numbers[i]);
    }
}

console.log("Number of non-paired positive numbers: " + unpairedPositiveNumbers.size);

/** Task 6. In current array count amount of paired positive numbers */

const pairedPositiveNumbers = new Set();

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers.includes(-numbers[i])) {
        pairedPositiveNumbers.add(numbers[i]);
    }
}

console.log("Number of paired positive numbers: " + pairedPositiveNumbers.size);

/** Task 7. In current array count cumm of all paired positive numbers */

let sumPairedPositive = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers.includes(-numbers[i])) {
        sumPairedPositive += numbers[i];
    }
}

console.log("Sum of paired positive numbers: " + sumPairedPositive);


/** Task 8. In current array count cumm of all not paired positive numbers */

let sumNotPairedPositive = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && !numbers.includes(-numbers[i])) {
        sumNotPairedPositive += numbers[i];
    }
}

console.log("Sum of not paired positive numbers: " + sumNotPairedPositive);

/** Task 9. In current array count result of multiplication of all non negative numbers */

let productNonNegative = 1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        productNonNegative *= numbers[i];
    }
}

console.log("Product of non-negative numbers: " + productNonNegative);

/**Task 10. In current array fins the biggest element, and all the others equalise to 0 */

const maxElement = Math.max(...numbers);
const resultArray = numbers.map(number => (number === maxElement ? number : 0));

console.log("Original Array:", numbers);
console.log("Array with only the biggest element:", resultArray);