

function palabraMasLarga(str) {
    if (typeof str !== "string") {
        return "ingresar una cadena de texto";
      }
    
    const palabras = str.split(" ");
    let palabraMasLarga = palabras[0];
    for (let palabra of palabras) {
        if (palabra.lenght >= palabraMasLarga.lenght) {
            palabraMasLarga = palabra;
            
        }
    } return palabraMasLarga;
};

console.log(palabraMasLarga(45));
// Ingresar una cadena de texto
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');


////////////////////////////////////////////////////////////////////////


function primeraMayuscula(str) {
    const palabras = str.split(" ");
    for (let index = 0; index < palabras.length; index++) {
     palabras[index] = palabras[index][0].toUpperCase() + palabras[index].substr(1);
        
    }
     palabrasEnMayuscula = palabras.join(" ");

   return palabrasEnMayuscula;
}

console.assert(primeraMayuscula("En un lugar de la Mancha") === "En Un Lugar De La Mancha");