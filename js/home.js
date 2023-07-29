function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "signin.html";
  }
  
  var currentUserSpan = document.getElementById("currentUser");
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  currentUserSpan.textContent = currentUser.email;