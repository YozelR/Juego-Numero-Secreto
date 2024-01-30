let numeroMaximo = 10;
let numerosSorteados = [];
let numeroSecreto = numeroRandom(); //declaramos la variable numeroSecreto, y la igualamos al nombre de la funcion que genera el numero random, en la funcion, declaramos le comando return, para que nos devuelva el valor, y lo imprimimos en la consola con el console.log
let intentosDisponibles = 3;
let intentos = 1;


console.log(numeroSecreto);


function textoDeElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

textoDeElementos('h1', 'Juego del número secreto'); // Establecemos el titulo del juego, abreviando el comando.
textoDeElementos('p', `Indica un número del 1 al ${numeroMaximo}`); //Establecemos el texto del parrafo


function nombreDeUsuario(){ //creamos una funcion para que aparezca una alerta cada que se de click en el boton vinculado a 'intento de usuario'
 //   let numeroSecreto = Math.floor(Math.random()*10)+1; //Podemos cambiar el 'let' por 'return' para que lo mande a consola
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value); //llamamos el elemento 'input', pero usando el document.getElementById, tomando el valor con el .value del final
   
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        textoDeElementos('p', `¡Felicidades, has adivinado el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 

    //si el usuario no acierta
    else{
        if(numeroSecreto > numeroDeUsuario ){
            textoDeElementos('p', 'El número secreto es mayor.');
        } 
        else {
            textoDeElementos('p', 'El número secreto es menor.');
        }
    }
  
    intentos++;
    limpiarCaja();

    return;
    }

function numeroRandom() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Podemos cambiar el 'let' por 'return' para que lo mande a consola
    
console.log(numerosSorteados);

    if (numerosSorteados.length == numeroMaximo) {
         textoDeElementos('p', 'Ya has adivinado todos los números.');
    }

    else if (numerosSorteados.includes(numeroGenerado)) {
        return numeroRandom();
    }
    
    else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function limpiarCaja() {
    valorCaja = document.querySelector('#numeroUsuario').value = ''; // en esta linea, se combino el "valorCaja.value = '';" con en "let valorCaja", para hacerlo todo mas sencillo y en una sola linea.
return;
}

function reiniciarJuego(){ //En esta función, cambiamos los mensajes de la funcion nombreDeUsuario, para empezar un juego nuevo. Generamos un numero aleatorio nuevo, reiniciamos contador de intentos y desactivamos el boton de nuevo juego.
    valorCaja = document.querySelector('#numeroUsuario').value = '';
    textoDeElementos('p', `Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'True'); 
    numeroSecreto = numeroRandom();
    intentos = 1;
   // arrayDeNumerosSecretos();
    console.log(numeroSecreto);
    return;
}

//13.- Puse el Math.random dentro de la funcion nombreDeUsuario, para que el número random cambie con cada click que se haga en el botón.
//13.- Declaramos la función parseInt para que el valor de la caja de texto no sea un string, sino un número.
//19.- El triple = hace que aparte de comparar valores, compare el tipo de valor, siendo esta, una condición más estricta para la función.

