// const saveProduct = async (data) => {
//     //configuracion del metodo POST
//     const config = {
//         method: "POST", //Guardar
//         body: JSON.stringify(data)
//     }
//     //PETICION
//     const response = await fetch("http://localhost:5600/products", config);
//     const result = await response.json();
//     return result;
// }

// const editProduct = async (data) => {
//     //configuracion del metodo Patch

//     const {id, ...dataupdate} = data;
//     const config = {
//         method: "PATCH", //Actualizar
//         body: JSON.stringify(dataupdate)
//     }
//      //PETICION
//     const response = await fetch(`http://localhost:5600/products/${id}`, config);
//     const result = await response.json();
//     return result;
//  }


// const deleteProduct = async (id) => {
//     //configuracion del metodo DELETE
//     const config = {
//          method: "DELETE", //Borrar
//     }
//     //PETICION
//     const response = await fetch(`http://localhost:5600/products/${id}`, config);
//     console.log("Esta es la peticion", response);
//     const result = await response.json();
//     console.log("Esta es el resultado", result);
//     return result;
// }

const findProductById = async (data) => {
    const {id} = data;
    //configuracion del metodo GET
    const url = new URL("http://localhost:5600");
    url.pathname = `/products/${id}`;
    const config = {
        method: "GET", //Obtener todos los productos
    }
    const response = await fetch(url.toString(), config);
    console.log("Esta es la peticion", response);
    const result = await response.json();
    console.log("Esta es el resultado", result);
    return result;
}

  while (confirm("¿Quieres Buscar los productos por id?")) {
    const datauser = {};
    datauser.id = Number(prompt("Ingrese el id del producto", "Mic330 o 1"));
    findProductById(datauser)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error));
}

// const findAllProducts = async () => {
//     const url = new URL("http://localhost:5600/products");
//     const config = {
//         method: "GET", //Obtener todos los productos
//     }
//     const response = await fetch(url.toString(), config);
//     console.log("Esta es la peticion", response);
//     const result = await response.json();
//     console.log("Esta es el resultado", result);
//     return result;
// }
// const dataFindProduct = await findAllProducts();
// console.log("Los productos son", dataFindProduct);

//USERS
// const findUser = async () => {
//     const url = new URL("https://67e6867f6530dbd3111055e8.mockapi.io");
//     url.pathname = "/users";
//     const config = {
//         method: "GET", //Obtener todos los usuarios
//     }
//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     console.log(response);
//     return result;
// }

// const data = await findUser();
// console.log(data);

// const addUser = async (data) => {
//     const url = new URL("https://67e6867f6530dbd3111055e8.mockapi.io");
//     url.pathname = "/users";
//     const header = new Headers();
//     header.append("Content-Type", "application/json");
//     const config = {
//         method: "POST", //Crear nuevo usuario
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     console.log("Esta es la peticion", response);
//     console.log("Esta es el resultado", result);
//     return result;
// }

// const editUser = async (data) => {
//     const {id, ...dataupdate} = data;
//     const header = new Headers();
//     const url = new URL("https://67e6867f6530dbd3111055e8.mockapi.io");
//     url.pathname = `/users/${id}`;
//     header.append("Content-Type", "application/json");
//     const config = {
//         method: "PUT", //Actualizar
//         headers: header,
//         body: JSON.stringify(dataupdate)
//     }
//     const response = await fetch(url.toString(), config);         
//     const result = await response.json();
//     console.log("Esta es la peticion", response);
//     console.log("Esta es el resultado", result);
//     return result;
// }

// const deleteUser = async (id) => {
//     const header = new Headers();
//     const url = new URL("https://67e6867f6530dbd3111055e8.mockapi.io");
//     url.pathname = `/users/${id}`;
//     header.append("Content-Type", "application/json");
//     const config = {
//         method: "DELETE", //Borrar
//         headers: header,
//     }
//     const response = await fetch(url.toString(), config);         
//     const result = await response.json();
//     console.log("Esta es la peticion", response);
//     console.log("Esta es el resultado", result);
//     return result;
// }

// USES

// while (confirm("¿Quieres Buscar los productos?")) {
//     const datauser = {};
//     datauser.name = prompt("Ingrese el nombre del producto", "Mac Mini");
//     findProduct()
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error));
// }

// while (confirm("¿Quieres Eliminar el producto?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del producto", "Mic330 o 1"));
//     deleteProduct(datauser.id)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error));
// }
// console.log(datauser);
// while (confirm("¿Quieres actualizar el producto?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del producto", "Mic330 o 1"));
//    datauser.name = (confirm("¿Quieres cambiar el nombre del producto?")) ? prompt("Ingrese el nombre del producto", "Mac Mini") : undefined;
   
//    datauser.price = (confirm("¿Quieres cambiar el precio del producto?")) ? Number(prompt("Ingrese el precio del producto", 680)) : undefined;

//    datauser.category = (confirm("¿Quieres cambiar la categoria del producto?")) ? prompt("Ingrese la categoria del producto", "Technology") : undefined;
//    editProduct(datauser)
//   .then(result => alert(JSON.stringify(result)))
//    .catch(error => alert(error));
// }

//   while (confirm("¿Quieres actualizar la informacion del usuario?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del usuario", "1 o 2"));
//     datauser.name = (confirm("¿Quieres cambiar el nombre del usuario?")) ? prompt("Ingrese el nombre del usuario", "Maria Garcia") : undefined;
//     datauser.last = (confirm("¿Quieres cambiar el apellido del usuario?")) ? prompt("Ingrese el apellido del usuario", "Garcia") : undefined;
//    editUser(datauser)
//      .then(result => alert(JSON.stringify(result)))
//      .catch(error => alert(error));
//  }

//  console.log(datauser);
// //uso de guardarProduct
//  while (confirm("¿Quieres guardar el producto?")) {
//      const data = {
//          id: prompt("Ingrese el id del producto", "Mic330"),
//          name: prompt("Ingrese el nombre del producto", "Mac Mini"),
//          price: Number(prompt("Ingrese el precio del producto", 680)),
//           category: prompt("Ingrese la categoria del producto", "Technology")
//       }

//       addUser(data)
//      .then(result => alert(JSON.stringify(result)))
//      .catch(error => alert(error));
    
//   }

//  console.log(data);
//uso de editProduct


// while (confirm("¿Quieres borrar el usuario?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del usuario", "1 o 2"));
//     deleteUser(datauser.id)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error));
// }