//console.log(document.querySelector("h1"));
//var titulo = document.querySelector("h1");
//alert(titulo);
//alert(titulo.textContent);

//var titulo_2 = document.querySelector(".subtitulo);
//console.log(titulo_2.textContent);

// var titulo = document.querySelector("h1")
// console.log(titulo.textContent)
// titulo.textContent = ("Batata")

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var tdN1 = paciente.querySelector(".info-n1");
    var n1 = tdN1.textContent;
    var tdN2 = paciente.querySelector(".info-n2");
    var n2 = tdN2.textContent;
    var tdMedia = paciente.querySelector(".info-media");
    var media = tdMedia.textContent

    var media = calculaM(n1, n2);
    tdMedia.textContent = media;
}

function calculaM(n1, n2){
    var media = 0;
    media = (parseFloat(n1) + parseFloat(n2)) / 2;

    return media.toFixed(2);
}
//if(!pesoEhValido){
//     console.log("Peso invalido!");
//     pesoEhvalido = false;
//     tdImc.textContent = "Peso invalido";
//     paciente.classList.add("paciente-invalido");
// }