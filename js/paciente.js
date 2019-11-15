class Paciente {
    constructor() {
        this.nome = this.getData("nome");
        this.altura = this.getData("altura");
        this.peso = this.getData("peso");
        this.imc = this.calculaImc(this.peso,this.altura,4);
        this.pesoIdeal = this.calculaPesoIdeal(this.altura,2);
    }

    executa() {
        this.tr = document.createElement("tr");
        this.tr.classList.add("paciente");

        this.createTd("nome",this.nome);
        this.createTd("altura",this.peso,true);
        this.createTd("peso",this.altura);
        this.createTd("imc",this.imc);

        var tabelaPaciente = document.querySelector("#tabela-pacientes");
        tabelaPaciente.appendChild(this.tr);

        this.clear = true;

        this.valida(this.peso,0,600,"Peso inválido!");
        this.valida(this.altura,0.5,3,"Altura Inválida!");
        this.limpa();
    }

    getData(id) {
        var data = document.querySelector("#"+id).value;
        return data;
    }

    createTd(id,text,pesoIdeal=false) {
        var createTd = document.createElement("td");
        if (pesoIdeal) {
            text = text + " (" + this.pesoIdeal + ")";
        }
        createTd.textContent = text;
        createTd.classList.add("info-"+id);
        this.tr.appendChild(createTd);
    }

    calculaImc(peso,altura,size) {
        var imc = peso / (altura * altura);
        return imc.toFixed(size);
    }

    calculaPesoIdeal(altura,size) {
        var ideal = 21.7 * (altura*altura);
        return ideal.toFixed(size);
    }

    limpa() {
        if (this.clear) {
            var formPaciente = document.querySelector("#form-adiciona");
            var inputList = formPaciente.querySelectorAll("input");

            var i = 0;
            for (i=0; i<inputList.length; i++) {
                inputList[i].value = "";
            }
        }
    }

    valida(value,rule1,rule2,text) {
        if (value <= rule1 || value >= rule2) {
            this.tr.remove();
            alert(text);
            this.clear = false;
        }
    }
}
