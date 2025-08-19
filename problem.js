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
