var button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", function(event) {
    event.preventDefault();
    var paciente = new Paciente();
    paciente.executa();
});
