const products = {
    urlProducts: "http://localhost:5600/products",
  
    async saveProduct(data) {
      const config = {
        method: "POST", //Guardar
        body: JSON.stringify(data)
      };
      const response = await fetch(this.urlProducts, config);
      const result = await response.json();
      return result;
    },
  
    async editProduct(data) {
      const { id, ...dataupdate } = data;
      const config = {
        method: "PATCH", //Actualizar
        body: JSON.stringify(dataupdate)
      };
      const response = await fetch(`${this.urlProducts}/${id}`, config);
      const result = await response.json();
      return result;
    },
  
    async deleteProduct(id) {
      const config = {
        method: "DELETE", //Borrar
      };
      const response = await fetch(`${this.urlProducts}/${id}`, config);
      console.log("Esta es la peticion", response);
      const result = await response.json();
      console.log("Esta es el resultado", result);
      return result;
    },
  
    async findProductById(data) {
      const { id } = data;
      const url = new URL(this.urlProducts);
      url.pathname = `/${id}`;
      const config = {
        method: "GET", //Obtener todos los productos
      };
      const response = await fetch(urlProducts.toString(), config);
      console.log("Esta es la peticion", response);
      const result = await response.json();
      console.log("Esta es el resultado", result);
      return result;
    },
  
    async findAllProducts() {
      const url = new URL(this.urlProducts);
      const config = {
        method: "GET", //Obtener todos los productos
      };
      const response = await fetch(urlProducts.toString(), config);
      console.log("Esta es la peticion", response);
      const result = await response.json();
      console.log("Esta es el resultado", result);
      return result;
    }
  };
  
  const { urlProducts, saveProduct, editProduct, deleteProduct, findProductById, findAllProducts } = products;
  
  const productsSave = {
    url,
    saveProduct,
    data: { /* Datos del producto a guardar */ } // Reemplaza con los datos reales
  };
  
  const productsEdit = {
    url,
    editProduct,
    data: { /* Datos del producto a editar */ } // Reemplaza con los datos reales
  };
  
  const productsDelete = {
    url,
    deleteProduct,
    id: Number(prompt("Ingrese el id del producto a eliminar"))
  };
  
  const productsFindById = {
    url,
    findProductById,
    data: { id: Number(prompt("Ingrese el id del producto a buscar")) }
  };
  
  const productsFindAll = {
    url,
    findAllProducts,
  };



const users = {
    url: "https://67e6867f6530dbd3111055e8.mockapi.io",
    endpoint: "/users",
  
    async findAllUsers() {
      const url = new URL(this.url);
      url.pathname = this.endpoint;
      const config = {
        method: "GET", //Obtener todos los usuarios
      }
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      console.log(response);
      return result;
    },
  
    async findUsersByName(name) {
      const url = new URL(this.url);
      const config = {
        method: "GET", // Obtener todos los usuarios
      };
  
      // Obtener todos los usuarios del recurso
      const response = await fetch(url.toString(), config);
      const users = await response.json();
  
      // Filtrar usuarios por coincidencias parciales en el nombre
      const matchingUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  
      console.log("Usuarios coincidentes:", matchingUsers);
      return matchingUsers;
    },
  
    normalizeText(text) {
      // Normalizar texto eliminando tildes y pasando a minúsculas
      return text
        .normalize("NFD") // Descompone caracteres con tildes (por ejemplo, "á" -> "a + ́")
        .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos (tildes)
        .toLowerCase(); // Convierte a minúsculas
    },
  
    async findUserByLastname(lastname) {
      const url = new URL(this.url);
      const config = {
        method: "GET", // Obtener todos los usuarios
      };
  
      // Obtener todos los usuarios del recurso
      const response = await fetch(url.toString(), config);
      const users = await response.json();
  
      // Filtrar usuarios por coincidencias parciales en el apellido (campo "last")
      const normalizedLastname = this.normalizeText(lastname);
      const matchingUsers = users.filter(user =>
        user.last && this.normalizeText(user.last).includes(normalizedLastname)
      );
  
      console.log("Usuarios coincidentes:", matchingUsers);
      return matchingUsers;
    },
  
    async addUser(data) {
      const url = new URL(this.url);
      url.pathname = this.endpoint;
      const header = new Headers();
      header.append("Content-Type", "application/json");
      const config = {
        method: "POST", //Crear nuevo usuario
        headers: header,
        body: JSON.stringify(data)
      }
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      console.log("Esta es la peticion", response);
      console.log("Esta es el resultado", result);
      return result;
    },
  
    async editUser(data) {
      const { id, ...dataupdate } = data;
      const header = new Headers();
      const url = new URL(this.url);
      url.pathname = `/users/${id}`;
      header.append("Content-Type", "application/json");
      const config = {
        method: "PUT", //Actualizar
        headers: header,
        body: JSON.stringify(dataupdate)
      }
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      console.log("Esta es la peticion", response);
      console.log("Esta es el resultado", result);
      return result;
    },
  
    async deleteUser(id) {
      const header = new Headers();
      const url = new URL(this.url);
      url.pathname = `/users/${id}`;
      header.append("Content-Type", "application/json");
      const config = {
        method: "DELETE", //Borrar
        headers: header,
      }
      const response = await fetch(url.toString(), config);
      const result = await response.json();
      console.log("Esta es la peticion", response);
      console.log("Esta es el resultado", result);
      return result;
    }
  };

  const { url, endpoint, addUser, editUser, deleteUser, findAllUsers, findUserByLastname, findUsersByName } = users;

