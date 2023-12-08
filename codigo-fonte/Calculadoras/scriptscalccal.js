
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
    idadeInput.value = "";
    sexoInput.value = "";
    sexoInput.selectedIndex = 0;
    atividadeInput.value = "";  
    atividadeInput.selectedIndex = 0; 
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
    const gasto = calcularGastoCalorico(peso, altura, idade, sexo, atividade);
    

    if (gasto !== null) {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `Seu gasto calórico total é aproximadamente ${gasto.toFixed(0)} calorias por dia.`;
    } else {
        alert("Algum dado foi fornecido incorretamente. Favor preencher novamente");
    }
}

function calcularGastoCalorico(peso, altura, idade, sexo, atividade) {
    let gasto;

    if (sexo === "Masculino") {
        gasto = (13.8 * peso) + (5 * altura) - (6.8 * idade) + 66;
    } else if (sexo === "Feminino") {
        gasto = (9.6 * peso) + (1.9 * altura) - (4.7 * idade) + 655;
    } else {
        console.error('Sexo inválido. Escolha entre "Masculino" ou "Feminino".');
        return null;
    }

    let gastoTotal;

    switch (atividade) {
        case "Sedentário":
            gastoTotal = gasto * 1.2;
            break;
        case "Pouco ativo":
            gastoTotal = gasto * 1.375;
            break;
        case "Ativo":
            gastoTotal = gasto * 1.55;
            break;
        case 'ativo':
            gastoTotal = gasto * 1.725;
            break;
        case "Muito ativo":
            gastoTotal = gasto * 1.9;
            break;
        default:
            console.error('Atividade inválida. Escolha entre "Sedentário", "Pouco ativo", "Ativo", "ativo" ou "Muito ativo".');
            return null;
    }

    // Armazenar gastoTotal no localStorage
    localStorage.setItem("gastoTotal", gastoTotal);

    return gastoTotal;
}





