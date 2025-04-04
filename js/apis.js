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

getEmailsByDomain(prompt("Introduce el dominio"));