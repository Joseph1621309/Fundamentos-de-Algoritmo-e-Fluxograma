//declarando variáveis globais
let ID = 528;  // Variável global para armazenar o próximo ID disponível para uma nova ferramenta. Inicialmente definido como 528, assumindo que os IDs anteriores já foram utilizados.
const status = ["Ativo", "Inativo"];  // Variável global que armazena os possíveis status de uma ferramenta.

let Ferramentario = [  //lista (array) de objetos (ferramentas)
    {ID: 523, NOME: "Chave de fenda", SETOR: "Montagem", Quantidade: 16, Status: "Ativo"},
    {ID: 524, NOME: "Lixadeira", SETOR: "Montagem", Quantidade: 9, Status: "Ativo"},
    {ID: 525, NOME: "Paquimetro", SETOR: "Usinagem", Quantidade: 12, Status: "Ativo"},    //Um objeto é uma estrutura formada de chaves e valores
    {ID: 526, NOME: "Multimetro", SETOR: "Manutenção", Quantidade: 16, Status: "Ativo"},  //Onde cada chave é um identificador único e cada valor pode ser de qualquer tipo de dado, incluindo outros objetos ou arrays.
    {ID: 527, NOME: "Folhas A4", SETOR: "Administrativo", Quantidade: 1024, Status: "Ativo"},
];                     //Um array é com se fosse uma lista que armazena diferentes valores, seja ele tanto uma string quanto um número, ou até mesmo um objeto.

//Funções do sistema:
//Uma função é um bloco de código que realiza uma tarefa específica e pode ser reutilizado em diferentes partes do programa. 
//Muitas dessas funções usarão o laço de repetição for, que é uma estrutura de controle que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira de maneira controlada e previsível. 

function Buscar_ferramenta(){ //Função para buscar ferramenta pelo ID

    let busca = Number(prompt("Qual ferramenta deseja visualizar? (Digite o ID): ")); // Solicita ao usuário o ID da ferramenta que deseja buscar
    let encontrado = false; // Variável para indicar se a ferramenta foi encontrada
    
    for (let buscar of Ferramentario){ //O for of ele faz um loop que percorre cada elemento do array Ferramentario, atribuindo cada elemento à variável buscar a cada iteração.
                                       //Dessa forma a cada ferramenta do array é verificada uma por uma, permitindo que o código dentro do loop seja executado para cada ferramenta individualmente.
                                       //O for of serve para realizar interações em arrays ou objetos, permitindo acessar diretamente os valores contidos neles sem a necessidade de indexação.

        if (buscar.ID === busca){      // Verifica se o ID da ferramenta atual (buscar.ID) é igual ao ID buscado (busca)
            alert(`Ferramenta encontrada!\nID: ${buscar.ID}\nNome: ${buscar.NOME}\nSetor: ${buscar.SETOR}\nQuantidade: ${buscar.Quantidade}\nStatus: ${buscar.Status}`); // Exibe um alerta com as informações da ferramenta encontrada
            encontrado = true;        // Atualiza a variável encontrado para true, indicando que a ferramenta foi encontrada
            break;                    // Para o loop for
        }
    }

    if (!encontrado) {               // Se a ferramenta não foi encontrada, exibe uma mensagem de alerta informando que a ferramenta com o ID especificado não foi encontrada
        alert(`Ferramenta com o ID ${busca} não foi encontrada!`);  
    }
}

function Lista_Ferramentas() { // Função para listar todas as ferramentas disponíveis
    let lista = "";            // Declaração de uma variavel local para armazenar a lista de ferramentas, inicialmente vazia
    for (let ferramenta of Ferramentario) {  // Loop for of que percorre cada ferramenta no array Ferramentario, com o objetivo de pegar apenas a chave NOME de cada objeto e armazenar na variável lista
        lista += ferramenta.NOME + "\n";     // A cada loop do for of o nome da ferramenta é adicionado à variável lista, seguido de uma quebra de linha (\n) para separar cada nome em uma nova linha
    }
    alert("Ferramentas disponíveis:\n" + lista);  //Por fim, exibe um alerta com a lista completa de ferramentas disponíveis, mostrando cada nome em uma linha separada
}

