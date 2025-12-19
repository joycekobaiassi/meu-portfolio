function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const lista = document.getElementById("lista");

    if (input.value === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");
    item.innerText = input.value;

    // Marcar como concluída
    item.onclick = function () {
        item.classList.toggle("concluida");
    };

    // Botão de remover
    const botao = document.createElement("button");
    botao.innerText = "X";
    botao.style.marginLeft = "10px";

    botao.onclick = function () {
        lista.removeChild(item);
    };

    item.appendChild(botao);
    lista.appendChild(item);
    input.value = "";
}
