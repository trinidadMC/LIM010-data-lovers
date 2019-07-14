/* TRAYENDO LOS POKEMONES DE LA DATA */
const datapokemon = (pokemon) => {
  const vacio = [];
  for (let i = 0; i < pokemon.lenght;i++);
  vacio.push({
    img: pokemon[i].img,
    nombre: pokemon[i].name,
    numero: pokemon[i].num,
    tipospokes: pokemon[i].type,
  });
  return vacio;
};
/* ORDENANDO LOS POKEMONES DE LA A-Z */
const ordenaz = document.getElementById('ordenAZ');
const ordenaAZ = (pokemones) => {
  nombrePokemones = [];
  const ordenador = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < ordenador.length; i++) {
    for (let j = 0; j < pokemones.length; j++) {
      if (ordenador[i] === pokemones[j].name[0]) {
        nombrePokemones.push(pokemones[j]);
      };

    }
  } return nombrePokemones;
};
/* ORDENANDO LOS POKEMONES DE LA Z-A */
const ordenaZA = (pokemones) => {
  pokemonesnombre = [];
  const desordenar = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  for (let i = 0; i < desordenar.length; i++) {
    for (let j = 0; j < pokemones.length; j++) {
      if (desordenar[i] === pokemones[j].name[0]) {
        pokemonesnombre.push(pokemones[j]);
      };
    }
  } return pokemonesnombre;
};
/* FILTRANNDO LOS POKEMONES POR TIPOS */
/* FILTRANNDO LOS POKEMONES POR TIPOS */
/* El método filter () crea una matriz rellena con todos 
los elementos de la matriz que pasan una prueba (proporcionada como una función).
Nota: filter () no ejecuta la función para elementos de matriz sin valores.
Nota: el filtro () no cambia la matriz original. */
/* indexOf () compara searchElement con elementos de la matriz
 utilizando una igualdad estricta (el mismo método utilizado por el operador === o triple-igual) */
 /* NOTA RETURN(La sentencia return finaliza la ejecución de la función
 y especifica un valor para ser devuelto a quien llama a la función.) */
const poketypos = (pokemones,tiposp ) => {
  return pokemones.filter((element)=>{
    return element.type.indexOf(tiposp) > -1;
  });
};
/* FILTRANDO LOS POKEMONES POR APAWMS */
/* El método sort () ordena una matriz alfabéticamente */
/* The reverse() method reverses the elements in an array. */
/* Por defecto, la función sort () ordena los valores como cadenas.
Sin embargo, si los números se ordenan como cadenas, "25" es más grande 
que "100", porque "2" es más grande que "1".
Debido a esto, el método sort () producirá un resultado incorrecto al ordenar los números.
Puedes arreglar esto proporcionando una función de  */
const ordenpoder = (datapoke, clickOrder) => {
  const arrSorpokemon = datapoke.sort((ab, bc) => {
    if (ab.avg_spawns > bc.avg_spawns) {
      return 1;
    } else if (ab.avg_spawns < bc.avg_spawns) {
      return -1;
    } else {
      return 0;
    }
  });
  if (clickOrder === '0') {
    return arrSorpokemon;
  } else {
    return arrSorpokemon.reverse();
  }
}
/* FILTRANDO LOS POKEMONES POR DEBILIDADES*/
const pokedebilidades = (pokemones,debilidadesp) => {
  return pokemones.filter((element) => {
    return element.weaknesses.indexOf(debilidadesp) > -1;
  });
};
/* Funcion filtrar huevos */
const huevos = (pokemones, condicion) => {
  return pokemones.filter((element) => {
    return element.egg.indexOf(condicion) > -1;
  });
};
window.pokemon = {
  datapokemon: datapokemon,
  ordenaz: ordenaz,
  ordenaZA: ordenaZA,
  ordenpoder: ordenpoder,
  poketypos: poketypos,
  pokedebilidades: pokedebilidades,
  huevos: huevos
};