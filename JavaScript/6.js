

const carrito = {
    productos: [
        {
            nombre: 'papel higienico',
            unidades: 4,
            precio: 5
        },
        {
            nombre: 'queso',
            unidades: 2,
            precio: 6.5
        }
    ],
    get precioTotal() {
        let totalCarrito = 0;
        for (let index = 0; index < this.productos.length; index++) {
            totalCarrito = totalCarrito + this.productos[index].unidades * this.productos[index].precio;
            
        }
        return totalCarrito;
    }
}; 

console.log(carrito.precioTotal);
///// 33 