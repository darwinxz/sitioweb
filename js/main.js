function verificarRespuestaPrimaria() {
    const respuesta = document.getElementById('respuesta-primaria').value;
    const feedback = document.getElementById('feedback-primaria');
    
    if (respuesta == 8) {
        feedback.textContent = "¡Correcto! El siguiente número es 8.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Intenta de nuevo. El número correcto es 8.";
        feedback.style.color = "red";
    }
}
function calcularEdadMascota() {
    let edadHumana = document.getElementById("edadHumana").value;
    let edadMascota = edadHumana * 7;  // Supongamos que 1 año humano equivale a 7 años de mascota
    document.getElementById("resultado").textContent = 
        "Tu mascota tiene aproximadamente " + edadMascota + " años de mascota.";
}

