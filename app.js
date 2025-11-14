function calcular() {
  const peso = +document.getElementById('peso').value;
  const altura = +document.getElementById('altura').value;
  const resultado = document.getElementById('resultado');

  if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
    return mostrar("Digite valores válidos!", "alerta");
  }

  const imc = peso / (altura ** 2);
  let msg, classe;

  if (imc < 18.5) {
    [msg, classe] = ["Abaixo do peso", "atencao"];
  } else if (imc < 25) {
    [msg, classe] = ["Peso normal", "normal"];
  } else if (imc < 30) {
    [msg, classe] = ["Sobrepeso", "atencao"];
  } else {
    [msg, classe] = ["Obesidade", "alerta"];
  }

  mostrar(`IMC: ${imc.toFixed(2)}<br>${msg}`, classe);

  function mostrar(texto, tipo) {
    resultado.innerHTML = texto;
    resultado.className = tipo;
  }
}