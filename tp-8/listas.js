//01 - invertirLista ----------------------------------------------------------
const listaNumerosEjemplo = [2,14,6,-1,5,-4,0,30];

function invertirLista(listOfNumbers){ 
    let newArray=[];
    for(let i=listOfNumbers.length-1;i>=0;i--){ 
        newArray.push(listOfNumbers[i]) 
    }
    console.log(`Lista normal:${listOfNumbers}, Lista invertida:${newArray}`)
}
//invertirLista([1,2,3,4,8,7,6,5]);

//02 - calcularPromedio ------------------------------------------------------
function calcularPromedio(listaDeNumeros){
    let acumulador=0;
    listaDeNumeros.forEach(e=>acumulador+=e);
    acumulador/=listaDeNumeros.length;
    return acumulador;
}
console.log("calcularPromedio(listaNumerosEjemplo):", calcularPromedio(listaNumerosEjemplo));

//03- Crear lista de numeros ---------------------------------------------------
const crearListaDeNumeros=(i,f)=>{
    let nuevoArray= []; 
    while(i<=f){
        nuevoArray.push(i);
        i+=1;
    } 
    return nuevoArray;
};
console.log("crearListaDeNumeros(2,9): ", crearListaDeNumeros(2,9));

//04 -ordenarDeMayorAMenor -----------------------------------------------------
const ordenarDeMayorAMenor= function(listaDeNumeros) {
    function comparar(a, b) {
        return b - a;
    }
    return listaDeNumeros.sort(comparar);
} 
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));

//05 - encontrarNumeroMayor -----------------------------------------------------
const encontrarNumeroMayor = listaDeNumeros => Math.max(...listaDeNumeros); 
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));

//06 - Ordenar palabras por longitud --------------------------------------------
function orderByLength(unorderedList){
    return unorderedList.sort(function (a, b) {
        return (a.length - b.length);
    });
}
let sortedArray = orderByLength(['a','abcde','abc','ac']);
console.log(sortedArray);

//07 - encontrarNumeroMenor ----------------------------------------------------
const encontrarNumeroMenor = listaDeNumeros => Math.min(...listaDeNumeros); 
console.log(`encontrarNumeroMenor(listaNumerosEjemplo): ${encontrarNumeroMenor(listaNumerosEjemplo)}`);

//08 - filtrarSoloPositivos ----------------------------------------------------
const filtrarSoloPositivos= listaDeNumeros=>{return listaDeNumeros>0};
console.log("listaNumerosEjemplo(filtrarSoloPositivos): ", listaNumerosEjemplo.filter(filtrarSoloPositivos)); 

//09 - contarAprobados
function contarAprobados(listaDeNotas) {
    let aprobados = 0;
    for(let nota of listaDeNotas){
        if(nota >= 6){
            aprobados++;
        }
    }
    return aprobados;
}
console.log(contarAprobados([10, 2, 6, 7, 1, 9]))

//10 - filtrarSoloTruthy
function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => valor);
}
console.log(filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]))

//11 - enumerarLista
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) {
        return "";
    }
    let oracion = "";
    for (let i = 0; i < listaDePalabras.length; i++) {
        oracion += listaDePalabras[i];
        if (i === listaDePalabras.length - 2) {
            oracion += " y "; 
        } else if (i < listaDePalabras.length - 1) {
            oracion += ", "; 
        }
    }

    oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1); 
    oracion = oracion.trim(); 
    oracion += "."; 

    return oracion;
}

console.log(enumerarLista(["Han", "Leia", "Luke", "Yoda"])); 
