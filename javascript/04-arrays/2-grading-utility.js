// Writing code to compute an average among a set of four grades, after dropping the lowest one. 

function inputGrade(examNumber) {
    let grade = prompt("Please Enter Grade For Exam " + examNumber + ":");
    return Number(grade);
}

let grades = [];

// Input grades
grades.push(inputGrade(1));
grades.push(inputGrade(2));
grades.push(inputGrade(3));
grades.push(inputGrade(4));

// Drop the lowest grade
// To compare numbers instead of strings, the compare function can subtract b from a.
// The function will sort the array in ascending order
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
grades.sort(function(a, b){
    return a - b;
});

let finalGrades = grades.slice(1); // start 1 to end
let average = (finalGrades[0] + finalGrades[1] + finalGrades[2]) / 3;
alert("The final grade is " + average);