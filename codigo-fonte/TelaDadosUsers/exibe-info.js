// Recupere as informações do usuário armazenadas no localStorage
const usuarioLogadoJSON = localStorage.getItem("usuarioLogado");

// Verifique se as informações do usuário estão disponíveis no localStorage
if (usuarioLogadoJSON) {
    // Converta a string JSON de volta para um objeto JavaScript
    const usuarioLogado = JSON.parse(usuarioLogadoJSON);

    // Atualize elementos na página com as informações do usuário
    const nomeElement = document.querySelector('.DadosUsuario .nome');
    const emailElement = document.querySelector('.DadosUsuario .email');

    // Atualize os elementos com as informações do usuário
    nomeElement.textContent = usuarioLogado.nome;
    emailElement.textContent = usuarioLogado.email;
} else {
    // Se as informações do usuário não estiverem disponíveis, você pode lidar com isso aqui
    console.error("Informações do usuário não encontradas no localStorage");
}