let numeroMaximo = 10;
let numerosSorteados = [];
let numeroSecreto = numeroRandom(); 
let intentos = 1;

function textoDeElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

textoDeElementos('h1', 'Juego del número secreto');
textoDeElementos('p', `Indica un número del 1 al ${numeroMaximo}`); 


function nombreDeUsuario(){ 
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value); 

    if (numeroDeUsuario === numeroSecreto) {
        textoDeElementos('p', `¡Felicidades, has adivinado el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 

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
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    

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
    valorCaja = document.querySelector('#numeroUsuario').value = '';
return;
}

function reiniciarJuego(){
    valorCaja = document.querySelector('#numeroUsuario').value = '';
    textoDeElementos('p', `Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'True'); 
    numeroSecreto = numeroRandom();
    intentos = 1;
    return;
}



