const ASCII_RANGES = {
  uppercase: [65, 90],
  lowercase: [97, 122],
  numbers: [48, 57],
  symbols: [33, 47],
};

let asciPassPossibilities = [];

let length = 20;

const passwordProperties = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
};

const getRandomInt = max => Math.floor(Math.random() * max);

const getPasswordChar = () => String.fromCharCode(
  asciPassPossibilities[getRandomInt(asciPassPossibilities.length)]);

const addPosibilitiesToArray = () => {
  for (let prop in passwordProperties) {
    if (!passwordProperties[prop]) continue;
    let range = ASCII_RANGES[prop];
    for (let i = range[0]; i < range[1]; i++) {
      asciPassPossibilities.push(i);
    }
  };
};

const generatePassword = () => {
  let password = "";
  addPosibilitiesToArray();
  for (let i = 0; i < length; i++) {
    password += getPasswordChar();
  }
  document.getElementById("result").innerHTML = password;
  asciPassPossibilities = [];
};

const main = () => {
  Object.keys(passwordProperties).forEach(prop =>
    document
      .getElementById(prop)
      .addEventListener("click", e => passwordProperties[prop] = e.target.checked)
  );
  document
    .getElementById("length")
    .addEventListener("change", e => length = e.target.value);
  document
    .getElementById("generate")
    .addEventListener("click", generatePassword);
};

main();
