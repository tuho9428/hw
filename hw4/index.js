// Write one example for every method
//########### Array #######
console.log("########### Array #######");
// # must know Array
// forEach,
const arr = ["a", "b", "c", "d"];
arr.forEach((element) => console.log(element));

// filter,
const words = [
  "hello",
  "hola",
  "bonjour",
  "hallo",
  "ciao",
  "privet",
  "konnichiwa",
];

const result = words.filter((words) => words.length > 5);
console.log(result);

// map,
const arr1 = [2, 5, 8, 17];
const map1 = arr1.map((x) => x + 5);
console.log(map1);

// find,
const arr2 = [6, 13, 8, 135, 46];
const found = arr2.find((element) => element > 9);
console.log(found);

// includes,
const pets = ["dog", "fish", "cat", "pig"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));

//join,
const arr3 = ["Up", "Down", "Left", "Right"];
console.log(arr3.join("_"));

//pop,
const food = ["Pizza", "Pho", "Ramen", "Pad Thai", "Banh Mi"];
console.log(food.pop());
console.log(food);

//push,
food.push("Bagel", "Cookies");
console.log(food);

//reduce,
const arr4 = [6, 7, 8, 20, 32];
const sum = arr4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//sort
const arr5 = ["F", "Y", "E", "A"];
arr5.sort();
console.log(arr5);

// slice,
const animals = ["bison", "camel", "ant", "duck", "elephant"];
console.log(animals.slice(3, 5));

// reverse
const arr6 = ["one", "two", "three"];
const reversed = arr6.reverse();
console.log("reversed:", reversed);

// some,
const numbers = [1, 2, 3, 4, 5];
const even = numbers.some((num) => num % 2 === 0);
console.log(even);

// every,
const numbers1 = [1, 2, 3, 4, 5];
const allPositive = numbers1.every((num) => num > 0);
console.log(allPositive);

//findIndex,
const arr7 = [8, 12, 55, 2, 126];
const isLargeNumber = (element) => element > 50;
console.log(arr7.findIndex(isLargeNumber));

//########### static #######
console.log("########### static #######");
// # static:

// isInteger
Number.isInteger(9999); // true
Number.isInteger(0.1); // false

// isNaN,
isNaN(31); // false
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN(null); // false

// parseInt,
const numberString = "323";
const parsedNumber = parseInt(numberString);
console.log(parsedNumber);
console.log(typeof parsedNumber);

// parseFloat
const floatString = "3.14";
const parsedFloat = parseFloat(floatString);

console.log(parsedFloat);
console.log(typeof parsedFloat);

// #  must know Strings
// split,
const str =
  "JavaScript Essentials: Start your coding journey with the language that powers the web";

const words1 = str.split(" ");
console.log(words1[2]);

// toUpperCase,
console.log(str.toUpperCase());

//toLowerCase
console.log(str.toLowerCase());

// includes,
const word1 = "your";
console.log(
  `The word "${word1}" ${str.includes(word1) ? "is" : "is not"} in the sentence`
);

// charAt,
const index = 5;
console.log(`The character at index ${index} is ${str.charAt(index)}`);

//slice,
console.log(str.slice(4, 19));

//replace,
console.log(str.replace("your", "our"));

//substring,
console.log(str.substring(2, 5));

//trim
const greeting = "   Hello world! React  ";
console.log(greeting.trim());

//########### Object #######
console.log("########### Object #######");
// # must know Object
// ## static

// entries,
const person2 = {
  fname: "Tutu",
  lname: "hoho",
  age: 42,
};

for (const [key, value] of Object.entries(person2)) {
  console.log(`${key}: ${value}`);
}
// keys,
console.log(Object.keys(person2));

// values
console.log(Object.values(person2));
