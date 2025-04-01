console.log("Hello world!");
//Exercise 1
const findAllRockets = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado: ", result);
  return result;
};

const getRoketesbyType = async (type) => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  const matchingRokets = result.filter((roket) =>
    roket.engines.type.toLowerCase().includes(type.toLowerCase())
  );
  console.log("Usuarios coincidentes:", matchingRokets);
  return matchingRokets;
};
//Exercise 2
const getDescriptionRoketById = async (id) => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  const getRoket = await result.filter((roket) => roket.id === id);
  const getRoketDescription = getRoket[0].description;
  console.log(
    "Descripcion del rocket: ",
    getRoketDescription.substring(0, 100) + "..."
  );
  return getRoket;
};

//Exercise 3
const getPlayLoadsRoketsNameById = async (id) => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  const getRoket = await result.filter((roket) => roket.id === id);
  const getRoketName = getRoket[0].payload_weights[0].name;
  console.log(`El nombre del rocket ${id} es: `, getRoketName);
  return getRoketName;
};

//Exercise 4
const getRoketsCosts = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);
  const getRoketCosts = result.map((rocket) => rocket.cost_per_launch);
  console.log("Los costos de los rockets son: ", getRoketCosts);
  return getRoketCosts;
};

const allCosts = async () => {
  let totalCosts = 0;
  const getRoketCosts = getRoketsCosts();
  getRoketCosts.then((costs) => {
    costs.forEach((cost) => {
      totalCosts += cost;
    });
    console.log("El total de los costos de los rockets es: ", totalCosts);
  });
};

//Exercise 8
const rocketsWithLossEngines = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRoketLossEngines = result.filter(
    (rocket) => rocket.engines.engine_loss_max === 0
  );
  if (getRoketLossEngines) {
    console.log(
      `El id del rocket con menor perdida de motor es: ${getRoketLossEngines[0].id}`
    );
    console.log(
      "El nombre del rocket con menor perdida de motor es: ",
      getRoketLossEngines[0].rocket_name
    );
  }
};
//Exercise 6

const getRocketWitnMinWeight = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRocketWitnMinWeight = result.filter((rocket) => rocket.mass);
  const weightRocket1 = result[0].mass.kg;
  const weightRocket2 = result[1].mass.kg;
  const weightRocket3 = result[2].mass.kg;
  let weightRocket4 = result[3].mass.kg;

  if (
    weightRocket1 < weightRocket2 &&
    weightRocket1 < weightRocket3 &&
    weightRocket1 < weightRocket4
  ) {
    console.log(
      `El id del rocket con menor peso es: ${getRocketWitnMinWeight[0].id}.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[0].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con menor peso es: ",
      getRocketWitnMinWeight[0].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[0].mass.lb} libras`
    );
  } else if (
    weightRocket2 < weightRocket1 &&
    weightRocket2 < weightRocket3 &&
    weightRocket2 < weightRocket4
  ) {
    console.log(
      `El id del rocket con menor peso es: ${getRocketWitnMinWeight[1].id} kilogramos.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[1].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con menor peso es: ",
      getRocketWitnMinWeight[1].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[1].mass.lb} libras`
    );
  } else if (
    weightRocket3 < weightRocket1 &&
    weightRocket3 < weightRocket2 &&
    weightRocket3 < weightRocket4
  ) {
    console.log(
      `El id del rocket con menor peso es: ${getRocketWitnMinWeight[2].id} kilogramos.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[2].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con menor peso es: ",
      getRocketWitnMinWeight[2].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[2].mass.lb} libras`
    );
  } else if (
    weightRocket4 < weightRocket1 &&
    weightRocket4 < weightRocket2 &&
    weightRocket4 < weightRocket3
  ) {
    console.log(
      `El id del rocket con menor peso es: ${getRocketWitnMinWeight[3].id} kilogramos.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[3].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con menor peso es: ",
      getRocketWitnMinWeight[3].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[3].mass.lb} libras`
    );
  }
};

//Excercise 5

const getRocketWithMaxWeight = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRocketWitnMinWeight = result.filter((rocket) => rocket.mass);
  const weightRocket1 = result[0].mass.kg;
  const weightRocket2 = result[1].mass.kg;
  const weightRocket3 = result[2].mass.kg;
  let weightRocket4 = result[3].mass.kg;

  if (
    weightRocket1 > weightRocket2 &&
    weightRocket1 > weightRocket3 &&
    weightRocket1 > weightRocket4
  ) {
    console.log(
      `El id del rocket con mayor peso es: ${getRocketWitnMinWeight[0].id}.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[0].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con mayor peso es: ",
      getRocketWitnMinWeight[0].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[0].mass.lb} libras`
    );
  } else if (
    weightRocket2 > weightRocket1 &&
    weightRocket2 > weightRocket3 &&
    weightRocket2 > weightRocket4
  ) {
    console.log(
      `El id del rocket con mayor peso es: ${getRocketWitnMinWeight[1].id}.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[1].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con mayor peso es: ",
      getRocketWitnMinWeight[1].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[1].mass.lb} libras`
    );
  } else if (
    weightRocket3 > weightRocket1 &&
    weightRocket3 > weightRocket2 &&
    weightRocket3 > weightRocket4
  ) {
    console.log(
      `El id del rocket con mayor peso es: ${getRocketWitnMinWeight[2].id}.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[2].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con mayor peso es: ",
      getRocketWitnMinWeight[2].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[2].mass.lb} libras`
    );
  } else if (
    weightRocket4 > weightRocket1 &&
    weightRocket4 > weightRocket2 &&
    weightRocket4 > weightRocket3
  ) {
    console.log(
      `El id del rocket con mayor peso es: ${getRocketWitnMinWeight[3].id}.`
    );
    console.log(
      `El peso minimo de ese rocket es: ${getRocketWitnMinWeight[3].mass.kg} kilogramos.`
    );
    console.log(
      "El nombre del rocket con mayor peso es: ",
      getRocketWitnMinWeight[3].rocket_name
    );
    console.log(
      `Y puede cargar un peso de: ${getRocketWitnMinWeight[3].mass.lb} libras`
    );
  }
};

