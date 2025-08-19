//  problem 1 : reverseString
function reverseString(stn) {
  // method one
  // return stn.split("").reverse().join("");

  // method two
  const arry = stn.split("");
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

// problem 3:
