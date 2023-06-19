// Get reference to the form using an id
const signUpForm = document.getElementById("signup-form");

// Add event listener to the form submit event
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("cpassword").value;

  //  validation
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    // Display an error message if any field is empty
    alert("Please fill in all fields.");
  } else if (password !== confirmPassword) {
    // Display an error message if passwords do not match
    alert("Passwords do not match.");
  } else {
    // Validation successful, change state to dashboard page
    window.location.href = "/userdashboard page/HTML/userdashboard.html";
  }
});
