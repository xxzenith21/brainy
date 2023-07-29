function submitForm(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm").value;
  
    // AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "components/register.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = xhr.responseText;
          if (response === "success") {
            alert("Registration successful!");
            // Optionally, you can redirect the user to the login page after successful registration.
            window.location.href = "login.php";
          } else if (response === "password_mismatch") {
            alert("Password and Confirm Password do not match.");
          } else if (response === "username_exists") {
            alert("Username already exists. Please choose a different username.");
          } else {
            alert("An error occurred. Please try again later.grgrtgrg");
          }
        } else {
          alert("An error occurred. Please try again later. frgrgr");
        }
      }
    };
  
    const params = `username=${username}&password=${password}&confirm=${confirmPassword}`;
    xhr.send(params);
  }