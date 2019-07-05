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
    </div>`;
    mostrar += llamar;
  }
  return mostrar;
};
contenedor.innerHTML = mostrardata(pokemones)

/*DECLARANDO BOTONES DE ORGANIZAR POR TIPOS*/
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











