document.querySelector("#signup").addEventListener("submit", function (event) {
  event.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);

  let email = document.getElementById("email").value;
  let password = document.getElementById("paswd").value;
  if (email == user.email && password == user.password) {
    alert("logged in successfully");
    localStorage.setItem("loggedin", true);
    window.location.href = "/index.html";
  } else if (email == user.email && password != user.password) {
    alert("Invalid  password");
    localStorage.setItem("loggedin", false);
  } else {
    alert("Invalid email");
    localStorage.setItem("loggedin", false);
  }
});