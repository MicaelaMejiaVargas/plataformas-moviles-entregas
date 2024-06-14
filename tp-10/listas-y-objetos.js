var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

//01 - ordenarPorApellido
function ordenarPorApellido(listaDePersonas) {
        return listaDePersonas.sort((a, b) => a.apellido.localeCompare(b.apellido));
    }
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

//02 - soloNombres
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre); 
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

//03 - promedioEdades
function promedioEdades(listaDePersonas) {
    const totalEdades = listaDePersonas.reduce((acc, persona) => acc + persona.edad, 0);
    return totalEdades / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

//04 - soloMayoresDeEdad
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

//05 - laPersonaMayor
function laPersonaMayor(listaDePersonas) {
    return listaDePersonas.reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor));
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));