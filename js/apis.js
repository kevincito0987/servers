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
getPostsByRange(Number(prompt("Introduce el rango de posts")));