function camelize(str) {
    let palabras = str.split(" ");
    palabras[0] = palabras[0].charAt(0).toLowerCase() + palabras[0].slice(1);
    for (let index = 1; index < palabras.length; index++) {
        palabras[index] = palabras[index].charAt(0).toUpperCase() + palabras[index].slice(1);
    }
    palabrasCamelizadas = palabras.join("");
    return palabrasCamelizadas
};


console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');