document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcome-screen");
    const btnOpenInvite = document.getElementById("btn-open-invite");
    const musica = document.getElementById("background-music");

    btnOpenInvite.addEventListener("click", function () {
        // Toca a música (o navegador permite porque houve um clique real)
        musica.play().catch(error => {
            console.log("Erro ao tocar áudio:", error);
        });

        // Esconde a tela de boas-vindas com efeito fade-out
        welcomeScreen.classList.add("hidden");
    });
});
