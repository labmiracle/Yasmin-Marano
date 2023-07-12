function addOnlyNums(...arg) {
    let resultado = 0;
    for (let iterator of arg) {
        if (typeof iterator === 'number') {
     resultado += iterator;
            
        }
        
    }
return resultado;
}


console.log(addOnlyNums(14, "holi", 4, 5));