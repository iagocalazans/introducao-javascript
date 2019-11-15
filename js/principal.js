var adicionar = document.querySelector("#adicionar-paciente");
var limpar = document.querySelector("#limpar-historico");

adicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var paciente = new Paciente();
    paciente.executa();
});

limpar.addEventListener("click", function(event) {
    event.preventDefault();

    var calculos = document.querySelectorAll(".paciente");
    for (i=0; i < calculos.length; i++) {
        calculos[i].remove();
    }
});
