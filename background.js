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
    // add a check to make sure buffer does not contain consecutive operators
    document.getElementById('screen').innerHTML = evaluate(buffer);
    buffer += ' ' + operator + ' ';
    currentNumber = ""
}

/**
 * Evaluates arithmetic expression in buffer, saves result in buffer and
 * sets it to screen, and clears currentNumber.
 */
function equalButton() {
    var newVal = evaluate(buffer);
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

/**
 * Splits buffer into array of integers and operators, and 
 * evaluates them; to replace eval().
 */
function evaluate(theBuffer) {
    var result = 0,
        bufferArray,
        operators = ["+", "-", "*", "/"],
        i,
        currentOp;
    bufferArray = theBuffer.split(" ");
    for (i = 0, len = bufferArray.length; i < len; i++) {
        // have we previously seen an arithmetic operator
        if (typeof currentOp == "string") {
            if (currentOp == "+") result = result + parseInt(bufferArray[i]);
            if (currentOp == "-") result = result - parseInt(bufferArray[i]);
            if (currentOp == "*") result = result * parseInt(bufferArray[i]);
            if (currentOp == "/") result = result / parseInt(bufferArray[i]);
            currentOp = 0;
        // we have not previously seen an arithmetic operator
        } else {
            // if current character is an arithmetic operator
            if (operators.indexOf(bufferArray[i]) > -1) {
                currentOp = bufferArray[i];
            // else current character is an integer
            } else {
                result += parseInt(bufferArray[i]);
            }
        }
    }
    return result;
}