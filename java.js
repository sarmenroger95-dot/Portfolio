// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

var form = document.getElementById("contact-form");
var status = document.getElementById("form-status");

function showError(id, message) {
  document.getElementById(id + "-error").textContent = message;
  document.getElementById(id).setAttribute("aria-invalid", "true");
}

function clearError(id) {
  document.getElementById(id + "-error").textContent = "";
  document.getElementById(id).removeAttribute("aria-invalid");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  status.textContent = "";

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var firstInvalid = null;

  clearError("name");
  clearError("email");
  clearError("message");

  if (name.value.trim() === "") {
    showError("name", "Please enter your name.");
    firstInvalid = firstInvalid || name;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showError("email", "Please enter a valid email address, like name@example.com.");
    firstInvalid = firstInvalid || email;
  }

  if (message.value.trim() === "") {
    showError("message", "Please write a message.");
    firstInvalid = firstInvalid || message;
  }

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  status.textContent = "Thank you! Your message was submitted.";
  form.reset();
});