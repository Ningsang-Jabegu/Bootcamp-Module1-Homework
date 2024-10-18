// Function to generate a combination of characters
const generateCode = () => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let code = '';
    for (let i = 0; i < 8; i++) {
        const char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    }
    return code;
};

// Display generated code
document.getElementById("codes").innerHTML = generateCode();

// Function to enable/disable button
const disableButton = (btnvalue) => {
    const submitButton = document.getElementById("submit");
    submitButton.disabled = btnvalue;
    if (btnvalue) {
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitButton.style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitButton.style.color = "rgba(255, 255, 255, 1)";
    }
};

// Listen to user input code
const codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

// Function to evaluate entered code
const evaluateCode = () => {
    const getCode = document.getElementById("codeentered").value.trim();
    const generatedCode = document.getElementById("codes").innerHTML.trim();
    if (getCode.length === generatedCode.length && getCode === generatedCode) {
        disableButton(false);
    }
};

// Initialize button state
disableButton(true);
