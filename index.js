var frases = ["Lo que digo es", "O  L  E  G", "Validar", "El ok para el ok", "Gracias Alan", ];
var fraseAleatoria;

function generarFraseAleatoria() {
  fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").innerHTML = fraseAleatoria;
}

document.getElementById("button").onclick = generarFraseAleatoria;