export default class InterfaceUsuario {
  constructor() {}

  mostrarTela(tela) {
    const telas = [
      "selection-screen",
      "login-screen",
      "home-screen",
      "cardapio-screen",
      "menu-screen",
      "carrinho-screen",
      "pagamento-screen",
      "ticket-screen",
    ];
    telas.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) {
        elemento.style.display = id === tela ? "block" : "none";
      } else {
        console.error(`Erro: Elemento '${id}' não encontrado no DOM.`);
      }
    });
  }
}
