// goofy-case = first and last character capitalized
// ex: TayloR DarneillE
// Taylor ---> TayloR
// TayLOR ---> TayloR

function goofyCase(text){
    //take the text that was input and turn it to goofy case
    //output the goofy-cased string
    let firstLetter = text[0].toUpperCase();
    //console.log(firstLetter);
    let middle = text.slice(1, text.length -1).toLowerCase();
    //console.log(middle);
    let lastLetter = text[text.length -1].toUpperCase();
    //console.log(lastLetter);
  
    return firstLetter+middle+lastLetter;
    
  }
  /* let goofyMustard = goofyCase("mustard");
  console.log(goofyMustard); */
  
  let input = prompt("Enter some text");
  let result = goofyCase(input);
  console.log(result);