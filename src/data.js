/* ORDENANDO LOS POKEMONES DE LA A-Z El método sort () ordena una matriz alfabéticamente:
Por defecto, la función sort () ordena los valores como cadenas.
Sin embargo, si los números se ordenan como cadenas, '25' es más grande 
que '100', porque '2' es más grande que '1'.
Debido a esto, el método sort () producirá un resultado incorrecto al ordenar los números.
Puedes arreglar esto proporcionando una función de comparación
The reverse() method reverses the elements in an array */
const azordena = (ordenar, desordenar) => {
  const newArray = ordenar.sort((orden, desorden) => {
    if (orden.name > desorden.name) {
      return 1;
    } if (orden.name < desorden.name) {
      return -1;
    }
  });
  if (desordenar === '0') {
    return newArray;
  }
  if (desordenar === '1') {
    return newArray.reverse();
  }
};
/* FILTRANNDO LOS POKEMONES POR TIPOS
El método filter () crea una matriz rellena con todos 
los elementos de la matriz que pasan una prueba (proporcionada como una función).
Nota: filter () no ejecuta la función para elementos de matriz sin valores.
Nota: el filtro () no cambia la matriz original.
indexOf () compara searchElement con elementos de la matriz
 utilizando una igualdad estricta (el mismo método utilizado por el operador === o triple-igual)
 NOTA RETURN(La sentencia return finaliza la ejecución de la función
 y especifica un valor para ser devuelto a quien llama a la función.) */
const poketypos = (pokemones, tiposp) => {
  return pokemones.filter((element) => {
    return element.type.indexOf(tiposp) > -1;
  });
};

/* FILTRANDO LOS POKEMONES POR APAWMS
El método sort () ordena una matriz alfabéticamente:
Por defecto, la función sort () ordena los valores como cadenas.
Sin embargo, si los números se ordenan como cadenas, '25' es más grande 
que '100', porque '2' es más grande que '1'.
Debido a esto, el método sort () producirá un resultado incorrecto al ordenar los números.
Puedes arreglar esto proporcionando una función de comparación
The reverse() method reverses the elements in an array */
const ordenpoder = (datapoke, clickOrder) => {
  const arrSorpokemon = datapoke.sort((ab, bc) => {
    if (ab.avg_spawns < bc.avg_spawns) {
      return -1;
    }
  });
  if (clickOrder === '0') {
    return arrSorpokemon;
  }
  if (clickOrder === '1') {
    return arrSorpokemon.reverse();
  }
};

/* FILTRANNDO LOS POKEMONES POR DEBILIDADES */
const pokedebilidades = (pokemones, debilidadesp) => {
  return pokemones.filter((element) => {
    return element.weaknesses.indexOf(debilidadesp) > -1;
  });
};
/* FILTRADO DE LOS HUEVOS  */
const huevos = (pokemones, condicion) => {
  return pokemones.filter((element) => {
    return element.egg.indexOf(condicion) > -1;
  });
};


window.pokemon = {
  azordena: azordena,
  ordenpoder: ordenpoder,
  poketypos: poketypos,
  pokedebilidades: pokedebilidades,
  huevos: huevos
};
