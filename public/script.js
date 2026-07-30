const form = document.getElementById('bmi-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (!weight || !height || height <= 0) {
    resultElement.innerHTML = '<p>Please enter valid values for weight and height.</p>';
    return;
  }

  const bmi = weight / (height * height);
  const roundedBmi = bmi.toFixed(1);
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  resultElement.innerHTML = `
    <p><strong>BMI:</strong> ${roundedBmi}</p>
    <p><strong>Category:</strong> ${category}</p>
  `;
});
