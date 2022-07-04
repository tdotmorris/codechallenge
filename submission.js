const findSum = function (array) {
    let add = 0;
    for (let a = 0; a < array.length; a++) {
      let addIndex = array[a];
      add += addIndex;
    } 
    return add;
  }

// const findFrequency = function (array) {
    
// };

const isPalindrome = function (str) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
    console.log('It is not a palindrome');
  }};
const string = prompt('Enter a string: ');
isPalindrome(string);

const largestPair = function (array) {
    let max = -Infinity;
    for (let i = 1; i < array.length; i++) {
        max = Math.max(array[i] * array[i - 1], max);
    }
    return max;
};

const removeParenth = function (str) {
    let newStr = str.replace(/[{()}]/g, '')
};

const scoreScrabble = function (str) {
    let newAlphabet = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
        sum = 0,
        i;
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++) {
        sum += newAlphabet[str[i]] || 0;
    }
    return sum;
}
let letter = prompt("Enter a scrabble word please: ");
console.log(scoreScrabble(letter));
