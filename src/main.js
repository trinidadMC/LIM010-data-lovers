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
ordenaz.addEventListener('change', () => {
  if ('A-Z' === ordenaz.value) {
    const ordenar = ordenaAZ();

    contenedor.innerHTML = mostrardata(ordenar);
  }
});
/*FUNCIONABILIDAD POR ORDEN DE LA Z-A*/
ordenaz.addEventListener('change', () => {
  if ('Z-A' === ordenaz.value) {
    const desord = ordenaZA();
    contenedor.innerHTML = mostrardata(desord);
  }
});
/*HACIENOD LAS FUNCIONABILIDADA DE LOS POKEMONES POR DEBILIDADES*/
porweakness.addEventListener('change', () => {
contenedor.innerHTML= mostrardata(pokedebilidades(pokemones,porweakness.value));
});
/*HACIENOD LAS FUNCIONABILIDAD DE LOS POKEMONES POR TIPOS*/
Tipos.addEventListener('change', () => {
  contenedor.innerHTML= mostrardata(poketypos(pokemones,Tipos.value));
  });

  /*ESTOS SON MIS ERRORES*/
// const newarray = mostrardata(window.pokemon.ordenpoder(pokemones,sorAsc.value));
// const NewOrden = ordenpoder(pokemones,ordenascend.value);
// contenedor.innerHTML = mostrardata(NewOrden);
/*ORDENANDO LOS POKEMONES DE MANERA ASCENDENTE Y DESCENDENTE*/
const ordenascend = document.getElementById('porspawn');
ordenascend.addEventListener('change' , () => {
  contenedor.innerHTML = mostrardata(ordenpoder(pokemones,ordenascend.value));

});

/* Funcion de mostrar pokemones*/
const mostrarPokemones = (arrayPokemones) => {
  contenedor.innerHTML = '';
  for (let i = 0; i < arrayPokemones.length; i++) {
    const num = arrayPokemones[i].num;
    const id = arrayPokemones[i].id;
    const nombre = arrayPokemones[i].name;
    const imagen = arrayPokemones[i].img;
    contenedor.innerHTML += `
    <div class='poke' name='pokemon' id=${id}>
    <p> ${num} </p>
    <p> ${nombre} </p>
    <img src="${imagen}"/>
    </div>`;
  }
};

const contenedor1 = document.getElementById('contenedor1');
contenedor1.addEventListener('click', () => {
  const poke = event.target.parentElement.id - 1;
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    document.getElementById('modalventana').classList.remove('hide');
    document.getElementById('modal-info').innerHTML = `
  <p>Nombre:  ${POKEMON.pokemon[poke].name}</p>
  <p>Peso: ${POKEMON.pokemon[poke].weight}   </p> 
  <p>Altura: ${POKEMON.pokemon[poke].height}</p>    
  <p>Tipo: ${POKEMON.pokemon[poke].type}</p> `;
  }
});



document.getElementById('cerrar').addEventListener('click', () => {
  document.getElementById('modalventana').classList.add('hide');
});