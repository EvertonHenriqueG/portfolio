function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = "Por favor, preencha os campos corretamente.";
        resultado.style.color = "#ff6b6b";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> - ${classificacao}`;
    resultado.style.color = "#00ffcc";
}