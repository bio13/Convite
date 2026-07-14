function abrirModal() {
    document.getElementById("modal-acompanhantes").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-acompanhantes").style.display = "none";
}

function confirmarPresenca(acompanhantes) {
    const mensagem =
        `Olá! Estou confirmando minha presença na festa da Maria Clara! Levarei ${acompanhantes} acompanhante(s) 😁`;

    const url =
        `https://wa.me/5585988667435?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}
