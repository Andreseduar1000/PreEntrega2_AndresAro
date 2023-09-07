//MI INTENCION ES IR HACIENDO UN PROGRAMA DE VENTA DE PRODUCTOS, MAYORMENTE DE VESTIMENTA, DONDE PODAMOS FILTRAR LOS PRODUCTOS
//Y ASI PODER DETERMINAR EL VALOR TOTAL DE LA COMPRA.

class productos{
    constructor(nombre,stock,precio){
        this.nombre=nombre;
        this.stock=stock;
        this.precio=precio;
    }


    getdatos(){
        console.log("----Producto-----");
        console.log(this.nombre);
        console.log("Stock actual:",this.stock);
        console.log("Precio: ",this.precio);
        console.log(" ");

    }

    getstock(){
        if (this.stock <=0){
            return false
        }
        else{
            return true
        }
    }

    actualizar(unidades){
        if(this.stock  >=unidades){
            this.stock=this.stock-unidades;
            return true
        }
        else{
            console.log("No tenemos suficiente stock");
            console.log("Nos quedan solamente: ",this.stock);
            return false
        }
    }


}


//INGRESO DE PRODUCTOS//
let seguir=0;
let lista_productos=[];


while(seguir!="no"){
    let nombre=prompt("Ingrese el nombre del producto: ");
    let precio=prompt("Ingrese el precio del producto: ");
    let stock=prompt("Ingrese el stock del producto: ");
    
    precio=parseFloat(precio);
    let producto= new productos(nombre,stock,precio);
    lista_productos.push(producto)

    seguir=prompt("Desea agregar otro producto? si/no?");
    
    }
//IMPRESION DE PRODUCTOS//
for(let producto of lista_productos){
    if (producto.stock > 0){ 
    producto.getdatos();
    }

    
}



//SISTEMA DE VENTAS

//FUNCION DE BUSQUEDA DE PRODUCTOS//
function buscar_productos(productos){
    return productos.nombre==compra_productos;
}

//FUNCION PARA AGREGAR IVA//

function agregar_iva(acu){
    let iva= acu*0.21;

    return iva
    
}


//FUNCION DE TOTAL DE COMPRA//
function precio_final(acu,resultado_iva){
    precio=acu+resultado_iva
    return precio
}


let comprar=0;
let compra_productos=0;
let unidades=0;
let acu=0;

//INGRESO AL PROGRAMA DE VENTAS//
console.log("Bienvenidos al sistema WAR de compras");

let nombre_cliente=prompt("Ingrese su nombre: ");

while (comprar!="no"){ 
    compra_productos=prompt("Ingrese el nombre del producto que desea comprar: ");
    let resultado_find=lista_productos.find(buscar_productos);
    console.log(resultado_find);
        if (resultado_find != undefined){
            if(resultado_find.getstock()){
                unidades=prompt("Cuantas unidades desea?: ");
                unidades=parseInt(unidades);
            
                resultado=unidades*resultado_find.precio;
                acu=acu+resultado;
                if(resultado_find.actualizar(unidades)){
                    for(let producto of lista_productos){
                    if (producto.stock > 0){ 
                    producto.getdatos();
                    }
                }
                
            }
        }
        comprar=prompt("Desea agregar otro producto? si/no ");
    }
    else{
        console.log("Producto no encontrado");
    }

}     
console.log(" ")
console.log("------","Hola",nombre_cliente,"------");
console.log("Su subtotal es: ",acu)
let resultado_iva=agregar_iva(acu);
console.log("Su IVA es de : ",resultado_iva)
let total=precio_final(acu,resultado_iva);
console.log("El total de su compra es: ",total)
console.log("Gracias por su compra");

