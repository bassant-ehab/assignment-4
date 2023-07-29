function signIn() {
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");

    // Check if email is signed up
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var foundUser = users.find(user => user.email === emailInput.value);
    if (!foundUser) {
      alert("Email is not signed up.");
    } else {
      // Check if password is correct
      if (passwordInput.value !== foundUser.password) {
        alert("Incorrect password.");
      } else {
        // Sign in successful, redirect to home page
        
        window.location.href = "home.html";
        alert("Sign in successful!");
      }
    }
}
