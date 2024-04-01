// Define variáveis do DOM
const searchIcon = document.querySelector("#search-icon");
const estoque = document.querySelector("#estoque");
const alerta = document.querySelector("#alerta");
const btnAlterarAlerta = document.querySelector("#btnAlterarAlerta");

// Funções (comportamentos)
function changeValues() {
  estoque.textContent = "30 un";
  alerta.textContent = "15 un";
}

// Eventos (Ex.: Ao clicar, dispara uma função)
searchIcon.addEventListener("click", changeValues);
btnAlterarAlerta.addEventListener("click", () => {
  prompt("Novo valor: ");
  prompt("Nova unidade de medida (kg/un): ");
  alert("Alerta alterado com sucesso!");
});
