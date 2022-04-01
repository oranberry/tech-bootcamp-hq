## Strings

---

**A string** can be any group of letters, numbers, whitespace, and/or punctuation that is grouped together by a set of quotation marks.

- We denote a string in JavaScript by surrounding some piece of text with either single or double quotes. Even though single or double quotes work in JavaScipt, many programming languages only represent strings using **double-quotes**.
- JavaScript strings can represent the entire Unicode character set. Thay means everything from the Roman alphabet to emojis can be included in your javaScript strings.
- For using actual double quote characters as part of the string, we use escaping a character by placing a backslash(\\) in front of the double quote characters we want to escape.  
  `"They say: \"No one knows what the nose knows.\" - Probably Confucius"`
- **Escape characters** are also used representing invisible text, we call whitespace. One example of whitespace is representing a new line(\n) in our text.  
  `console.log("Hello \n\n\n kitty");`
- **String concatenation**: two things that are separate and you squish them together into one long thing.  
  'console.log("Hello" + " " + "World");'
- **Length** property using dot notation tells us how many characters make up the string. `stringName.length`  
  `let myFavoriteAnimal = "dog";`  
  `console.log(myFavoriteAnimal.length);` --> 3
- String **indexing** simply means each individual character in a string has a numeric value corresponding to its location in the string. This allows you to access specific characters in your strings directly. This indexing is zero-based: The first character is in position 0, the second in 1, and so on.
- String **slice** : The first value is inclusive and the second value is exclusive
