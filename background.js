// Baby_Calculator background.js file
// Coded by Alex Snow :3
// Handles calculator buffer and evaluation function

var buffer = "";
var currentNumber = "";

/**
 * Adds input number string to buffer and currentNumber, then displays
 * currentNumber to screen.
 * @param {string} number - Number to be added
 */
function numberButton(number) {
    buffer += number;
    currentNumber += number;
    document.getElementById('screen').innerHTML = currentNumber;
}

/**
 * Evaluates arithmetic operation in buffer, displays result out to screen, 
 * adds operator to buffer, and clears currentNumber
 * @param {string} operator - Arithmetic operation to be added  
 */
function operatorButton(operator) {
    document.getElementById('screen').innerHTML = eval(buffer);
    buffer += ' ' + operator + ' ';
    currentNumber = ""
}

/**
 * Evaluates arithmetic expression in buffer, saves result in buffer and
 * sets it to screen, and clears currentNumber.
 */
function equalButton() {
    var newVal = eval(buffer);
    buffer = newVal.toString();
    document.getElementById('screen').innerHTML = newVal;
    currentNumber = "";
}

/**
 * Clears buffer and currentNumber, and sets screen to 0.
 */
function clearButton() {
    buffer = "";
    currentNumber = "";
    document.getElementById('screen').innerHTML = 0;
}

/**
 * Deletes most recent character added to currentNumber/buffer
 * and displays change on screen.
 */
function backSpaceButton() {
    var currNumLength = currentNumber.length;
    var bufferLength = buffer.length;
    // if currentNumber has a digit to remove
    if (currNumLength > 0) {
        currentNumber = currentNumber.slice(0, currNumLength - 1);
        buffer = buffer.slice(0, bufferLength - 1);
    }
    // if backspace removed last digit in currentNumber
    if (currNumLength == 0) {
        return;
    } if (currNumLength == 1) {
        document.getElementById('screen').innerHTML = 0;
    } else {
        document.getElementById('screen').innerHTML = currentNumber;
    }
}