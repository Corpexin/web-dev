window.onload = function () {

    //Variable array que contendra los 10 numeros (0-9)
    var numeros = [];
    //Variable Operadores que contiene los 4 operadores
    var operadores = [document.getElementById("mas"),
                      document.getElementById("menos"),
                      document.getElementById("por"),
                      document.getElementById("entre")];
    //Variable que muestra en pantalla los numeros y resultados
    var salidaDatos = document.getElementById("result");
    //Variable de igual
    var igual = document.getElementById("igual");
    //Variable de punto
    var punto = document.getElementById("punto");
    //Variable de reseteo
    var reset = document.getElementById("c");


    //Cogemos las teclas de los 10 numeros y las metemos en un array de numeros. Le añadimos un onclick
    for (var i = 0; i < 10; i++) {
        numeros[i] = document.getElementById(i);
        numeros[i].onclick = clickTecla;
    }

    //Añadimos onClick a los operadores
    for (var i = 0; i < operadores.length; i++) {
        operadores[i].onclick = clickTecla;
    }

    //Añadimos onClick al resto
    igual.onclick = resolver;
    punto.onclick = clickTecla;
    reset.onclick = resetear;

    //Cada vez que se hace click en una tecla, se va añadiendo a la salida por pantalla
    function clickTecla() {
        salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML + this.children[0].innerHTML;
        salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML.replace("x", "*");
    }

    //Se resuelve la operacion de salida por pantalla
    function resolver() {
        var equation = salidaDatos.children[0].innerHTML;
        var lastChar = equation[equation.length - 1];
        salidaDatos.children[0].innerHTML = eval(equation);
    }

    //Se resetean los campos
    function resetear() {
        salidaDatos.children[0].innerHTML = "";
    }

}