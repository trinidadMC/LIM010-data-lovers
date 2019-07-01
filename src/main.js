/* Manejo del DOM */
/*DECLRANDO LOS BOTONES DEL LOGIN Y DAR(LE FUNCIONABILIDAD*/
    const loginbox =document.getElementById("loginbox");
    const inputtext = document.getElementById("loging");
    const password = document.getElementById("contraseña");
    const buttonuno = document.getElementById("btn1");
    const error = document.getElementById("error");
    const interfaz2 = document.getElementById("interfaz2");
    let contador = 0;
    buttonuno.addEventListener("click", () => {
        if (password.value === "LABORATORIA") {
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
      })