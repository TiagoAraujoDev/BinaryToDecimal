const bin = document.getElementById('bin');
const convert = document.getElementById('convertButton');
const decimal = document.getElementById('res');
const reset = document.getElementById('resetButton');
const statusSpan = document.querySelector('span#status');

convert.addEventListener('click', bin2Dec);
reset.addEventListener('click', () => {
  bin.value = '';
  decimal.innerHTML = '';
  statusSpan.innerHTML = '';
  bin.focus();
});

function bin2Dec() {
  let binString = bin.value;
  let i = binString.length;
  let sum = 0;
  statusSpan.innerHTML = '';
  if (i > 0) {
    while (i >= 0) {
      let binPart = binString.slice(i - 1, i);
      if (binPart == 1) {
        let operation = Math.pow(2, binString.length - i);
        sum += operation;
      } else if (binPart == 0) {
        let operation = Math.pow(2, binString.length - i) * 0;
        sum += operation;
      } else {
        statusSpan.innerText = `This isn't a binary number!`;
        break;
      }
      --i;
    }
    if (binString.search(/[2-9]{1}/) == -1) {
      decimal.innerHTML = `The decimal equivalent is ${sum}`;
    } else {
      decimal.innerHTML = '';
    }
  } else {
    statusSpan.innerHTML = `Enter a binary!`;
  }
}
