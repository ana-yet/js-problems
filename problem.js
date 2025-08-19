//  problem 1 : reverseString
function reverseString(str) {
  // method one
  // return stn.split("").reverse().join("");

  // method two
  const arry = str.split("");
  const reverseArray = [];

  for (let i = 0; i < arry.length; i++) {
    reverseArray.unshift(arry[i]);
  }
  const reverseString = reverseArray.join("");
  return reverseString;
}

// problem 2: Count Vowel
function countVowels(str) {
  const count = str.match(/[aeiou]/gi).length;

  return count;
}

// problem 3: Check for Palindrome
function palindrome(str) {
  let n = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[n]) {
      return false;
    }
    n--;
  }
  return true;
}

// problem 4:  Find the Maximum Number
function maxNumber(numArr) {
  let value = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > value) {
      value = numArr[i];
    }
  }
  return value;
}

// problem 5: Remove Duplicates from an Array
function removeDup(numArr) {
  const newArr = [];

  for (let i = 0; i < numArr.length; i++) {
    if (newArr.indexOf(numArr[i]) === -1) {
      newArr.push(numArr[i]);
    }
  }
  return newArr;
}

// Problem 6: Sum of All Numbers in an Array
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Problem 7: Find Even Numbers in an Array
function evnNum(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//Problem 8: Capitalize First Letter of Each Word
function capitalize(str) {
  const newArr = str.split(" ");
  const capArr = [];

  for (let i = 0; i < newArr.length; i++) {
    let word = newArr[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    capArr.push(capitalized);
  }

  return capArr.join(" ");
}

// Problem 9: Find the Factorial of a Number
function factNum(num) {
  if (num < 0) return undefined;
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
}

// Problem 10: PingPong Challenge
function pingPong() {
  const num = 20;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
