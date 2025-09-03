const myForm = document.getElementById("form");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const username = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const responseEl = document.getElementById("responses");

  const now = new Date();

  function showMessage(text, type = "success") {
    responseEl.innerHTML = text;
    responseEl.classList.remove("hide");
    responseEl.classList.add("slide-down", type);

    setTimeout(() => {
      responseEl.classList.add("hide");
      responseEl.classList.remove("slide-down", "success", "error");
    }, 3000);
  }

  if (username === "" || email === "" || message === "") {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (username.length < 3 || username.length > 20) {
    showMessage("Username must be contain min 3 and max 20 characters!", "error");
    return;
  }

  if (message.length < 5) {
    showMessage("Message at least contain 5 characters!", "error");
    return;
  }

  showMessage(`Thank you! Your Data submitted at ${now.toLocaleTimeString()}`, "success");

  console.log("Form data:", { username, email, message, createdAt: now });
});
