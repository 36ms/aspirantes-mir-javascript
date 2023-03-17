let persona = {

    nombre: "Juan David",
    edad: 35,
    ciudad: "Los Ángeles",
    profesion: "Diseñador grafico"
}

console.log(persona);

function presentacion (persona) {
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies= ["skate", "climb", "gym", "motorcycle"];

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.lengtha; i++) {
    console.log(persona.hobbies[i]);
}



