// EJERCICO #1

function dameclick() {
    // console.log("imagenGoku");
    let imagenGoku = document.getElementById("imagenGoku");
    // imagenGoku.style.border = "solid red 2px";
    // console.log(imagenGoku.style.border);
if (imagenGoku.style.border === "") {
    imagenGoku.style.border = "solid 2px red";
} else {
    imagenGoku.style.border = "";
}

}


// EJERCICIO #2
function verificar() {

let input1 = document.getElementById("valor1");
let input2 = document.getElementById("valor2");
let input3 = document.getElementById("valor3");

let valor1 = Number(input1.value);
let valor2 = Number(input2.value);
let valor3 = Number(input3.value);

let resultado = valor1 + valor2 + valor3;
let resultadoText = document.getElementById("resultadoText");

if (resultado >10 ) {
    resultadoText.innerHTML = "llevas demasiados stikers";
} else if (resultado <= 10) {
    resultadoText.innerHTML = "LLevas " + resultado + " stikers en total";
}

}


// EJERCICIO #3

function calcular() {

    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    let select3 = document.getElementById("select3").value;


    // TOTAL SELECT
    let total = select1 + select2 + select3;
    let password = document.getElementById("password");

    // CLAVES CORRECTAS E INCORRECTAS
        if (total === "911") {
        password.innerHTML = "Password 1 correcto";
    } else if (total === "714") {
        password.innerHTML = "Password 2 correcto";
    } else {
        password.innerHTML = "Password incorrecto";
    }

}

