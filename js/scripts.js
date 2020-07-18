window.addEventListener('load', start);

function start() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  var inputsRange = document.querySelectorAll('.inputRng');
  for (let i = 0; i < inputsRange.length; i++) {
    inputsRange[i].addEventListener('input', updateDisplaysColors);
  }

  updateDisplaysColors();
}

function updateDisplaysColors() {
  const fieldRed = document.querySelector('#rngRed');
  const displayRed = document.querySelector('#txtRed');
  displayRed.textContent = fieldRed.value;

  const fieldGreen = document.querySelector('#rngGreen');
  const displayGreen = document.querySelector('#txtGreen');
  displayGreen.textContent = fieldGreen.value;

  const fieldBlue = document.querySelector('#rngBlue');
  const displayBlue = document.querySelector('#txtBlue');
  displayBlue.textContent = fieldBlue.value;

  const fieldAlpha = document.querySelector('#rngAlpha');
  const displayAlpha = document.querySelector('#txtAlpha');
  displayAlpha.textContent = fieldAlpha.value;

  const property =
    'rgba(' +
    fieldRed.value +
    ', ' +
    fieldGreen.value +
    ', ' +
    fieldBlue.value +
    ', ' +
    fieldAlpha.value +
    ')';

  const colorBox = document.querySelector('#colorGenerated');
  colorBox.style.backgroundColor = property;
}
