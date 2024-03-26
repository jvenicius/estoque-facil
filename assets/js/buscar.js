const ehPersonalizado = document.querySelector("#personalizado");
var dataPersonalizada = document.querySelector("#dataPersonalizada");

const periodos = document.querySelectorAll('input[name="intervaloDeTempo"]');

const verificaSePersonalizadoEstaMarcado = () => {
  if (ehPersonalizado.checked) {
    dataPersonalizada.style.display = "inherit";
  } else {
    dataPersonalizada.style.display = "none";
  }
};

periodos.forEach((radio) => {
  radio.addEventListener("change", verificaSePersonalizadoEstaMarcado);
});


ehPersonalizado.addEventListener("change", verificaSePersonalizadoEstaMarcado);
