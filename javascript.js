function calcular() {
     const pesoInput = document.getElementById('peso');
     const estaturaInput = document.getElementById('estatura');
     const errorDiv = document.getElementById('mensaje-error');

     const peso = parseFloat(pesoInput.value);
     const estaturaCm = parseFloat(estaturaInput.value);
 
     if (isNaN(peso) || isNaN(estaturaCm) || peso < 3 || peso > 200 || estaturaCm < 30 || estaturaCm > 250) {
    
     pesoInput.classList.add('border-red-500', 'ring-2', 'ring-red-500');
     estaturaInput.classList.add('border-red-500', 'ring-2', 'ring-red-500');
    
     errorDiv.innerText = "⚠️ Ingresa valores reales";
     errorDiv.classList.remove('hidden');
     return; 
       }
     errorDiv.classList.add('hidden');
     pesoInput.classList.remove('border-red-500', 'ring-red-500');
     estaturaInput.classList.remove('border-red-500', 'ring-red-500');

     const estaturaMetros = estaturaCm / 100;
     const imc = (peso / (estaturaMetros * estaturaMetros)).toFixed(1);
     let mensaje = "";
     let color = "";

     if (imc < 18.5) { mensaje = "Bajo peso 🥗"; color = "text-blue-500"; }
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
     document.getElementById('peso').classList.remove('border-red-500', 'ring-red-500');
     document.getElementById('estatura').classList.remove('border-red-500', 'ring-red-500');
    
     document.getElementById('pantalla-inicio').classList.remove('hidden');
     document.getElementById('pantalla-resultado').classList.add('hidden');
     document.getElementById('pantalla-error').classList.add('hidden');
}

function limpiar() {
    document.getElementById('peso').value = "";
    document.getElementById('estatura').value = "";
    document.getElementById('peso').classList.remove('border-red-500', 'ring-red-500');
    document.getElementById('estatura').classList.remove('border-red-500', 'ring-red-500');
    }
    
    const inputPeso = document.getElementById('peso');
    const inputEstatura = document.getElementById('estatura');

    const ejecutarConEnter = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        calcular(); 
    }
 };

    inputPeso.addEventListener('keypress', ejecutarConEnter);
    inputEstatura.addEventListener('keypress', ejecutarConEnter);
   
    const btnAlimentos = document.getElementById('btn-alimentos');
    const listaAlimentos = document.getElementById('lista-alimentos');


    btnAlimentos.addEventListener('click', () => {
    listaAlimentos.classList.toggle('hidden');
});
    