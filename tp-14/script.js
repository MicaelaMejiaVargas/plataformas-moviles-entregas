// En lugar de tener un único boton para incrementar los puntos del equipo, 
//se desea tener un botón para incrementar (+) y otro para decrementar (-) los puntos de cada equipo.
function who(){
    const equipo=[];
    for(let i=0;i<2;i++){
        let consulta=prompt(`equipo ${i+1}`);
        equipo.push(consulta);
    } 
    const parrafos=document.querySelectorAll("p");
    parrafos[0].textContent=equipo[0];
    parrafos[1].textContent=equipo[1];
}
who();
function sumarPuntos(equipo) {
    // const puntosElement = document.getElementById('puntos-' + equipo);
    //     puntosElement.textContent = puntos;
    const elemento=document.querySelectorAll("span"); 
    if(equipo==="local"){
        let puntos = parseInt(elemento[0].textContent);
        puntos+=1;
        elemento[0].textContent=puntos;
    }else{
        if(equipo==="visitante"){
            let puntos = parseInt(elemento[2].textContent);
            puntos+=1;
            elemento[2].textContent=puntos;
        }
    }
}
function restarPuntos(equipo) {
    const elemento=document.querySelectorAll("span"); 
    estado=elemento[0,2].value;
    if(equipo==="local"){
        let puntos = parseInt(elemento[0].textContent);
        puntos-=1;
        elemento[0].textContent=puntos;
    }else{
        if(equipo==="visitante"){
            let puntos = parseInt(elemento[2].textContent);
            puntos-=1;
            elemento[2].textContent=puntos;
        }
    }
}

document.getElementById('sumar-local').addEventListener('click', function() {
    sumarPuntos('local');
});
document.getElementById('sumar-visit').addEventListener('click', function() {
    sumarPuntos('visitante');
});
document.getElementById('restar-visit').addEventListener('click', function() {
    restarPuntos('visitante');
});
document.getElementById('restar-local').addEventListener('click', function() {
    restarPuntos('local');
});

function resetPuntaje(){
    const puntajes=document.querySelectorAll("span");
    puntajes[0].textContent="0";
    puntajes[2].textContent="0";
}

//Agregar la acción de invertir puntaje, para intercambiar los puntos entre el equipo local y el equipo visitante.
function invertirPuntaje(){
    const puntajes=document.querySelectorAll("span");
    puntajeLocal=puntajes[0].textContent;
    puntajeVisitante=puntajes[2].textContent;
    puntajes[0].textContent=puntajeVisitante;
    puntajes[2].textContent=puntajeLocal;
}
document.getElementById('exchange').addEventListener('click', invertirPuntaje) 

//Agregar la acción de finalizar partido, que deshabilita los botones de puntaje, para que ya no se puedan sumar puntos. 
//Los botones se tendrían que volver a habilitar cuando se reinicia el tablero.
function finPartido(){ 
    
    let puntos = document.querySelectorAll('span'); 
    if(puntos[0].textContent==puntos[2].textContent){
        let mensaje = "Finalizo el partidazo, ¡Empate!";
        alert(mensaje);
    } else{ 
        if(puntos[0].textContent > puntos[2].textContent){
            let mensaje1 = "Finalizo el partidazo, Gano el Equipo Local";
            alert(mensaje1);
        } else{
            let mensaje2 = "Finalizo el partidazo, Gano el Equipo Visitante";
            alert(mensaje2);
        }
    }
}

document.getElementById("resetear").addEventListener("click",resetPuntaje);
document.getElementById("fin").addEventListener("click",finPartido);
