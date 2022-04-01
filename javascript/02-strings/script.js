let firstName = "Hyunjung";
let middleName = "Oranberry";
let lastName = "Lee";

// string concatenation
let fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);
console.log("Hello " + fullName + "!");

// string interpolation mimics concatenation (just different formatting)
console.log(`Hello ${fullName}!`);

// string length property
console.log(fullName.length);
console.log(`Your full name is ${fullName.length} characters long.`);

// index
let initials = firstName[0] + middleName[0] + lastName[0];
console.log(`Your initials are ${initials}.`);

// slice
console.log("Sup " + firstName.slice(0, 4)+ "!");
// The first value is inclusive, the second value is exclusive
console.log(firstName.slice(4, firstName.length));

// reverse with toUpperCas() and toLowerCase()
console.log(firstName[7].toUpperCase() + firstName[6] + firstName[5] + firstName[4] + firstName[3] + firstName[2] + firstName[1] + firstName[0].toLowerCase());