window.onload = function () {
    var boton = document.getElementById("env");
    boton.addEventListener("click", enviar);

    function enviar() {
        var alerta = document.getElementById("alerta");
        alerta.style.display = "block";
        var texto = document.getElementById("texto");
        var nombre = document.getElementById("nombre");
        var edad = document.getElementById("edad");
        var repetidor = document.getElementById("repetidor");
        var poblacion = document.getElementById("poblacion");
        var sexo1 = document.getElementById("sexo1");
        var sexo2 = document.getElementById("sexo2");
        var comentario = document.getElementById("comentario");
        texto.innerHTML = "Nombre: "+nombre.value +"<br/>Edad: "+ edad.value +"<br/>Poblacion: "+ poblacion.value + "<br/>Comentario: " + comentario.value;
    }

    


};