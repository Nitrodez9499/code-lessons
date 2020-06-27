// documentation HTMLInputElement: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

// MISSION:
// 1. create a function that takes a parameter
// 2. reverse string
// 3. return string

// TODAY: step 1, step 3

// TOMOROOW: step2: reverse the string

function theBoxesHandler(boxName) {
    console.log("The Iniewicz " + boxName);

    var textBox = document.getElementById('my-textbox');

    // TODAY
    // create variable to capture result (or return) of letterReverser
    // console.log( the return of letterReverser )
    var captureWord = letterReverser('max');
    console.log(captureWord);


    textBox.value = boxName;
}

// wordName is an argument or paremeter
function letterReverser(wordName) {

    // reverse the "wordName" argument (or paremeter)
    return wordName;
    // put the reversed value in a variable

    // return the reversed value variable
}