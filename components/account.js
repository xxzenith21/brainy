function displayAccountDetails() {
    // AJAX request to fetch account details
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "components/useracc.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            // Update the input fields with the fetched account details
            document.getElementById("accUser").value = response.username;
            document.getElementById("accGender").value = response.gender;
            document.getElementById("accEmail").value = response.email;
          } else {
            alert("An error occurred while fetching account details.");
          }
        } else {
          alert("An error occurred while fetching account details.");
        }
      }
    };
    xhr.send();
  }
  
  // Function to handle form submission for updating account details
  function submitAccountForm(event) {
    // Rest of your existing submitAccountForm function code...
  }
  
  // Attach the submitAccountForm function to the form's onsubmit event
  document.getElementById("accDetails").addEventListener("submit", submitAccountForm);
  
  // Display account details when the page loads
  displayAccountDetails();