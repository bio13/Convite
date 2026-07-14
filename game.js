const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
const gameOverScreen = document.getElementById("game-over-screen");

let score = 0;
let isAlive = true;
let EstadoCorrida = 1;

// 1. ANIMAÇÃO DE CORRIDA (Alterna as duas imagens a cada 150 milissegundos)
setInterval(function() {
    // Só alterna a imagem de corrida se o personagem estiver vivo e no chão (sem a classe jump)
    if (isAlive && !player.classList.contains("jump")) {
        if (EstadoCorrida === 1) {
            player.src = "corrida2.png";
            EstadoCorrida = 2;
        } else {
            player.src = "corrida1.png";
            EstadoCorrida = 1;
        }
    }
}, 150);

// Inicia o movimento do obstáculo
obstacle.style.right = "3600px"; 
obstacle.classList.add("obstacle-move");

// 2. LOGICA DO PULO E TROCA DE IMAGENS (Salto e Queda)
function jump() {
    if (!player.classList.contains("jump") && isAlive) {
        player.classList.add("jump");
        
        // Assim que clica, muda para a imagem de SALTO
        player.src = "salto.png";

        // Na metade do tempo do pulo (250ms), ele começa a descer, então muda para QUEDA
        setTimeout(function() {
            if (isAlive) player.src = "queda.png";
        }, 250);

        // Quando o pulo termina (500ms), remove a classe e volta para a imagem de CORRIDA
        setTimeout(function () {
            player.classList.remove("jump");
            if (isAlive) player.src = "corrida1.png";
        }, 500);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW") {
        jump();
    }
});

// 2. Escuta o toque na tela (para celulares e tablets)
document.addEventListener("touchstart", function () {
    jump();
});

// 3. Escuta o clique do mouse (para computadores)
document.addEventListener("click", function () {
    jump();
});

// Loop de colisão
const checkCollision = setInterval(function () {
    if (!isAlive) return;

    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft > 50 && obstacleLeft < 90 && playerTop <= 40) {
        isAlive = false;
        obstacle.classList.remove("obstacle-move");
        gameOverScreen.style.display = "block";
    } else {
        score++;
        scoreDisplay.innerText = "Pontos: " + Math.floor(score / 10);
    }
}, 10);

function resetGame() {
    isAlive = true;
    score = 0;
    scoreDisplay.innerText = "Pontos: 0";
    gameOverScreen.style.display = "none";
    obstacle.classList.remove("obstacle-move");
    void obstacle.offsetWidth; 
    player.style.bottom = "0px";
    player.classList.remove("jump");
    player.src = "corrida1.png";
    obstacle.classList.add("obstacle-move");
}
