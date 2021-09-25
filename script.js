// regras do imc peso/altura sobre 2
//resultados, menor q 18,4= desnutriçao / 18,5 a 24,9 = normal /25 a 29,9 = pré-obesidade /
// 30 a 34,5 = obesidade grau 1 / 35 a 39,9 obesidade grau 2 / maior q 40 = obesidade grau 3

var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
var calcular = document.getElementById("calcular");
var conclusao = document.getElementById("conclusao");
var resultado = "";

function calcularimc() {
  let kg = parseFloat(peso.value);
  let cm = parseFloat(altura.value);
  let resultado = kg / (cm * 2);

  if (resultado <= 18.4) {
    conclusao.innerHTML =
      "Estado de desnutrição ou magreza, você está um pouco a baixo do peso recomendado";
  } else if (resultado <= 24.9) {
    conclusao.innerHTML =
      "Estado normal, você está dentro do peso recomendado ";
  } else if (resultado <= 29.9) {
    conclusao.innerHTML =
      "Sobrepeso, você está um pouco a cima do peso recomendado";
  } else if (resultado <= 40) {
    conclusao.innerHTML =
      "Estado de obesidade, você está muito acima do seu peso recomendado";
  } else {
    conclusao.innerHTML = "saiu algo errado, tente novamente";
  }
}
