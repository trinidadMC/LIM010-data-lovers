
/*TRAENDO LOS POKEMONES DE LA DATA*/
const datapokemon = (pokemon) => {
  const vacio = [];
  for (let i =0; i < pokemon.lenght;i++);
  vacio.push({
    img:pokemon[i].img,
    nombre: pokemon[i].name,
    numero: pokemon[i].num,
    tipospokes:pokemon[i].type,
  });
  return vacio;
};
window.pokemon= {
  datapokemon: datapokemon,
};
/*ORDENANDO LOS POKEMONES DE LA A-Z*/
const ordenaz = document.getElementById("ordenAZ");
const ordenaAZ = () => {
  nombrePokemones = [];
  const ordenador = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"];
  for (let i = 0; i < ordenador.length; i++) {
    for (let Z = 0; Z < pokemones.length; Z++) {
      if (ordenador[i] === pokemones[Z].name[0]) {
        nombrePokemones.push(pokemones[Z]);
      };

    }

  } return nombrePokemones;
};
window.pokemon={
  datapokemon:datapokemon,
};
/*ORDENANDO LOS POKEMONES DE LA Z-A*/
const ordenaZA = () => {
  pokemonesnombre = [];
  const desordenar = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  for (let a = 0; a < desordenar.length; a++) {
    for (let b = 0; b < pokemones.length; b++) {
      if (desordenar[a] === pokemones[b].name[0]) {
        pokemonesnombre.push(pokemones[b]);
      };
    }
  } return pokemonesnombre;
};
window.pokemon={
  datapokemon: datapokemon,
};
/*FILTRANNDO LOS POKEMONES POR TIPOS*/
const poketypos = (pokemones,tiposp ) => {
  return pokemones.filter((element)=>{
  return element.type.indexOf(tiposp) > -1
  });
};
window.pokemon ={
  poketypos: poketypos
};






