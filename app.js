const outputEl = document.getElementById('output');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const clipboardBtn = document.getElementById('clipboard');
const generateBtn = document.getElementById('generatePW');

const possibleChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

let result = '';

const getChar = () => {
  outputEl.textContent = '';
  result = '';
  const inputLength = +lengthEl.value;
  for (let i = 0; i < inputLength; i++) {
    result += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

  const finalPassword = result.slice(0, inputLength);

  outputEl.textContent = finalPassword;
  console.log(finalPassword);
};

generateBtn.addEventListener('click', () => {
  getChar();
});
