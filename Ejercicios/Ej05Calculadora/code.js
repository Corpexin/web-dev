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
    //Variable booleana que comprueba si se puede introducir un punto o no en relacion a los elementos pulsados
    var reseteadorPunto = true; 

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
        var booleano = false;
        var impreso = false;

        //Si el boton presionado es un operador se resetea el punto
        if (operadores.indexOf(this) != -1) {
            reseteadorPunto = true;
        }


        //Si el boton pulsado es un operador o 1 punto y el utimo caracter tambien es un operador o un punto, no imprime el boton pulsado
        if (operadores.indexOf(this) != -1 || this.children[0].innerHTML == '.') {
            for (var i = 0; i < operadores.length; i++) { //recorre todos los operadores
                var ultimoCaracter = salidaDatos.children[0].innerHTML.charAt(salidaDatos.children[0].innerHTML.length - 1); //guarda el ultimo caracter
                if (ultimoCaracter == operadores[i].children[0].innerHTML ||
                    ultimoCaracter == '*' ||
                    ultimoCaracter == '.') {
                    booleano = true;
                }
            }

        }

        //Se acorta el tamaño de la cadena para que los numeros no se salgan de la pantalla
        if (salidaDatos.children[0].innerHTML.length > 25) {
            booleano = true
        }

        //Imprime por pantalla
        if (booleano == false) {
            if (reseteadorPunto == true || this.children[0].innerHTML != '.') {
                salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML + this.children[0].innerHTML;
                salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML.replace("x", "*");
                impreso = true;
            }
        }

        //Evitar poner mas de 1 punto por numero
        if (this.children[0].innerHTML == '.' && impreso == true) {
            reseteadorPunto = false;
        }

        //Para que no empiece con un operador-punto que no sea el menos
        if (salidaDatos.children[0].innerHTML.length == 1 && (
                this.children[0].innerHTML == 'x' ||
                this.children[0].innerHTML == '/' ||
                this.children[0].innerHTML == '+' ||
                this.children[0].innerHTML == '.')) {
            salidaDatos.children[0].innerHTML = "";
            reseteadorPunto = true;
        }
    }

    //Se resuelve la operacion de salida por pantalla
    function resolver() {
        if (salidaDatos.children[0].innerHTML.length != 0) {
            var textoSalidaPantalla = salidaDatos.children[0].innerHTML;
            salidaDatos.children[0].innerHTML = eval(textoSalidaPantalla);


            //Recorro toda la impresion. Si tiene un . no reseteo el punto, pero si no lo tiene si lo reseteo
            var comprobacion = salidaDatos.children[0].innerHTML;
            reseteadorPunto = true;
            for (var i = 0; i < comprobacion.length; i++) {
                if (comprobacion.charAt(i) == '.') {
                    reseteadorPunto = false;
                }
            }

        }
    }

    //Se resetean los campos
    function resetear() {
        salidaDatos.children[0].innerHTML = "";
        reseteadorPunto = true;
    }



}