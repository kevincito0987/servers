const saveProduct = async (data) => {
    //configuracion del metodo POST
    const config = {
        method: "POST", //Guardar
        body: JSON.stringify(data)
    }
    //PETICION
    const response = await fetch("http://localhost:5600/products", config);
    const result = await response.json();
    return result;
}
const editProduct = async (data) => {
    const { id, ...dataUpdated} = data;
    const config = {
        method: "PATCH", //Actualizar datos especificos
        body: JSON.stringify(dataUpdated)
    }
    const response = await fetch(`http://localhost:5600/products/${id}`, config);
    const result = await response.json();
    return result;
}


//uso de guardarProduct
// while (confirm("¿Quieres guardar el producto?")) {
//     const data = {
//         id: prompt("Ingrese el id del producto", "Mic330"),
//         name: prompt("Ingrese el nombre del producto", "Mac Mini"),
//         price: Number(prompt("Ingrese el precio del producto", 680)),
//         category: prompt("Ingrese la categoria del producto", "Technology")
//     }

//     saveProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error));
    
// }

//uso de editProduct

while (confirm("¿Quieres actualizar el producto?")) {
    const datauser = {};
    datauser.id = Number(prompt("Ingrese el id del producto", "Mic330 o 1"));
    datauser.name = (confirm("¿Quieres cambiar el nombre del producto?")) ? prompt("Ingrese el nombre del producto", "Mac Mini") : undefined;
    
    datauser.price = (confirm("¿Quieres cambiar el precio del producto?")) ? Number(prompt("Ingrese el precio del producto", 680)) : undefined;

    datauser.category = (confirm("¿Quieres cambiar la categoria del producto?")) ? prompt("Ingrese la categoria del producto", "Technology") : undefined;
    editProduct(datauser)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error));
}