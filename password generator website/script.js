const passwordInput = document.getElementById("password");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");

const lengthSlider = document.getElementById("lengthSlider");

const lengthValue = document.getElementById("lengthValue");

const uppercaseCheck = document.getElementById("uppercase");

const lowercaseCheck = document.getElementById("lowercase");

const numbersCheck = document.getElementById("numbers");

const symbolsCheck = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");


// Character sets

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+[]{}";


// Update length display

lengthSlider.addEventListener("input", () => {

    lengthValue.textContent = lengthSlider.value;

});


// Generate password

generateBtn.addEventListener("click", generatePassword);


function generatePassword() {

    let characters = "";

    let password = "";

    if (uppercaseCheck.checked) {
        characters += uppercaseChars;
    }

    if (lowercaseCheck.checked) {
        characters += lowercaseChars;
    }

    if (numbersCheck.checked) {
        characters += numberChars;
    }

    if (symbolsCheck.checked) {
        characters += symbolChars;
    }

    if (characters.length === 0) {

        alert("Select at least one option");

        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    passwordInput.value = password;

    checkStrength(password);
}


// Password strength checker

function checkStrength(password) {

    let strength = "Weak";

    if (
        password.length >= 12 &&
        uppercaseCheck.checked &&
        lowercaseCheck.checked &&
        numbersCheck.checked &&
        symbolsCheck.checked
    ) {
        strength = "Strong";
    }
    else if (password.length >= 8) {
        strength = "Medium";
    }

    strengthText.textContent = strength;
}


// Copy password

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(
        passwordInput.value
    );

    copyBtn.textContent = "Copied!";

    setTimeout(() => {

        copyBtn.textContent = "Copy";

    }, 2000);

});