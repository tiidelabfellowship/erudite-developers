function calculateBMI() {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultContainer = document.getElementById("result");

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (!isNaN(weight) && !isNaN(height)) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    resultContainer.textContent = "Your BMI is " + bmi.toFixed(2);
  } else {
    resultContainer.textContent = "Invalid input...";
  }
  // Reset the input fields
  weightInput.value = "";
  heightInput.value = "";
}
