const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
// Missing Input Field: If there is no input field with the id "height" in the document, document.querySelector('#height') will return null. Trying to access the value property of null will result in an error, but if it's wrapped in parseInt(), it will simply return NaN (Not a Number).

// Empty Input Field: If there is an input field with the id "height" but it is empty (i.e., the user has not entered anything into it), then parseInt('') will also return NaN.

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

