// Obtém os elementos do DOM
const registerLink = document.getElementById('register-link');
const registrationSection = document.getElementById('registration-section');
const loginSection = document.getElementById('login-section');

// Adiciona um ouvinte de eventos para o link de registro
registerLink.addEventListener('click', function (event) {
    event.preventDefault(); // Impede que o link redirecione para outra página
    registrationSection.style.display = 'block'; // Exibe a seção de registro
    loginSection.style.display = 'none';
});
