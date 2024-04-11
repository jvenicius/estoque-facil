const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");

nome.addEventListener("change", (e) => {
  nomeTemp = e.target.value.trim();

  //   Eu vou voltar, não tá funcionando acento
  const onlyLetters = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(nomeTemp);
  //   ^[\p{L}\s]+(?:\s[\p{L}\s]*)*$

  if (nomeTemp.length <= 2 || !onlyLetters) {
    console.log("Seu nome é inválido!");
  } else {
    console.log("Seu nome está correto!");
  }
});

cpf.addEventListener("change", (e) => {
  cpfTemp = e.target.value.trim();

  const verificaOnzeDigitos = /^\d{11}$/.test(cpfTemp);

  if (!verificaOnzeDigitos) {
    console.log("Seu cpf é inválido!");
  } else {
    console.log("Seu cpf está correto!");
  }
});

email.addEventListener("change", (e) => {
  emailTemp = e.target.value.trim();

  const verificaOnzeDigitos = /^\d{11}$/.test(cpfTemp);

  if (!verificaOnzeDigitos) {
    console.log("Seu cpf é inválido!");
  } else {
    console.log("Seu cpf está correto!");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    var email = document.getElementById("email").value.trim();

    if (!isValidEmail(email)) {
      alert("Por favor, insira um email válido.");
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    var telefone = document.getElementById("fone").value.trim();

    if (!isValidTelefone(telefone)) {
      alert("Por favor, insira um telefone válido no formato (00)00000-0000.");
      event.preventDefault();
    }
  });

  function isValidTelefone(telefone) {
    var telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    return telefoneRegex.test(telefone);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    var senha = document.getElementById("senha").value.trim();
    var senhaRepetida = document.getElementById("senha-repetida").value.trim();

    if (senha === "" || senhaRepetida === "") {
      alert("Por favor, preencha ambos os campos de senha.");
      event.preventDefault();
    } else if (senha !== senhaRepetida) {
      alert("Por favor, repita sua senha corretamente.");
      event.preventDefault();
    }
  });

  document
    .getElementById("senha-repetida")
    .addEventListener("input", function (event) {
      var senhaRepetida = this.value.trim();
      if (!/^[0-9a-zA-Z]+$/.test(senhaRepetida)) {
        alert("Caracteres especiais não são válidos.");
        this.value = "";
      }
    });
});
