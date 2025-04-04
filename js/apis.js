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

getUserAddress(Number(prompt("Introduce el rango de usuarios")));