// Exercise 7

const getAllImages = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRocketImages = result.filter((rocket) => rocket.id);
  for (let i = 0; i < getRocketImages.length; i++) {
    console.log("El id del rocket con imagen es: ", getRocketImages[i].id);
    console.log("La imagen 1 es: ", getRocketImages[i].flickr_images[0]);
    console.log("La imagen 2 es: ", getRocketImages[i].flickr_images[1]);
  }
};
//Exercise 9

const rocketsOrderedsByHeight = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRocketsOrderedsByHeight = result.sort((a, b) =>
    a.height.meters > b.height.meters ? 1 : -1
  );

  let dataspecified = getRocketsOrderedsByHeight.map((rocket) => ({
    id: rocket.id,
    idNameRocket: rocket.rocket_id,
    name: rocket.rocket_name,
    active: rocket.active,
    first_flight: rocket.first_flight,
    country: rocket.country,
  }));
  console.log("Los rockets ordenados por altura son: ", dataspecified);
};

//Exercise 10

const getRocketMaterials = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRocketMaterials = result.map(
    (rocket) => rocket.landing_legs.material
  );
  console.log("Los materiales de los rockets son: ", getRocketMaterials);
};

//Exercise 11

const getRocketsPropulsion = async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const result = await response.json();
  console.log("Este es el resultado de todos los datos: ", result);

  const getRocketPropulsion1 = result.map(
    (rocket) => rocket.engines.propellant_1
  );
  const getPropulsion2 = result.map((rocket) => rocket.engines.propellant_2);
  const idRocket = result.map((rocket) => rocket.id);

  for (let i = 0; i < idRocket.length; i++) {
    console.log(
      `Rocket ${idRocket[i]}:  El propulsor principal es: ${getRocketPropulsion1[i]} y el propulsor secundario es: ${getPropulsion2[i]}`
    );
  }
};

getRocketsPropulsion();

// Ejercicios hoy que son faciles.

//Ejercicio 1. Crea una función que reciba dos números y devuelva su suma.

const sumTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

// let num1 = Number(prompt("Introduce el primer número"));
// let num2 = Number(prompt("Introduce el segundo número"));

// console.log(`El resultado de la suma de ${num1} y ${num2} es: ${sumTwoNumbers(num1, num2)}`);

// Ejercicio 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

const getMaxNumber = (numbers) => {
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};

// let numbers = [5, -2, 8, 31, 9];

// console.log("Los numbers son: ", numbers);
// console.log(`El mayor de los números es: ${getMaxNumber(numbers)}`);

//Ejercicio 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

const countVocals = (string) => {
  let countVocals = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiou]/i)) {
      countVocals++;
    } else {
      console.log("La oración no contiene vocales");
    }
  }
  return countVocals;
};

const vocalsRepeated = (string) => {
  let countVocals = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiou]/i)) {
      countVocals++;
      if (countVocals > 1) {
        return countVocals;
      }
    } else {
      console.log("La oración no contiene vocales");
    }
  }
};

// let string = "Hola, ¿cómo estás hoy en día?";

// console.log(
//   `El número de vocales en repetidas en ${string} es: ${vocalsRepeated(string)}`
// );
// console.log(`El número de vocales en ${string} es: ${countVocals(string)}`);

// Ejercicio 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

const toUpperCase = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }
  return newArray;
};

// let array = ["hola", "como", "estas"];

// console.log("El array original es: ", array);
// console.log("El array en mayúsculas es: ", toUpperCase(array));

//Ejercicio 5.Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

// let number = Number(prompt("Introduce un número"));

// console.log(`El número ${number} es primo: ${isPrime(number)}`);

//Ejercicio 6.Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

const commonElements = (array1, array2) => {
  let commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        commonElements.push(array1[i]);
      }
    }
  }
  return commonElements;
};

let array1 = ["Hola", "como", "estas", "antes", "de", "adios"];
let array2 = ["hola", "como", "estas", "adios"];

console.log("Los arrays originales son: ", array1, array2);
console.log("Los elementos comunes son: ", commonElements(array1, array2));
