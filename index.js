function isPalindrome(word) {
  // Write your algorithm here
  //write a function name isPalindrom that has one argument, string. 
  //Return true if the argument is a palindrom, false if it is not a palindrom 
  if (word === word) {return true}
  else {return false}
}

/* 
  if word has the word with palindrome then return true, if else return false 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
