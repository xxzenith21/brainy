function submitLoginForm(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "components/enter.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = xhr.responseText;
          if (response === "success") {
            alert("Login successful!");
            // Redirect to home.php after successful login
            window.location.href = "home.php";
          } else {
            alert("Invalid username or password. Please try again.");
          }
        } else {
          alert("An error occurred. Please try again later.");
        }
      }
    };
  
    const params = `username=${username}&password=${password}`;
    xhr.send(params);
  }
  
  // Attach the submitLoginForm function to the form's onsubmit event
  document.getElementById("loginForm").addEventListener("submit", submitLoginForm);
  