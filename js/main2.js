function cambiarTexto() {
    document.getElementById("texto").innerText = "¡El texto ha cambiado!";
  }
  function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const errorMensaje = document.getElementById("error");
  
    if (nombre === "") {
      errorMensaje.innerText = "El campo de nombre no puede estar vacío.";
      return false; // Evita el envío del formulario
    } else {
      errorMensaje.innerText = "";
      alert("Formulario enviado correctamente.");
      return true; // Permite el envío del formulario
    }
  }
  function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado = "Por favor, ingresa números válidos.";
    } else {
      switch (operacion) {
        case "sumar":
          resultado = num1 + num2;
          break;
        case "restar":
          resultado = num1 - num2;
          break;
        case "multiplicar":
          resultado = num1 * num2;
          break;
        case "dividir":
          resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero";
          break;
        default:
          resultado = "Operación no válida";
      }
    }
  
    document.getElementById("resultado").innerText = resultado;
  }
      