function isPalindrome(word) {
  // Write your algorithm here

    
    for (let i = 0; i < word.length / 2; i++) {
    
      const j = word.length - 1 - i;
      
      if (word[i] !== word[j]) return false;
    }
  
    // return true
    return true;
  }


/* 
  Add your pseudocode here
  r a c e c a r
  0 1 2 3 4 5 6
  i           j
  
  r a c e c a r
  0 1 2 3 4 5 6
    i       j
  
  r a c e c a r
  0 1 2 3 4 5 6
      i   j
  
  r a c e c a r
  0 1 2 3 4 5 6
  i j
  
  

*/

/*
  Add written explanation of your solution here
  /*
  This function checks if a word is a palindrome by comparing characters from the start and end of the word, 
  moving towards the middle. 

  The algorithm works as follows:
  1. Iterate from the beginning to the middle of the word.
  2. At each step, check if the current character matches the corresponding character from the end of the word.
  3. If any characters don't match,  returns false (the word is not a palindrome).
  4. If we reach the middle of the word without finding any mismatches, return true (the word is a palindrome).
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




