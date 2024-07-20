// Question:
// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

// let arr = [2, 3, 4, 5, 6, 7, 89, 0]
// let sum = 0;
// function sumOfAllEvenNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum = sum + arr[i]
//         }
//     }
//     return sum;
// }
// const result = sumOfAllEvenNums(arr);
// console.log("result:", result)


// Question:
// Write a function that takes a string and returns the same string with all vowels removed.

// const removeVowels = (str) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let emptyArr = [];
//     str.split('').map((letter) => {
//         if (!vowels.includes(letter)) {
//             emptyArr.push(letter)
//         }
//     })
//     return emptyArr.join('');
// }

// const str = "amit mehta"
// const result = removeVowels(str)
// console.log("result:", result)


//** GPT solution */
// const removeVowels = (str) => {
//     return str.replace(/[aeiou]/gi, '');
// }

// const str = "amit mehta";
// const result = removeVowels(str);
// console.log("result:", result); // Output: "mt mht"



// Question:
// Write a function that takes an array of objects and a key, and returns a new array containing the values of the specified key from each object.

// function pluck(arr, key) {
//     return arr.map(obj => obj[key]);
// }


// let arrOfObj = [
//     { naam: 'Amit Mehta', age: 23 },
//     { naam: 'Surinder', age: 43 },
//     { naam: 'Sakshi', age: 26 },
//     { naam: 'Manish', age: 19 },
// ]
// const result = pluck(arrOfObj, "naam");
// console.log("result:", result)



// Question:
// Write a function that takes an array of numbers and returns a new array where each number is squared.

// const squareNumbers = (arr) => {
//     return arr.map((num) => num * num)
// }

// const arr = [1, 2, 3, 4, 5]
// const result = squareNumbers(arr)
// console.log("result:", result)