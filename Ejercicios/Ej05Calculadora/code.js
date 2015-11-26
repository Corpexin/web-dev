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
    var booleanoPunto = true;

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


        //Comprueba que lo pulsado pueda ser un reseteador de puntos
        if (operadores.indexOf(this) != -1) {
            booleanoPunto = true;
        }


        //Para que no puedan ir 2 operadores seguidos o 1 operador y 1 punto
        if (operadores.indexOf(this) != -1 || this.children[0].innerHTML == '.') {
            for (var i = 0; i < operadores.length; i++) {
                var ultimoCaracter = salidaDatos.children[0].innerHTML.charAt(salidaDatos.children[0].innerHTML.length - 1);
                if (ultimoCaracter == operadores[i].children[0].innerHTML ||
                    ultimoCaracter == '*' ||
                    ultimoCaracter == '.') {
                    booleano = true;
                    booleanoPunto = true;
                }
            }

        }

        //Se acorta el tamaño de la cadena para que los numeros no se salgan de la pantalla
        if (salidaDatos.children[0].innerHTML.length > 25) {
            booleano = true
        }

        //Imprime por pantalla
        if (booleano == false && booleanoPunto == true) {
            salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML + this.children[0].innerHTML;
            salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML.replace("x", "*");

            //Para que no empiece con un operador-punto que no sea el menos
            if (salidaDatos.children[0].innerHTML.length == 1 && (
                    this.children[0].innerHTML == 'x' ||
                    this.children[0].innerHTML == '/' ||
                    this.children[0].innerHTML == '+' ||
                    this.children[0].innerHTML == '.')) {
                salidaDatos.children[0].innerHTML = "";
            }
        } else if (booleano == false && this.children[0].innerHTML != '.') {
            salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML + this.children[0].innerHTML;
            salidaDatos.children[0].innerHTML = salidaDatos.children[0].innerHTML.replace("x", "*");


        }

        //Evitar poner mas de 1 punto por numero
        //si recibo un punto y ademas ese punto ha sido imprimido entonces si se pone a false.Comprobar que no genere conflicto
        //poner un boolean cuando imprima 
        if (this.children[0].innerHTML == '.') {
            booleanoPunto = false;
        }

        //Para que no empiece con un operador-punto que no sea el menos
        if (salidaDatos.children[0].innerHTML.length == 0 && (
                this.children[0].innerHTML == 'x' ||
                this.children[0].innerHTML == '/' ||
                this.children[0].innerHTML == '+' ||
                this.children[0].innerHTML == '.')) {
            salidaDatos.children[0].innerHTML = "";
            booleanoPunto = true;
        }
    }

    //Se resuelve la operacion de salida por pantalla
    function resolver() {
        if (salidaDatos.children[0].innerHTML.length != 0) {
            var textoSalidaPantalla = salidaDatos.children[0].innerHTML;
            salidaDatos.children[0].innerHTML = eval(textoSalidaPantalla);
            booleanoPunto = true;
        }
    }

    //Se resetean los campos
    function resetear() {
        salidaDatos.children[0].innerHTML = "";
        booleanoPunto = true;
    }



}