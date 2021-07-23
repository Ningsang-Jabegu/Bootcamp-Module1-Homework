/*----- RANDOM CODES -----*/
//Function to generate conbination of characters
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; //Initalize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for (i=1; i<=8; i++) {
        var char = Math.random()* str.length; //random select a character from the variable and the store in a new variable
        code += str.charAt(char) //accumulate the generated character int a string of 8 characters
    }
    return code; //return the final accmulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();
//Disable Button
function disableButtons() {
    document.getElementById("submit").disabled = true;
}
//Active function
disableButtons();