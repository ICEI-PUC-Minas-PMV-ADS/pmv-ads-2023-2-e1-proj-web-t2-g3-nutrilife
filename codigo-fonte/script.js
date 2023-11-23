
// Recupere o estado do usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

console.log(usuarioLogado);

// Verifique se o usuário está logado
const isUsuarioLogado = usuarioLogado != null;

// Obtenha o botão de login
const loginLink = document.getElementById('loginLink');

// Obtenha o ícone do usuário
const userIcon = document.getElementById('userImageLink');

// Obtenha o menu dropdown
const dropdownMenu = document.getElementById('dropdownMenu');

console.log(isUsuarioLogado);

if (isUsuarioLogado) {
    // Se o usuário estiver logado, oculte o botão de login e mostre o ícone do usuário
    loginLink.style.display = 'none';
    userIcon.style.display = 'block';
} else {
    // Se o usuário não estiver logado, mostre o botão de login e oculte o ícone do usuário
    loginLink.style.display = 'block';
    userIcon.style.display = 'none';
    
}

// Adiciona um ouvinte de eventos para o clique no ícone do usuário
userImageLink.addEventListener("click", function (event) {
    // Para a propagação do evento para evitar que o documento ouça o mesmo clique
    event.stopPropagation();

    // Alterna a visibilidade do menu
    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
});

// Adicione um ouvinte de eventos para fechar o menu se clicar fora dele
document.addEventListener("click", function () {
    dropdownMenu.style.display = "none";
});

///////////FUNCIONALIDADE LOGOFF/////////
document.addEventListener("DOMContentLoaded", function () {
    // ... (seu código existente)

    // Adicione o evento de logoff após o carregamento da página
    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function () {
        // Limpe os dados do usuário logado
        localStorage.removeItem("usuarioLogado");

        // Redirecione para a página de login ou outra página apropriada
        window.location.href = '/codigo-fonte/telaLoginFacul/TelaLogin.html';
    });
});


