// array basics
let favoriteAuthors = ["Pierce Brown", "Andy Weir", "Stephen King"];
console.log(favoriteAuthors);

// Array.prototype.sort() - sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending 
favoriteAuthors.sort();
console.log(favoriteAuthors);

// Array.prototype.push() - adds one or more elements to the end of an array
// and returns the new length of the array
favoriteAuthors.push("Mary Russell");
console.log(favoriteAuthors);

// Array.prototype.slice() - returns a new array object selected from start to end (end not included)
let smallList = favoriteAuthors.slice(0, 2);
console.log(smallList);

// slice: used to make a new array which is a slice or a part of an existing array
// splice: allows us to go into the existing array and remove or change something
favoriteAuthors.splice(2, 1);
console.log(favoriteAuthors);