
function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const textoTarefa = input.value.trim();
    
    if (textoTarefa !== "") {
        const lista = document.getElementById("listaTarefas");
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = textoTarefa;
        
        novaTarefa.addEventListener("click", function() {
            this.classList.toggle("concluida");
        });

        novaTarefa.addEventListener("dblclick", function() {
            this.remove();
        });

        lista.appendChild(novaTarefa);
        input.value = "";
    }
}

