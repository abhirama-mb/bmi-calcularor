const form = document.getElementById('bmi-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (!weightInput.value || !heightInput.value) {
    showMessage('Please fill in both weight and height.');
    return;
  }

  if (weight <= 0 || heightCm <= 0) {
    showMessage('Weight and height must be greater than zero.');
    return;
  }

  const height = heightCm / 100;
  const bmi = weight / (height * height);
  const roundedBmi = bmi.toFixed(2);
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  resultElement.innerHTML = `
    <p><strong>BMI:</strong> ${roundedBmi}</p>
    <p><strong>Category:</strong> ${category}</p>
  `;
  resultElement.classList.remove('error');
});

function showMessage(message) {
  resultElement.innerHTML = `<p>${message}</p>`;
  resultElement.classList.add('error');
}
