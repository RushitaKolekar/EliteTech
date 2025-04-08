// Get the input display element
const display = document.querySelector(".input");

// Select all buttons
const buttons = document.querySelectorAll(".button");

// Initialize the current input value as an empty string
let currentInput = "";

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent; // Get the button's value

        if (value === "AC") {
            // Clear all input
            currentInput = "";
            display.value = "";
        } else if (value === "CLR") {
            // Remove the last character
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === "=") {
            try {
                // Evaluate the expression and show the result
                currentInput = eval(currentInput.replace("x", "*")); // Replace 'x' with '*' for multiplication
                display.value = currentInput;
            } catch (error) {
                display.value = "Error"; // Show error for invalid expressions
                currentInput = "";
            }
        } else {
            // Append the button's value to the current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});