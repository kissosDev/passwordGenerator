let passwordLength = 20;
const passwordFeatures = {
  includeUpper: true,
  includeLower: true,
  includeNumber: true,
  includeSymbol: true,
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addPosibilitiesToArray() {
  let rangeItem = 0;
  let element = asciiRanges[rangeItem];
  console.log(asciiRanges[rangeItem][0]);
  for (let prop in passwordFeatures) {
    if (passwordFeatures[prop]) {
      for (
        let i = asciiRanges[rangeItem][0];
        i < asciiRanges[rangeItem][1];
        i++
      ) {
        asciPassPossibilities.push(i);
      }
      rangeItem++;
    } else {
      rangeItem++;
      continue;
    }
  }
}
function getPasswordChar() {
  let passChar = String.fromCharCode(
    asciPassPossibilities[getRandomInt(asciPassPossibilities.length)]
  );
  return passChar;
}

function initiateAsciPassPossibilitiesArray() {
  asciPassPossibilities = [];
}

let asciPassPossibilities = [];
let asciiRanges = [
  [65, 90],
  [97, 122],
  [48, 57],
  [33, 47],
];

function generatePasswordFeatures(passwordFeatures) {
  passwordLength = lengthEl.value;
  passwordFeatures.includeLower = lowercaseEl.checked;
  passwordFeatures.includeUpper = uppercaseEl.checked;
  passwordFeatures.includeNumber = numbersEl.checked;
  passwordFeatures.includeSymbol = symbolsEl.checked;
}

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

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
  passwordLength = lengthEl.value;
});

generateEl.addEventListener("click", function getFullPassword(e) {
  let password = "";
  addPosibilitiesToArray();
  console.log(asciPassPossibilities);
  for (let i = 0; i < passwordLength; i++) {
    password += getPasswordChar();
  }

  resultEl.innerHTML = password;
  initiateAsciPassPossibilitiesArray();
});
