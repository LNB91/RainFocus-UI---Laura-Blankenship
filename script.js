document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting normally
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
      }
  
      // Placeholder for real login logic
      console.log("Logging in with", email, password);
  
      // Simulate success
      alert("Logged in successfully!");
    });
  });
  