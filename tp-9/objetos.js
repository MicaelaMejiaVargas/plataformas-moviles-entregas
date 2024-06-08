//01 - crearPersona
function crearPersona(nombre, apellido, edad, documento) {
    return {
        /*javascrip reconoce de esta manera por tener el mismo nombre al igual que:
        --> el primer nombre es la clave y el valor enrealidad es el paramentro que le pasa la funcion
        nombre,
        apellido,
        edad,
        documento, */
        
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento,
    }
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

//Objeto personaEjemplo
var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

// 02 - agregarApodo
function agregarApodo(persona, apodo) {
    persona.apodo=apodo;
    return persona.apodo;    
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));
console.log(personaEjemplo);


//03 - sinDocumento
function sinDocumento(persona) {
    return delete persona.documento;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));
console.log(personaEjemplo);

//04 - nombreCompletoDePersona
function nombreCompletoDePersona(persona) {
    return persona.apellido +" "+ persona.nombre; 
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));



//05 - felizCumpleaños
function felizCumpleaños(persona) {
    return{
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad + 1,
        //documento dara indefinido porque lo borre anteriormente jejeje
        documento: persona.documento,
    }
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

//06 - sonLaMismaPersona
function sonLaMismaPersona(persona1, persona2) {
    return persona1 === persona2;
}
//Va a devolver falso, porque el objeto de persona2, no cuenta con apodo, ni con edad de 21 años, ademas posee dni cosa que a persona 1 se le elimino
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));
