function calcular() {
    const pesoVal = document.getElementById('peso').value;
    const estaturaVal = document.getElementById('estatura').value;
    if (pesoVal === "" || estaturaVal === "") {
    document.getElementById('pantalla-inicio').classList.add('hidden');
    document.getElementById('pantalla-error').classList.remove('hidden');
    return;
    }

    const peso = parseFloat(pesoVal);
    const estatura = parseFloat(estaturaVal) / 100;
    const imc = (peso / (estatura * estatura)).toFixed(1);

    let mensaje = "";
    let color = "";

    if (imc < 18.5) { mensaje = "Bajo peso 🍃"; color = "text-blue-500"; }
    else if (imc < 25) { mensaje = "Peso saludable ✅"; color = "text-green-600"; }
    else if (imc < 30) { mensaje = "Sobrepeso ⚠️"; color = "text-orange-600"; }
    else { mensaje = "Obesidad 🚨"; color = "text-red-600"; }

    const resDiv = document.getElementById('resultado');
    resDiv.innerText = imc;
    resDiv.className = `text-6xl font-black my-6 ${color}`;
    document.getElementById('categoria').innerText = mensaje;

    document.getElementById('pantalla-inicio').classList.add('hidden');
    document.getElementById('pantalla-resultado').classList.remove('hidden');
}

function volver() {
    document.getElementById('pantalla-inicio').classList.remove('hidden');
    document.getElementById('pantalla-resultado').classList.add('hidden');
    document.getElementById('pantalla-error').classList.add('hidden');
}

function limpiar() {
    document.getElementById('peso').value = "";
    document.getElementById('estatura').value = "";
}