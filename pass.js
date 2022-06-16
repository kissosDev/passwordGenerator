const log = console.log;
console.log(`Liram Put Resk`);
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let asciPassPossibilities = [];
let asciiRanges = [[33, 47], [48, 57], [65, 90], [97, 122]];
function addPosibilitiesToArray() {
    for (let rangeItem = 0; rangeItem < asciiRanges.length; rangeItem++) {
        const element = asciiRanges[rangeItem];
        for (let i = element[0]; i < element[1]; i++) {
            asciPassPossibilities.push(i);
        }
    }
}

addPosibilitiesToArray();

function getPasswordChar() {
    let passChar = String.fromCharCode(asciPassPossibilities[getRandomInt(asciPassPossibilities.length)]);
    return passChar
}

// function getFullPassword() {
//     for (let i = 0; i < passwordFeatures.length; i++) {
//         let password = password += getPasswordChar();
//     }
//     return password;
// }

// function getLowerCaseChar() {
//     let lowerChar = String.fromCharCode(getRandomArbitrary(97, 122));
//     return lowerChar;
// }

// function getUpperCaseChar() {
//     let upperChar = String.fromCharCode(getRandomArbitrary(65, 90));
//     return upperChar;
// }

// function getNumberChar() {
//     let numChar = String.fromCharCode(getRandomArbitrary(48, 57));
//     return numChar;
// }

// function getSymbolChar() {
//     let symbolChar = String.fromCharCode(getRandomArbitrary(33, 47));
//     return symbolChar;
// }

// function getPassword() {
//     let password = "";
//     for (let i = 0; i < passwordFeatures.length; i++) {

//         if (passwordFeatures.includeLower) {
//             password += getLowerCaseChar();
//         }
//         if (passwordFeatures.includeUpper) {
//             password += getUpperCaseChar();
//         }
//         if (passwordFeatures.includeNumber) {
//             password += getNumberChar();
//         }
//         if (passwordFeatures.includeSymbol) {
//             password += getSymbolChar();
//         }
//     }
//     return password;
// }

const passwordFeatures = {
    length: 20,
    includeLower: true,
    includeUpper: true,
    includeNumber: true,
    includeSymbol: true,
};

// function generatePassword(passwordFeatures) {}

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

function generatePasswordFeatures(passwordFeatures) {
    passwordFeatures.length = lengthEl.value;
    passwordFeatures.includeLower = lowercaseEl.checked;
    passwordFeatures.includeUpper = uppercaseEl.checked;
    passwordFeatures.includeNumber = numbersEl.checked;
    passwordFeatures.includeSymbol = symbolsEl.checked;
}


lowercaseEl.addEventListener("click", function updateLowerCase(e) {
    passwordFeatures.includeLower = lowercaseEl.checked;
});
uppercaseEl.addEventListener("click", function updateUpperCase(e) {
    passwordFeatures.includeUpper = uppercaseEl.checked;
});
numbersEl.addEventListener("click", function updateNumber(e) {
    passwordFeatures.includeNumber = numbersEl.checked;
});
symbolsEl.addEventListener("click", function updateSymbol(e) {
    passwordFeatures.includeSymbol = symbolsEl.checked;
});

lengthEl.addEventListener("change", function updateLength(e) {
    passwordFeatures.length = lengthEl.value;
});

generateEl.addEventListener("click", function getFullPassword(e) {
    let password = ""
    for (let i = 0; i < passwordFeatures.length; i++) {
        password += getPasswordChar();
    }

    resultEl.innerHTML = password;
});
