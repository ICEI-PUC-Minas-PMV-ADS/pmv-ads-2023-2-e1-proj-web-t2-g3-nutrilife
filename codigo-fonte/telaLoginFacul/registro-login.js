// Obtém os elementos do DOM
const registerLink = document.getElementById('register-link');
const registrationSection = document.getElementById('registration-section');
const loginSection = document.getElementById('login-section');

// Adiciona um ouvinte de eventos para o link de registro
registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede que o link redirecione para outra página
    registrationSection.style.display = 'block'; // Exibe a seção de registro
    loginSection.style.display = 'none';
});
//c
const formularioRegistro = document.getElementById("registerForm");

formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("NewName").value;
    const email = document.getElementById("NewEmail").value;
    const senha = document.getElementById("NewPassword").value;

    // Obtém a lista de usuários registrados do LocalStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    // Verifica se o email já está registrado
    const emailJaRegistrado = usuariosRegistrados.some(user => user.email === email);

    if (emailJaRegistrado) {
        alert("Este e-mail já está registrado. Tente com outro e-mail.");
    } else {
        // Adiciona o novo usuário à lista de usuários registrados
        const novoUsuario = { nome, email, senha };
        usuariosRegistrados.push(novoUsuario);

        // Atualiza os registros no LocalStorage
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

        alert("Registro realizado com sucesso");
        

        // Limpa o formulário
        formularioRegistro.reset();

        document.getElementById("registration-section").style.display = 'none';
        loginSection.style.display = 'block';

    }
});

const formularioLogin = document.getElementById("loginForm");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    const usuarioCorrespondente = usuariosRegistrados.find(u => u.email === email && u.senha === senha);

    if (usuarioCorrespondente) {
        alert("Login bem-sucedido!");
        // Defina o usuário logado antes de redirecionar
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioCorrespondente));

        // Redirecione para a página de dados do usuario
        window.location.href = '../index.html';
        
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});