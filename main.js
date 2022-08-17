/*
----função para apenas um botão---- 

function tocaSomPom() { 
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/


//construção da função usando listas
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
        if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
        } else {
                console.log ("Elemento não encontrado");
        }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
Contruindo com While:

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //*********template string**********
    const idAudio =`#som_${instrumento}`;
    //*********template string**********

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    contador += 1;
}
*/

//Contruindo com For:

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //*********template string**********
    const idAudio =`#som_${instrumento}`;
    //*********template string**********

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // -------------------- Aprimoramento de código  --------------------
// nevegação com teclado

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
