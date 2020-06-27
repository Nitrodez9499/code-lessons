// documentation HTMLInputElement: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement



function theBoxesHandler(boxName) {
    console.log("The Iniewicz " + boxName)
    var textBox = document.getElementById('my-textbox')
    textBox.value = boxName;
}

function letterReverser(wordName) {
    var textBox = document.getElementById('my-textbox')
    textBox.value = wordName
    console.log('The letter reserver did this to my name: ' + wordName)
}