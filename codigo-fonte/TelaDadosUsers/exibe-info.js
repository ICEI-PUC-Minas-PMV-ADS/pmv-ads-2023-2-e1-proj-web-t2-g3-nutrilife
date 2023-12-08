// Recupere as informações do usuário armazenadas no localStorage
const usuarioLogadoJSON = localStorage.getItem("usuarioLogado");

// Verifique se as informações do usuário estão disponíveis no localStorage
if (usuarioLogadoJSON) {
    // Converta a string JSON de volta para um objeto JavaScript
    const usuarioLogado = JSON.parse(usuarioLogadoJSON);

    // // Atualize elementos na página com as informações do usuário
    // const nomeElement = document.querySelector('.DadosUsuario .nome');
    // const emailElement = document.querySelector('.DadosUsuario .email');

    // // Atualize os elementos com as informações do usuário
    // nomeElement.textContent = usuarioLogado.nome;
    // emailElement.textContent = usuarioLogado.email;

    // Recuperar os resultados anteriores do localStorage
    const resultadosAnteriores = JSON.parse(localStorage.getItem("resultadosIMC")) || [];

    // Obtenha o resultado mais recente
    const resultadoMaisRecente = resultadosAnteriores.length > 0 ? resultadosAnteriores[resultadosAnteriores.length - 1] : null;

    // Função para exibir o resultado mais recente na página
    function exibirResultadoMaisRecente(resultado, usuarioLogado) {
        const containerResultado = document.querySelector('.Container__meusDados'); // Substitua pelo ID do elemento onde deseja exibir o resultado
        const alertaLogin = document.querySelector('.loginAlert');
        const resultadoGastoCaloricoDiario =  parseInt(localStorage.getItem("gastoTotal"));

        // Limpe o conteúdo atual do contêiner (evitar duplicatas)
        containerResultado.innerHTML = '';

        if (resultado) {
            const resultadoElemento = document.createElement('div');
            resultadoElemento.classList.add('Container__meusDados'); // Adicione a classe CSS ao contêiner
            alertaLogin.setAttribute('hidden', true);
            resultadoElemento.innerHTML = `
            
            <h1 class="meusDados__titulo">Dados Pessoais</h1>
            <span class="meusDados__DadosNumericos">
                <div id="container-resultado">
                    <h2>Resultados do IMC</h2>
                    <p class="meusDados__titulo">Resultado Mais Recente</p>
                 <div class="meusDados__DadosNumericos">
                    <p class="meusDados__IMC">
                        <h3>Seu IMC</h3>
                        <p class="valorImc">${resultado.imc}</p>
                        <p class="statusIMC">${resultado.info}</p>
                        <h3>Data:</h3>
                        <p class="dataRecente">${resultado.dataHora}</p>
                    </p>
                </div>

                    <!-- Os resultados serão exibidos aqui dinamicamente -->
                </div>
                <span class="meusDados__gastoCalorico">
                    <h3>Gasto Calórico Diário</h3>
                    <p class="gastoCalorico">${resultadoGastoCaloricoDiario}</p>
                    <p>Kcal</p>
                </span>
            </span>
            <span class="DadosUsuario">
                <h3>Nome Completo:</h3>
                <!-- Estes Spans receberão informações do script para atualizar os dados dos usuários -->
                <span class="nome">${usuarioLogado.nome}</span>
                <h3>E-mail:</h3>
                <span class="email">${usuarioLogado.email}</span>
            </span>
            `;

            containerResultado.appendChild(resultadoElemento);
        }
    }

    // Chame a função para exibir o resultado mais recente na página
    exibirResultadoMaisRecente(resultadoMaisRecente, usuarioLogado);
} else {
    // Se as informações do usuário não estiverem disponíveis, você pode lidar com isso aqui
    console.error("Informações do usuário não encontradas no localStorage");
}
