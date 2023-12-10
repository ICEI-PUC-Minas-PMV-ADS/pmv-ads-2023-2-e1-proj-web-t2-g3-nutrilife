
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
    altura.value = "";
    peso.value = "";
    idade.value = "";
    sexo.value = "";
    sexo.selectedIndex = 0;
    atividade.value = "";  
    atividade.selectedIndex = 0; 
    objetivo.value = "";  
    objetivo.selectedIndex = 0; 
}

limpar.addEventListener("click", function (e) {
        e.preventDefault();
        limparInputs();    

    });

//Função Calcular


function calcularGasto() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const atividade = document.getElementById('atividade').value;
    const objetivo = document.getElementById('objetivo').value;
    const gasto = calcularGastoCalorico(peso, altura, idade, sexo, atividade, objetivo);
    

    if (gasto !== null) {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = gasto.toFixed(0);
    } else {
        alert("Algum dado foi fornecido incorretamente. Favor preencher novamente");
    }
}

function calcularGastoCalorico(peso, altura, idade, sexo, atividade, objetivo) {
    let gasto;

    if (sexo === "Masculino") {
        gasto = (13.8 * peso) + (5 * altura) - (6.8 * idade) + 66;
    } else if (sexo === "Feminino") {
        gasto = (9.6 * peso) + (1.9 * altura) - (4.7 * idade) + 655;
    } else {
        console.error('Sexo inválido. Escolha entre "Masculino" ou "Feminino".');
        return null;
    }

    let gastoAtividade;

    switch (atividade) {
        case "Sedentário":
            gastoAtividade = gasto * 1.2;
            break;
        case "Pouco ativo":
            gastoAtividade = gasto * 1.375;
            break;
        case "Ativo":
            gastoAtividade = gasto * 1.55;
            break;
        case 'ativo':
            gastoAtividade = gasto * 1.725;
            break;
        case "Muito ativo":
            gastoAtividade = gasto * 1.9;
            break;
        default:
            console.error('Atividade inválida. Escolha entre "Sedentário", "Pouco ativo", "Ativo", "ativo" ou "Muito ativo".');
            return null;
    }

    let gastoTotal;

    switch (objetivo) {
        case "perda de peso":
            gastoTotal = gastoAtividade * 0.85;
            break;
        case "manutencao":
            gastoTotal = gastoAtividade * 1;
            break;
        case "ganho":
            gastoTotal = gastoAtividade * 1.075;
            break;
        default:
            console.error('Objetivo inválido. Escolha entre "Perda de Pesp", "Manutenção de peso" ou "Ganho de massa".');
            return null;
    }

    // Armazenar gastoTotal no localStorage
    localStorage.setItem("gastoTotal", gastoTotal);

    return gastoTotal;
}





