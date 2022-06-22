let asciPassPossibilities = [];

const asciiRanges = [
  [65, 90],
  [97, 122],
  [48, 57],
  [33, 47],
];

const passwordFeatures = {
  length: 20,
  includeUpper: true,
  includeLower: true,
  includeNumber: true,
  includeSymbol: true,
};

const getRandomInt = max => Math.floor(Math.random() * max);

const getPasswordChar = () =>
  String.fromCharCode(
    asciPassPossibilities[getRandomInt(asciPassPossibilities.length)]
  );

const addPosibilitiesToArray = () => {
  let rangeItem = 0;
  const { length, ...props } = passwordFeatures;
  for (let prop in props) {
    if (!props[prop]) {
      rangeItem++;
      continue;
    }
    let range = asciiRanges[rangeItem];
    for (let i = range[0]; i < range[1]; i++) {
      asciPassPossibilities.push(i);
    }
    rangeItem++;
  }
};

const generatePassword = () => {
  let password = "";
  addPosibilitiesToArray();
  for (let i = 0; i < passwordFeatures.length; i++) {
    password += getPasswordChar();
  }
  document.getElementById("result").innerHTML = password;
  asciPassPossibilities = [];
};

document.getElementById("generate").addEventListener("click", generatePassword);

document.getElementById("lowercase").addEventListener(
  "click",
  e => passwordFeatures.includeLower = e.target.checked
);
document.getElementById("uppercase").addEventListener(
  "click",
  e => passwordFeatures.includeUpper = e.target.checked
);
document.getElementById("numbers").addEventListener(
  "click",
  e => passwordFeatures.includeNumber = e.target.checked
);
document.getElementById("symbols").addEventListener(
  "click",
  e => passwordFeatures.includeSymbol = e.target.checked
);
document.getElementById("length").addEventListener(
  "change",
  e => passwordFeatures.length = e.target.checked
);

