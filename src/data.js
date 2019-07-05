const datapokemon = (pokemon) => {
  const vacio = [];
  for (let i =0; i < pokemon.lenght;i++);
  vacio.push({
    img:pokemon[i].img,
    nombre: pokemon[i].name,
    numero: pokemon[i].num,
  });
  return vacio;
};
window.pokemon= {
  datapokemon: datapokemon,
};


