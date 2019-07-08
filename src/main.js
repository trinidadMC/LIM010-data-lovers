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
/*HACIENOD LAS FUNCIONABILIDADA DE LOS POKEMONES POR TIPOS*/
Tipos.addEventListener('change', () => {
contenedor.innerHTML= mostrardata(window.pokemon.poketypos(pokemones,Tipos.value));
});