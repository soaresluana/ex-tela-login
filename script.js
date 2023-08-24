function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "usuario" && password === "senha") {
    alert("Login bem sucedido!");
  } else {
    alert("Nome de usuário ou senha incorretos.Tente novamente.");
  }
}
