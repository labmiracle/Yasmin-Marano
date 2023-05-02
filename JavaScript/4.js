function palabraMasLarga(str) {
    if (typeof str !== "string") {
        return "ingresar una cadena de texto";
      }
    
    const separadaPorEspacios = str.split(" ");
    let palabraMasLarga = separadaPorEspacios[0];
    for (let palabra of separadaPorEspacios) {
        if (palabra.lenght >= palabraMasLarga.lenght) {
            palabraMasLarga = palabra;
            
        }
    } return palabraMasLarga;
};

console.log(palabraMasLarga(45));
// Ingresar una cadena de texto
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');