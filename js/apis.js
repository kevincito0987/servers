console.log("Manejando APIs");

// Crear una funcion fetch con el metodo GET para obtener todos lo datos de la api, y otra funcion para obtener todos los posts hasta un rango recibido por parametro.

const getAllData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};


const getPostsByRange = async (range) => {
    //Obtener los posts por rango
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${range}`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};
// getPostsByRange(Number(prompt("Introduce el rango de posts")));

//Crear una funcion que me filtre todos los correos electrónicos segun la terminacion de cada correo por ejemplo .com o .net, esa terminacion se evaluara desde que el usuario introduzca el nombre de dominio y solo se mostrara la lista de correos que terminan con esa terminacion.

const getEmailsByDomain = async (domain) => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getEmailsByDomain = result.filter((email) => email.email.endsWith(domain));
  console.log("Los correos de la api que terminan con: ", domain, " son: ", getEmailsByDomain);
};

// getEmailsByDomain(prompt("Introduce el dominio"));

// Crear una funcion en la que el usuario pase un numero que es el rango de albumes que quiere ver, y luego se muestra la lista de albumes de ese rango.

const getAlbumsByRange = async (range) => {
    //Obtener los albumes por rango
  const url = `https://jsonplaceholder.typicode.com/albums?_limit=${range}`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};

// getAlbumsByRange(Number(prompt("Introduce el rango de albumes")));

// Crear una funcion en la que el usuario pase un numero que es el rango imagenes que quiere ver, y que en el mensaje le salga la url principal y la url secundaria de las imagenes.

const getImagesByRange = async (range) => {
    //Obtener los albumes por rango
  const url = `https://jsonplaceholder.typicode.com/photos?_limit=${range}`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();

  for (let i = 0; i < result.length; i++) {
    console.log("La url principal de la imagen del usuario ", i, " es: ", result[i].url);
    console.log("La url secundaria de la imagen del usuario ", i, " es: ", result[i].thumbnailUrl);
  }
  return result;
};

// getImagesByRange(Number(prompt("Introduce el rango de imagenes")));

// Crear una funcion en el cual el usuario pueda introducir un rango de numeros y luego se muestra la lista de los numeros de ese rango, aparte si el dato a buscar la key compleatdo esta en true o false mostrar un mensaje correspondiente.

const getNumbersByRange = async (range) => {
  const url = `https://jsonplaceholder.typicode.com/todos?_limit=${range}`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  for (let i = 0; i < result.length; i++) {
    if (result[i].completed) {
      console.log("El curso ", i, " ha sido completado");
    } else {
      console.log("El curso ", i, " no ha sido completado");
    }
  }
};

// getNumbersByRange(Number(prompt("Introduce el rango de numeros")));

const getAllUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};

// getAllUsers();

//Funcion que el usuario da nombres y se imprime una lista de todos los nombres que tengan coincidencia con el nombre que ingreso tiene mayusculas o minusculas, y tambien se puede ver si el usuario ingreso un nombre que no existe en la api.

const getUsersByName = async (name) => {
  const url = `https://jsonplaceholder.typicode.com/users?name_like=${name}`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};

// getUsersByName(prompt("Introduce el nombre de usuario"));

// Crear una funcion en el que el usuario pueda introducir un rango de numeros y luego se le muestra la direccion de hogar de ese usuario y su ubicacion.

const getUserAddress = async (range) => {
  const url = `https://jsonplaceholder.typicode.com/users?_limit=${range}`;
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  for (let i = 0; i < result.length; i++) {
    console.log("La direccion de la ubicacion de la user ", i, " es: ", result[i].address.street);
    console.log("Se ubica en la suite del usuario ", i, " es: ", result[i].address.suite);
    console.log("La ubicacion de la user ", i, " es: ", result[i].address.city);
    console.log("El codigo postal de la user ", i, " es: ", result[i].address.zipcode);
    console.log("Como ubicacion de la user ", i, " es: ", result[i].address.geo.lat, " y ", result[i].address.geo.lng);
  }
};

// getUserAddress(Number(prompt("Introduce el rango de usuarios")));

// Funcion para agregar un nuevo post en la api

const addPost = async (data) => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  let response = await fetch(url, config);
  let result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};

const addPostData = async () => {
  let title = prompt("Introduce el titulo del post");
  let body = prompt("Introduce el cuerpo del post");
  let userId = prompt("Introduce el id del usuario");
  let data = {
    title,
    body,
    userId,
  };
  console.log("Los datos del post son: ", data);
  let result = await addPost(data);
  console.log("El post se ha agregado con exito: ", result);
};

// addPostData();

//Funcion para actualizar un post específico en la api al cual se le ingresa el id del post

const updatePost = async (id, data) => {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  let config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  let response = await fetch(url, config);
  let result = await response.json();
  //Antiguo objeto
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};

const updatePostData = async () => {
  let id = prompt("Introduce el id del post");
  let title = prompt("Introduce el titulo del post");
  let body = prompt("Introduce el cuerpo del post");
  let userId = prompt("Introduce el id del usuario");
  let data = {
    title,
    body,
    userId
  };
  let resultdata = await updatePost(id, data);
  console.log("El post se ha actualizado con exito: ", resultdata);
};

// Funcion para actualizar posts de la api

const updatePosts = async (id, data) => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  let response = await fetch(url, config);
  let result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  return result;
};

const updatePostsData = async () => {
  let counter = Number(prompt("Introduce el numero de posts que quiere actualizar"));
  for (let i = 0; i < counter; i++) {
    let id = prompt("Introduce el id del post");
    let title = prompt("Introduce el titulo del post");
    let body = prompt("Introduce el cuerpo del post");
    let userId = prompt("Introduce el id del usuario");
    let data = {
      title,
      body,
      userId
    };
    let resultdata = await updatePost(id, data);
    console.log("El post se ha actualizado con exito: ", resultdata);
  }
};
// updatePostsData();

