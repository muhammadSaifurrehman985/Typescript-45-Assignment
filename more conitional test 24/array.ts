let fruits = ['apple', 'banana', 'cherry'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));  // Actual result: true

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));  // Actual result: false

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));  // Actual result: true

console.log("Is 'banana' not in the fruits array? I predict False.");
console.log(!fruits.includes('banana'));  // Actual result: false

