const dados = [
    {
        min: 0,
        max: 18.5,
        classification: "abaixo ou igual a 18,5",
        info: "Abaixo do peso",
    },
    {
        min: 18.6,
        max: 24.9,
        classification: "Entre 18,6 e 24,9",
        info: "Peso normal",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Entre 25 e 29,9",
        info: "Acima do peso",
    },
    {
        min: 30,
        max: 34.9,
        classification: "Entre 30 e 34,9",
        info: "Obesidade grau I",
    },
    {
        min: 35,
        max: 39.9,
        classification: "Entre 35 e 39,9",
        info: "Obesidade grau II",
    },
    {
        min: 40,
        max: 99,
        classification: "Acima de 40",
        info: "Obesidade grau III",
    },
]

const alturaInput = document.querySelector("#altura");
const pesoInput = document.querySelector("#peso");
const limpar = document.querySelector("#botao-limpar");
const calcular = document.querySelector("#botao-calcular");
const imcValor = document.querySelector("#imc-numero span");
const imcMsg = document.querySelector("#imc-info span");
const imcResult = document.querySelector("#container-calc-cal-res");

//Funções de validação de preenchimento 

function validarNumeroVirgula(input) {
    input.value = input.value.replace(/[^0-9,]/g, '');
    input.value = input.value.replace(/,+/g, ',');
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
    }
}

function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}

//Função Limpar Calculadora

function limparInputs () {
    alturaInput.value = "";
    pesoInput.value = "";

}

limpar.addEventListener("click", function (e) {
        e.preventDefault();
        limparInputs();

    });


//Função Calcular

function mostrarResult () {
    imcResult.classList.replace("hide","show");
}

function calcularIMC(peso, altura) {

const imc = (peso / (altura * altura)).toFixed(1);
return imc; 

}

// Função para formatar a hora no formato "HH:mm"
function formatarDataHora(data) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('pt-BR', options).format(data);
}



calcular.addEventListener("click", (e) => {
    e.preventDefault();

    const peso = +pesoInput.value.replace(",", ".");
    const altura = (+alturaInput.value.replace(",", ".")) / 100;

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioLogado) {
        const imc = calcularIMC(peso, altura);
        let info;

        dados.forEach((item) => {
            if (imc >= item.min && imc <= item.max) {
                info = item.info;
            }
        });

        console.log(info);

        if (!info) return;

        imcValor.innerText = imc;
        imcMsg.innerText = info;

        mostrarResult();

        // Crie um objeto contendo o resultado do IMC e as informações do usuário
        const resultadoIMC = {
            usuario: usuarioLogado,
            imc: imc,
            info: info,
            dataHora: formatarDataHora(new Date()), // Use a função para formatar data e hora
        };

        // Obtenha os resultados anteriores (se houver) do localStorage
        const resultadosAnteriores = JSON.parse(localStorage.getItem("resultadosIMC")) || [];

        // Adicione o novo resultado ao array de resultados
        resultadosAnteriores.push(resultadoIMC);

        console.log(resultadoIMC);

        // Armazene o array atualizado no localStorage
        localStorage.setItem("resultadosIMC", JSON.stringify(resultadosAnteriores));

        console.log(resultadosAnteriores);

        
    } else {
        alert("Usuário não logado. Faça o login para calcular o IMC.");
    }

    
});

