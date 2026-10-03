let Ferramentario = [
    {ID: 523, NOME: "Chave de fenda", SETOR: "Montagem", Quantidade: 16, Status: "Ativo"},
    {ID: 524, NOME: "Lixadeira", SETOR: "Montagem", Quantidade: 9, Status: "Ativo"},
    {ID: 525, NOME: "Paquimetro", SETOR: "Usinagem", Quantidade: 12, Status: "Ativo"},
    {ID: 526, NOME: "Multimetro", SETOR: "Manutenção", Quantidade: 16, Status: "Ativo"},
    {ID: 527, NOME: "Folhas A4", SETOR: "Administrativo", Quantidade: 1024, Status: "Ativo"},
];

function Buscar_ferramenta(){
    let busca = Number(prompt("Qual ferramenta deseja visualizar?: "));
    
    for (let buscar of Ferramentario){
        if (buscar.ID === busca){
            console.log("Ferramenta encontrada!");
            
            for (let ferramenta in buscar){
                console.log(`${ferramenta}: ${buscar[ferramenta]}`);
            }
            
            return; // Sai da função imediatamente após imprimir tudo
        }
    }

    // Se o loop terminar e não tiver entrado no 'if', esta linha será executada:
    console.log(`Ferramenta com o ID ${busca} não foi encontrada!`);
}

function Lista_Ferramentas() {
    console.clear()
    console.table(Ferramentario)
}


Lista_Ferramentas()