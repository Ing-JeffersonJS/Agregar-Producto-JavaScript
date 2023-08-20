
class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio){

        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio (){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return`idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio} `;
    }
}

let Producto1 = new Producto("Computadora", 3000000);
let Producto2 = new Producto("Disco SSD", 40000);
console.log(Producto1);
console.log(Producto2);