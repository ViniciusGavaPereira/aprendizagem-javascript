console.log("Hello, World!");

console.log("Teste muito bom")


for(let i = 0;i<10;i++){
    console.log(i)

}

function adicionar_tarefa(form){
    console.log(document.getElementByClass(form));


}

const container =  `
            <li class="tarefa">
                <span>Estudar JavaScript</span>

                <button class="concluirBtn" onclick="alert('Teste')">
                    Concluir
                </button>

                <button class="removerBtn">
                    Remover
                </button>
            </li>
`