const usersEdit = {
  url,
  endpoint,
  editUser,
  id: Number(prompt("Ingrese el id del usuario a editar")),
  name: prompt("Ingrese el nuevo nombre del usuario", "Adrian"),
  last: prompt("Ingrese el nuevo apellido del usuario", "Ruiz"),
};

const usersFindAllUsers = {
  url,
  endpoint,
  findAllUsers,
};
const usersFindUserByLastname = {
  url,
  endpoint,
  findUserByLastname,
};
const usersFindUsersByName = {
  url,
  endpoint,
  findUsersByName,
};

const usersRemove = {
  url,
  endpoint,
  deleteUser,
  id: Number(prompt("Ingrese el id del usuario a eliminar")),
};


// USES

// while (confirm("¿Quieres eliminar los productos por id?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del producto", "Mic330 o 1"));
//     deleteUser(datauser.id)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error));
// }


// while (confirm("¿Quieres actualizar la informacion del usuario?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del usuario", "1 o 2"));
//     datauser.name = (confirm("¿Quieres cambiar el nombre del usuario?")) ? prompt("Ingrese el nombre del usuario", "Maria Garcia") : undefined;
//     datauser.last = (confirm("¿Quieres cambiar el apellido del usuario?")) ? prompt("Ingrese el apellido del usuario", "Garcia") : undefined;
//    editUser(datauser)
//      .then(result => alert(JSON.stringify(result)))
//      .catch(error => alert(error));
//  }

// while (confirm("¿Quieres buscar usuarios por apellido?")) {
//     const lastname = prompt("Ingrese el apellido o parte del apellido a buscar");

//     findUserByLastname(lastname)
//         .then(results => {
//             if (results.length === 0) {
//                 alert("No se encontraron usuarios con ese apellido.");
//             } else {
//                 alert(`Usuarios encontrados:\n${results.map(user => `- ${user.name} ${user.last} (ID: ${user.id})`).join("\n")}`);
//             }
//         })
//         .catch(error => alert(`Error: ${error.message}`));
// }

// while (confirm("¿Quieres buscar usuarios por nombre?")) {
//     const name = prompt("Ingrese el nombre o parte del nombre a buscar");

//     findUsersByName(name)
//         .then(results => {
//             if (results.length === 0) {
//                 alert("No se encontraron usuarios con ese nombre.");
//             } else {
//                 alert(`Usuarios encontrados:\n${results.map(user => `- ${user.name} (ID: ${user.id})`).join("\n")}`);
//             }
//         })
//         .catch(error => alert(`Error: ${error.message}`));
// }

// while (confirm("¿Quieres Buscar los productos por id?")) {
//     const datauser = {};
//     datauser.id = Number(prompt("Ingrese el id del producto", "Mic330 o 1"));
//     findProductById(datauser)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error));
// }

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