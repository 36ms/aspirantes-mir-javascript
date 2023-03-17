let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies:  ["programar", "squash", "piano"]
}

console.log (pedro.edad)
console.log (pedro.hobbies)

pedro.estatura= 1.8;

delete pedro.activo;

// Recorremos todas las propiedades del objeto e imprimimos cada una en consola

for (const key in pedro) { 
    console.log(`${key}: ${pedro[key]}`);
}

// Agregamos una función al objeto

pedro.saluda = function () {
  return "Hola, me llamo " + pedro.nombre;
}

 console.log(pedro.saluda());

 