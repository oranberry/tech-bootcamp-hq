// create a function that doubles any number provided
function doubler(myNum){
    return myNum * 2
}

// Write a function that takes in a Sneetch's name (string), and returns that name with a star (string) ⭐
function addStar(sneetchName){
    return sneetchName + " ⭐"
}
// console.log(addStar('raza'))

// Write a function that takes in 2 ingredients and 1 secret ingredient.  
// The function should output the ingredients to the console between bread emojis 🍞
function sandwichMaker(ing1, ing2, secIng){
    return `🍞 ${ing1} ${ing2} ${secIng} 🍞`
// return "🍞" + ing1 + ' ' + ing2 + ' ' + secIng + "🍞"
}
// console.log(sandwichMaker('tomato', 'avocado', 'dijon'))

// Write a function that takes in a plainString and makes it fancy! 💅
// capslock() - takes in one string and returns the same string with all capital letters
function capslock(str) {
    return str.toUpperCase();
}
// UNCOMMENT TO TEST: 
// console.log(capslock("javascript is bae"))
console.log('--------------------------------------');

// dogYears() - takes in a number and returns that number multiplied by 7
function dogYears(age) {
    return age * 7; 
}
// UNCOMMENT TO TEST: 
// console.log(`You are ${dogYears(30)} in dog years!`)
console.log('--------------------------------------');

// randomNum() - returns a random number between 1 and 10
// HINT: use Math.random
// HINT2: you'll need to mutiply the result by 10
// LEVEL-UP: use Math.floor or Math.ceil to round the result to a whole number
function randomNum() {
    return Math.random() * 10;
}
// UNCOMMENT TO TEST:
// console.log(randomNum())
// console.log(randomNum())
// console.log(randomNum())
console.log('--------------------------------------');

// asciiArt() - no parameters; prints out a piece of ascii art when run
// HINT: you can create multi-line strings if you use backticks instead of quotations marks (if there are backticks in the art itself, you'll need to replace those with single quotes aka apostrophes)
// HINT #2: notice the instructions say to *print* the result (as opposed to return)
function asciiArt() {
   let bison = `
                                      ___,,___
                                  ,d8888888888b,_
                              _,d889'        8888b,
                          _,d8888'          8888888b,
                      _,d8889'           888888888888b,_
                  _,d8889'             888888889'688888, /b
              _,d8889'               88888889'     '6888d 6,_
           ,d88886'              _d888889'           ,8d  b888b,  d
         ,d889'888,             d8889'               8d   9888888Y  )
       ,d889'   '88,          ,d88'                 d8    ',88aa88 9
      d889'      '88,        ,88'                   '8b     )88a88'
     d88'         '88       ,88                   88 '8b,_ d888888
    d89            88,      88                  d888b  '88'_  8888
    88             88b      88                 d888888 8: (6') 88')
    88             8888b,   88                d888aaa8888, '   'Y'
    88b          ,888888888888                 'd88aa '88888b ,d8
    '88b       ,88886 '88888888                 d88a  d8a88' '8/
     'q8b    ,88''888  '888'"'88          d8b  d8888,' 88/ 9)_6
       88  ,88"   '88  88p    '88        d88888888888bd8( Z~/
       88b 8p      88 68'      '88      88888888' '688889'
       '88 8        '8 8,       '88    888 '8888,   'qp'
         8 8,        'q 8b       '88  88"    '888b
         q8 8b        "888        '8888'
          "888                     'q88b
                                    "888'  
    `
    console.log(bison);
}
// UNCOMMENT TO TEST: 
// asciiArt()
console.log('--------------------------------------');

// BONUS: whatMonthIsIt() - returns a number corresponding to the current month (July = 7)
// HINT1: first look up how to get the current date from the Date javascript object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// HINT2: store the current date in a variable called "now", then call .getMonth() on that variable and return the result
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
// HINT3: If you find the numbers are off by one, make sure to adjust accordingly!
function whatMonthIsIt() {
    let now = new Date();
    return now.getMonth() + 1;
}
// UNCOMMENT TO TEST: 
// console.log(whatMonthIsIt())
console.log('--------------------------------------');