function Adicionar_Ferramenta() {   // Função para adicionar uma nova ferramenta ao array Ferramentario

    // Declaração de variáveis locais para armazenar os dados da nova ferramenta, inicialmente vazias ou com valor padrão
    let nome = ""
    let setor = ""
    let quantidade = 0


    while (true) { //A partir daqui passaremos a utilizr o while, que no caso é uma estrutura de repetição que executa um bloco de código enquanto uma condição especificada for verdadeira.
                   //No caso, estamos utilizando o while true, que significa que o loop continuará indefinidamente até que seja interrompido por uma instrução break.

        nome = prompt("Digite o nome da ferramenta: ");  // Solicita ao usuário que digite o nome da ferramenta e armazena na variável nome
        if (nome && nome.trim() !== "") {               // Verifica se o nome não é nulo, indefinido ou uma string vazia (após remover espaços em branco com '.trim()')
            break; // Nome válido, sai do loop
        } else {
            alert("Nome inválido! Por favor, digite um nome válido."); // Exibe uma mensagem de alerta informando que o nome digitado é inválido e solicita que o usuário digite um nome válido
        }
    }
    while (true) { // Loop para solicitar o setor da ferramenta até que seja fornecido um valor válido
        setor = prompt("Digite o setor da ferramenta: ");  // Solicita ao usuário que digite o setor da ferramenta e armazena na variável setor
        if (setor && setor.trim() !== "") {                // Verifica se o setor não é nulo, indefinido ou uma string vazia (após remover espaços em branco com '.trim()')
            break; // Setor válido, sai do loop
        } else {
            alert("Setor inválido! Por favor, digite um setor válido.");  // Exibe uma mensagem de alerta informando que o setor digitado é inválido e solicita que o usuário digite um setor válido
        }
    }
    while (true) {  // Loop para solicitar a quantidade da ferramenta até que seja fornecido um valor válido
        quantidade = Number(prompt("Digite a quantidade da ferramenta: "));  // Solicita ao usuário que digite a quantidade da ferramenta e converte para número, armazenando na variável quantidade
        if (!isNaN(quantidade) && quantidade >= 0) {                         // Verifica se a quantidade é um número válido (não NaN(Not a Number)) e maior ou igual a zero
            break; // Quantidade válida, sai do loop
        } else {
            alert("Quantidade inválida! Por favor, digite uma quantidade válida."); // Exibe uma mensagem de alerta informando que a quantidade digitada é inválida e solicita que o usuário digite uma quantidade válida
        }
    }

    let novaFerramenta = {  // Cria um objeto representando a nova ferramenta com os dados fornecidos pelo usuário
        ID: ID,
        NOME: nome,
        SETOR: setor,
        Quantidade: quantidade,
        Status: "Ativo"
    };
    Ferramentario.push(novaFerramenta);  //E por fim adiciona a nova ferramenta ao array Ferramentario usando o método push(), que adiciona um novo elemento ao final do array.
    alert(`Ferramenta adicionada com sucesso! ID: ${ID}`); // Exibe uma mensagem de alerta informando que a ferramenta foi adicionada com sucesso, mostrando o ID atribuído à nova ferramenta
    ID++;  //E para finalizar, a variavel global ID é incrementada em 1, garantindo que a próxima ferramenta adicionada receba um ID único e sequencial.
}

function Remover_Ferramenta() {  // Função para remover uma ferramenta do array Ferramentario com base no ID fornecido pelo usuário
    let remover = Number(prompt("Digite o ID da ferramenta que deseja remover: "));  // Solicita ao usuário que digite o ID da ferramenta que deseja remover e converte para número, armazenando na variável remover
    let encontrado = false;      // Variável para indicar se a ferramenta foi encontrada e removida

    for (let i = 0; i < Ferramentario.length; i++) {    // Loop for que percorre o array Ferramentario usando um índice (i) para acessar cada elemento do array
                                                        // Esse for possui um comportamento difrente do for of, pois ele permite acessar o índice de cada elemento do array
                                                        // Ele declara uma variavel (i) que começa em 0 e vai até o tamanho do array Ferramentario (Ferramentario.length), incrementando em 1 a cada iteração

        if (Ferramentario[i].ID === remover) {          // Verifica se o ID da ferramenta atual (Ferramentario[i].ID) é igual ao ID fornecido pelo usuário (remover)
            Ferramentario.splice(i, 1);                 // A função splice() é usada para remover a ferramenta do array Ferramentario. O primeiro argumento (i) indica o índice da ferramenta a ser removida, e o segundo argumento (1) indica que apenas um elemento deve ser removido a partir desse índice
            alert(`Ferramenta com o ID ${remover} foi removida!`);  // Exibe uma mensagem de alerta informando que a ferramenta com o ID especificado foi removida com sucesso
            encontrado = true;  // Atualiza a variável encontrado para true, indicando que a ferramenta foi encontrada e removida
            break; // Para o loop for, pois a ferramenta já foi removida e não é necessário continuar procurando
        }
    }

    if (!encontrado) {  // Se a ferramenta não foi encontrada, exibe uma mensagem de alerta informando que a ferramenta com o ID especificado não foi encontrada
        alert(`Ferramenta com o ID ${remover} não foi encontrada!`);  
    }
}

