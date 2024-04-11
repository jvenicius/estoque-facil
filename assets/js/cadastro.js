const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");
const telefone = document.querySelector("#fone");
const senha = document.querySelector("#senha");
const senhaRepetida = document.querySelector("#senha-repetida");
const submit = document.querySelector("#submit");

const userField = document.querySelector(".user-field");

function createErrorMessage(field, message) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.classList.add("error-message");
  field.appendChild(errorMessage);
}

function nomeEhValido() {
  if (nome.value.length == 0) {
    createErrorMessage(userField, "*O nome deve conter no mínimo 3 letras.")
    alert("nome vazio!");
    return false;
  }

  nomeTemp = nome.value.trim();

  //   Eu vou voltar, não tá funcionando acento
  const onlyLetters = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(nomeTemp);
  //   ^[\p{L}\s]+(?:\s[\p{L}\s]*)*$

  if (nomeTemp.length <= 2 || !onlyLetters) {
    alert("Seu nome é inválido!");
    nome.value = "";
    return false;
  } else {
    alert("Seu nome está correto!");
    return true;
  }
}

function cpfEhValido() {
  if (cpf.value.length == 0) {
    alert("cpf vazio!");
    return false;
  }

  const cpfTemp = cpf.value.trim();

  const verificaOnzeDigitos = /^\d{11}$/.test(cpfTemp);

  if (!verificaOnzeDigitos) {
    alert("Seu cpf é inválido!");
    cpf.value = "";
    return false;
  } else {
    alert("Seu cpf está correto!");
    return true;
  }
}

function emailEhValido() {
  if (email.value.length == 0) {
    alert("email vazio!");
    return false;
  }

  const emailTemp = email.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailEhValido = emailRegex.test(emailTemp);

  if (!emailEhValido) {
    alert("Seu email é inválido!");
    email.value = "";
    return false;
  } else {
    alert("Seu email está correto!");
    return true;
  }
}

function telefoneEhValido() {
  if (telefone.value.length == 0) {
    alert("telefone vazio!");
    return false;
  }
  const telefoneTemp = telefone.value.trim();

  const telefoneRegex = /^\(?\d{2}\)?\d{5}-?\d{4}$/;
  const telefoneEhValido = telefoneRegex.test(telefoneTemp);

  if (!telefoneEhValido) {
    alert("Seu telefone é inválido!");
    telefone.value = "";
    return false;
  } else {
    alert("Seu telefone está correto!");
    return true;
  }
}

function senhaEhValida() {
  if (senha.value.length == 0) {
    alert("senha vazio!");
    return false;
  }

  const senhaTemp = senha.value.trim();

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)[^\s]{8,}$/;
  const senhaEhValida = senhaRegex.test(senhaTemp);

  if (!senhaEhValida) {
    alert(
      "Sua senha deve possuir ao menos 8 caracteres, incluindo letras e números! Não deve possuir espaços"
    );
    return false;
  } else {
    alert("Sua senha é válida!");
    return true;
  }
}

function verificaSeAsSenhasSaoIguais() {
  if (senhaRepetida.value.length == 0) {
    alert("senha repetida vazia!");
    return false;
  }

  const senhaTemp = senha.value.trim();
  const senhaRepetidaTemp = senhaRepetida.value.trim();

  if (senhaTemp !== senhaRepetidaTemp) {
    alert("As senhas são diferentes!");
    return false;
  } else {
    alert("As senhas são iguais!");
    return true;
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const retornoNome = nomeEhValido();
  const retornoCPF = cpfEhValido();
  const retornoEmail = emailEhValido();
  const retornoTelefone = telefoneEhValido();
  const retornoSenha = senhaEhValida();
  const retornoSenhasIguais = verificaSeAsSenhasSaoIguais();

  if (
    !retornoNome ||
    !retornoCPF ||
    !retornoEmail ||
    !retornoTelefone ||
    !retornoSenha ||
    !retornoSenhasIguais
  ) {
    alert("Verifique os erros do formulário!");
    senha.value = "";
    senhaRepetida.value = "";
  } else {
    alert("Cadastro realizado com sucesso!");
  }
});
