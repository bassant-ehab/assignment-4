function signUp() {
  var usernameInput = document.getElementById("usernameInput");
  var passwordInput = document.getElementById("passwordInput");
  var emailInput = document.getElementById("emailInput");
 

  // Regular Expressions for validation
  var usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
 var emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
 

  // Check if email is already in use
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var foundUser = users.find(user => user.email === emailInput.value);
  if (foundUser) {
    alert("Email is already in use.");
  } else {
    // Validation logic
    if (!usernameRegex.test(usernameInput.value)) {
      alert("Username must be between 3 and 20 characters and can only include letters, numbers, and underscores.");
    } else if (!passwordRegex.test(passwordInput.value)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.");
    } else if (!emailRegex.test(emailInput.value)) {
      alert("Invalid email address.");
    } 
     else {
      // Store user data in local storage and redirect to home page
      var user = { username: usernameInput.value, password: passwordInput.value, email: emailInput.value, };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Sign up successful!");
      window.location.href = "index.html";
    }
  }
}