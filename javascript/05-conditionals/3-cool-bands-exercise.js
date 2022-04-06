/* 
	1. Create an array of bands (strings) named myBands.
	Not a music fan? Feel free to use the array supplied below.
	NOTE: If you're making your own array of bands, be sure to use all lowercase letters! 
*/

let myBands = ["capstan", "blink-182", "hot mulligan", "taking back sunday", "janelle monae", "willow smith", "lizzo", "mom jeans", "modern baseball", "knuckle puck", "neck deep", "bob dylan", "microwave", "jimmy eat world", "leonard cohen", "the beatles", "jimmy hendrix", "prince", "lil nas x", "kick puncher"];

/* 
	2a. Create a prompt to get the user's favorite band and store it in a variable called userChoice.
	2b. Convert the user's answer to lowercase.
*/
let userChoice = prompt("what's your favorite band?");
userChoice = userChoice.toLowerCase();


/* 
	3a. Check the myBands array to see if it contains the user's answer.
	3b. If the user's band is not in the array, alert "Never heard of them!"
	HINT: you'll need to use indexOf and find out what it returns if the item isn't found in the array.
	3c. If the user's band is in the array, alert "OMG! I love them too!"
*/

if (myBands.indexOf(userChoice) === -1) {
  alert("Never heard of them!");
  alert("I'll have to check them out!");
  myBands.push(userChoice);
  console.log(myBands);
} else {
  console.log("OMG! I love them too");
}

/* 
	🧠 LEVEL UP 🧠
	If the user's band is not in the array, alert "I'll have to check them out!" and add the band to the array. Then console.log the array to ensure that the new item is present.
*/