window.onload = function () {
    var texto = document.getElementById("texto");
    document.getElementById("n").addEventListener("click", negrita);
    document.getElementById("nyc").addEventListener("click", negritaycursiva);
    var div = document.getElementById("divi");
    div.childNodes[1].addEventListener("click", cambiarColor);
    var boton = document.getElementById("divi").childNodes[1];

    function negrita() {
        texto.classList.toggle("estiloN");
    }

    function negritaycursiva() {
        texto.classList.toggle("estiloNyC");
    }

    function cambiarColor() {
        boton.parentNode.classList.toggle("estiloDiv")
    }

    var parrafo = document.createElement("p");
    document.getElementById("frase").style.display = "none";
    
    var boton2 = document.getElementById("btnboton2");
    boton2.addEventListener("click", añadep);

    function añadep() {
        var contenidoParrafo = document.createTextNode(document.getElementById("frase").innerHTML);
        parrafo.appendChild(contenidoParrafo);
        // Se añade al párrafo como último hijo de body.
        document.body.appendChild(parrafo);
    }


};