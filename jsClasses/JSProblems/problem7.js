/*
  -- VALID ANAGRAM TASK:
  Problem: Given two strings s and t, create a function that returns true,
   if the two strings are anagrams of each other, otherwise return false.

  An anagram is a string that contains the exact same characters as another string, also the same number of characters but the order of the characters can be different.

  rat and tar are anagrams of each other.
  tar and raat are not anagram.

  Example 1:
  Input: s = "racecar", t = "carrace"
  Output: true

  Example 2:
  Input: s = "jar", t = "jam"
  Output: false
*/

const anagramChecker = (s, t) => {
  if(s.length !== t.length){ // if the strings are of different lengths automatically, it is not an anagram.
      return false;
  };
  let sArray = s.split(""); // ["j", "a", "r"]
  let tArray = t.split(""); // ["j", "a", "r"]
  
  let sSort = sArray.sort(); // ["a", "j", "r"]
  let tSort = tArray.sort(); // ["a", "j", "m"]

  let sJoin = sSort.join(""); // "ajr"
  let tJoin = tSort.join(""); // "ajm"

  // The code can be shortened into:
  // let newS = s.split("").sort().join("");
  // let newT = t.split("").sort().join("");

  if (sJoin === tJoin) { // "ajr" === "ajm"
      return true;
  };
}

console.log(anagramChecker("racecar", "carrace"));
console.log(anagramChecker("jar", "jam"));