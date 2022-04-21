const keyIWantToAccess = 'age';

const people = {
    name: 'merlin',
    age: 32,
}

people.age
people['age']
people[keyIWantToAccess]

const wizard = {
    name: 'gandalf',
    age: 200,
    nicknames: ['grey beard', 'long hat'],
    city: {
        name: 'shire',
        population: 3000,
        climate: 'temperate',
        landmarks: ['The Eye of Soron', 'Talking Trees']
    }
}

"Gandalf, also known as grey beard, is 200 years old."
"Gandalf lives in the shire, which has a booming population of 3000, and is known for a temperate climate and The Eye of Soron."

console.log(`${wizard.name}, also known as ${wizard.nicknames[0]}, is ${wizard.age} years old.`);
console.log(`${wizard.name} lives in the ${wizard.city.name}, which has a booming population of ${wizard.city.population}, and is known for a ${wizard.city.climate} climate and ${wizard.city.landmarks[0]}.`);

const nicknamesArr = wizard.nicknames;

console.log(`${wizard['name']}, also known as ${nicknamesArr[0]}, is ${wizard['age']} years old.`);

const cityObj = wizard.city;

console.log(`${wizard['name']} lives in the ${cityObj['name']}, which has a booming population of ${cityObj['population']}, and is known for a ${cityObj['climate']} climate and ${wizard.city.landmarks[0]}.`);


// print out the each of the users and what year they are. 
// Then print out each of the grades they received. Bonus: print out their percentage score.
const students = [
    { 
      name: 'ogan',
      year: 'sophomore',
      scores : [{ grade: 7,total: 10}, { grade: 7, total: 10},]
    },
    { 
      name: 'demetrius',
      year: 'freshman',
      scores : [{ grade: 9, total: 10}, { grade: 5, total: 10},]
    }
  ]

for(let i = 0; i < students.length ; i++){
    console.log(students[i].name);
    console.log(students[i].year);

    const scoresArr = students[i].scores;
    console.log(scoresArr); // array
    console.log(scoresArr[0].grade);
    console.log(scoresArr[0].total);
}