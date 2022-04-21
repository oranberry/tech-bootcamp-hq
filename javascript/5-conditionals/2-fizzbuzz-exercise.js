// Fizzbuzz Interview Question
// 1. Put all the numbers from 1 to 100 in an array.
// 2. If the number is a multiple of 3, then add the string 'fizz' instead of that number.
// 3. If the number is a multiple of 5, then add 'buzz' instead of that number.
// 4. If the number is a multiple of both 3 and 5, then add 'fizzbuzz' instead of that number.

let output = [];
let count = 1;

function fizzbuzz() {
    if(count % 3 == 0 && count % 5 == 0){
        output.push("FizzBuzz");
    } else if (count % 3 == 0){
        output.push("Fizz");
    } else if(count % 5 == 0){
        output.push("Buzz");
    } else {
        output.push(count);
    }
    console.log(output);
    count++;
}

