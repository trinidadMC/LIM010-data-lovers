/*DECLRANDO LOS BOTONES DEL LOGIN Y DAR(LE FUNCIONABILIDAD*/
const loginbox = document.getElementById("loginbox");
const login = document.getElementById("login");
const password = document.getElementById("contraseña");
const buttonUno = document.getElementById("btn1");
const error = document.getElementById("error");
const interfaz2 = document.getElementById("interfaz2");
let contador = 0;
buttonUno.addEventListener("click", () => {
  if (login.value && password.value === "LABORATORIA") {
    loginbox.classList.add("hide");
    interfaz2.classList.remove("hide");

  }
  else if (contador == 2) {
    error.innerHTML = "intentaste 3 veces ya no puedes entrar a la pagina";
  }
  else {
    contador++
    error.innerHTML = "contraseña incorrecta";
  }
});
/*LLAMANDO A MI DATA POKEMON DESDE DATA JS */
const contenedor = document.getElementById("contenedor");
const pokemones = POKEMON.pokemon;
const mostrardata = (pokemon) => {
  let mostrar = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div class='mostrar'>
      <img src="${pokemon[i].img}"/>
      <p>${pokemon[i].name}</p>
      <p>${pokemon[i].num}</p>
      <P>${pokemon[i].type}</p>
      <P>${pokemon[i].spawn_chance}</p>
      <P>${pokemon[i].weaknesses}</p>
    </div>`;
    mostrar += llamar;
  }
  return mostrar;
};
contenedor.innerHTML = mostrardata(pokemones)

/*FUNCIONABILDAD DE LOS POKEMONES POR ORDEN DE LA A-Z */
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
ordenaz.addEventListener('change', () => {
  if ('A-Z' === ordenaz.value) {
    const ordenar = ordenaAZ();

    contenedor.innerHTML = mostrardata(ordenar);
  }
});
/*FUNCIONABILIDAD POR ORDEN DE LA Z-A*/
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
ordenaz.addEventListener('change', () => {
  if ('Z-A' === ordenaz.value) {
    const desord = ordenaZA();
    contenedor.innerHTML = mostrardata(desord);
  }
});
/*HACIENOD LAS FUNCIONABILIDADA DE LOS POKEMONES POR TIPOS*/

const Tipos = document.getElementById("Tipos");
const tipado = () => {
  poketipado = [];
  const poketypos = ['Grass', 'Poison', 'Fire', 'ice', 'flying', 'Psychic', 'Water', 'Ground', 'Rock', 'Electric', 'Bug', 'Ghost', 'Dark', 'Fighthing', 'Fairy', 'Normal', 'Dragon', 'Steel'];
  for (let i = 0; i < poketypos.length; i++) {
    for (let o = 0; o < pokemones.length; o++) {
    if (poketypos[i] === pokemones[o].type[0]) {
      return poketipado.push(pokemones[o]);
    }
  } 
}return poketipado;
};
Tipos.addEventListener('change',() =>{
  if('Grass'=== Tipos.value){
    const tips = tipado();
    contenedor.innerHTML = mostrardata(tips);
  };
});