function Atualizar_Ferramenta() { // Função para atualizar os dados de uma ferramenta existente no array Ferramentario com base no ID fornecido pelo usuário
    let atualizar = Number(prompt("Digite o ID da ferramenta que deseja atualizar: "));  // Solicita ao usuário que digite o ID da ferramenta que deseja atualizar e converte para número, armazenando na variável atualizar
    let ferramentaIndex = -1; // Guarda a posição do item para usar fora do for

    for (let i = 0; i < Ferramentario.length; i++) {  // Loop for que percorre o array Ferramentario usando um índice (i) para acessar cada elemento do array
        if (Ferramentario[i].ID === atualizar) {      // Verifica se o ID da ferramenta atual (Ferramentario[i].ID) é igual ao ID fornecido pelo usuário (atualizar)
            ferramentaIndex = i; // Salva o índice atual
            alert(`Ferramenta encontrada! ID: ${Ferramentario[i].ID}\nNome: ${Ferramentario[i].NOME}\nSetor: ${Ferramentario[i].SETOR}\nQuantidade: ${Ferramentario[i].Quantidade}\nStatus: ${Ferramentario[i].Status}`);
            break;  // Para o loop for, pois a ferramenta foi encontrada e não é necessário continuar procurando
        }
    }

    if (ferramentaIndex === -1) { //
        alert(`Ferramenta com o ID ${atualizar} não foi encontrada!`);
        return; // Sai da função caso não encontre
    }

    let campo = Number(prompt("Qual campo deseja atualizar?\n(1) NOME\n(2) SETOR\n(3) Quantidade\n(4) Status\n(5) Sair\nDigite o número correspondente: "));

    if (campo === 1) {
        while (true) {
            let novoNome = prompt("Digite o novo nome da ferramenta: ");
            if (novoNome && novoNome.trim() !== "") {
                Ferramentario[ferramentaIndex].NOME = novoNome;
                alert(`Nome atualizado para: ${novoNome}`);
                break;
            } else {
                alert("Nome inválido!");
            }
        }
    } else if (campo === 2) {
        while (true) {
            let novoSetor = prompt("Digite o novo setor da ferramenta: ");
            if (novoSetor && novoSetor.trim() !== "") {
                Ferramentario[ferramentaIndex].SETOR = novoSetor;
                alert(`Setor atualizado para: ${novoSetor}`);
                break;
            } else {
                alert("Setor inválido!");
            }
        }
    } else if (campo === 3) {
        while (true) {
            let novaQuantidade = Number(prompt("Digite a nova quantidade da ferramenta: "));
            if (novaQuantidade >= 0 && !isNaN(novaQuantidade)) {
                Ferramentario[ferramentaIndex].Quantidade = novaQuantidade;
                alert(`Quantidade atualizada para: ${novaQuantidade}`);
                break; 
            } else {
                alert("Quantidade inválida!");
            }
        }
    } else if (campo === 4) {
        while (true) {
            let novoStatus = prompt("Digite o novo status da ferramenta (Ativo/Inativo): ");
            if (novoStatus && status.includes(novoStatus)) {
                Ferramentario[ferramentaIndex].Status = novoStatus;
                alert(`Status atualizado para: ${novoStatus}`);
                break; 
            } else {
                alert("Status inválido! Digite exatamente 'Ativo' ou 'Inativo'.");
            }
        }
    } else if (campo === 5) {
        alert("Atualização cancelada.");
    } else {
        alert("Opção inválida!");
    }
}

// Menu principal 
let rodando = true;
while (rodando) {
    let opcao = Number(prompt("Escolha uma opção:\n(1) Buscar ferramenta\n(2) Listar ferramentas\n(3) Adicionar ferramenta\n(4) Remover ferramenta\n(5) Atualizar ferramenta\n(6) Sair"));

    switch (opcao) {
        case 1: 
            Buscar_ferramenta()
            break
        case 2: 
            Lista_Ferramentas() 
            break
        case 3: 
            Adicionar_Ferramenta() 
            break
        case 4: 
            Remover_Ferramenta()
            break
        case 5: 
            Atualizar_Ferramenta() 
            break      
        case 6:
            alert("Saindo do programa...");
            rodando = false; // Quebra o loop while do menu
            break;
        default:
            alert("Opção inválida!");
    }   
}
