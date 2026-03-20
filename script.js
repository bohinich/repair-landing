const form = document.getElementById("repairForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const problem = document.getElementById("problem").value.trim();
  const phonePattern = /^\+1-\d{3}-\d{3}-\d{4}$/;

  if (!name || !phone || !problem) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  if (!phonePattern.test(phone)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Phone must be in format +1-XXX-XXX-XXXX.";
    return;
  }

  formMessage.style.color = "lightgreen";
  formMessage.textContent = "Form submitted successfully!";
  form.reset();
});