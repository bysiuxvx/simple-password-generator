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

clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = outputEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});

generateBtn.addEventListener('click', () => {
  getChar();
});

document.getElementById('github').addEventListener('click', () => {
  window.open(
    'https://github.com/bysiuxvx/simple-password-generator',
    '_blank'
  );
});
