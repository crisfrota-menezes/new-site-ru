import Usuario from "./usuario.js";
import InterfaceUsuario from "./interface.js";

document.addEventListener("DOMContentLoaded", async () => {
  const ui = new InterfaceUsuario();

  let usuarioAtual = null; // Armazena o usuário logado

  // Eventos de navegação
  document.getElementById("student").addEventListener("click", async () => {
    usuarioAtual = new Usuario("estudante");

    // Carrega o login dinamicamente
    const response = await fetch("../html/login.html");
    const html = await response.text();
    const container = document.getElementById("login-screen");
    container.innerHTML = html;
    container.style.display = "flex";

    // Oculta a tela anterior
    document.querySelector(".container").style.display = "none";

    container.querySelector(".container#login-screen").style.display = "block";
    // Re-inicializa o formulário
    setupLoginForm();
  });

  document.getElementById("visitor").addEventListener("click", async () => {
    usuarioAtual = new Usuario("visitante");
    const response = await fetch("../html/home.html");
    const html = await response.text();
    const container = document.getElementById("home-screen");
    container.innerHTML = html;
    container.style.display = "flex";
    document.querySelector(".container").style.display = "none";

    // Adicionar esta linha para inicializar a tela
    ui.mostrarTela("home-screen");
  });

  function setupLoginForm() {
    const form = document.getElementById("login-form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const ra = document.getElementById("ra").value;
        const senha = document.getElementById("senha").value;

        try {
          const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ra, senha }),
          });

          if (!response.ok) {
            throw new Error("Erro ao realizar o login.");
          }

          const data = await response.json();

          if (data.success) {
            const usuario = new Usuario(data.tipo, data.ra);

            if (usuario.tipo === "estudante") {
              ui.atualizarNavbar(usuario);
              ui.mostrarTela("home-screen");
            }
          } else {
            alert("RA ou senha incorretos. Tente novamente.");
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
});
