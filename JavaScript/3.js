

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    if (!Number.isInteger(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada)) {
        return 'Ingresar números enteros positivos';
      }
    diasCrecimientoDeseado = ( alturaDeseada / (velocidadCrecimiento - velocidadDecrecimiento) );
    diasCrecimientoDeseado = Math.ceil(diasCrecimientoDeseado);
    return diasCrecimientoDeseado;

};
console.log(calcularDiasCrecimiento(4.1, 2, 20));
//// Ingresar números enteros positivos
console.log(calcularDiasCrecimiento(4, 2, 20)); 
//// 10
