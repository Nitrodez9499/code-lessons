// documentation HTMLInputElement: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

// NOTES:
// everything is an object, for example:
// string is an object
// array is an object

// invoking a funciton means to call it
// for example: walkTheDog('maya')
// this invokes the function and passes it
// a string as an argument (or parameter)
// function walkTheDog(dogName) { //.. code here .. }

// parameter is an argument
// argument is a parameter
// they mean the same thing

// MISSION:

// TODAY: 
// create a function that takes 2 parameters
// put the parameters in an array
// return the array
// log the array from the calling function (hint: theBoxesHandler)

// FUTURE: step2: reverse the string

function theBoxesHandler(boxName) {
    console.log("The Iniewicz " + boxName);

    var textBox = document.getElementById('my-textbox');

    var getArray = doSomething("malgosia", "tomek")

    console.log(getArray);

    textBox.value = boxName;
}


function doSomething(max, xavy) {

    var theIniewiczBros = [
        max,
        xavy
    ];

    return theIniewiczBros;
}

