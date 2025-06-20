const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const question = document.querySelector('h1');
const heartsContainer = document.querySelector('.hearts-container');

/**
 * ESTA FUNÇÃO FOI ATUALIZADA
 * Move o botão para uma posição aleatória, garantindo que ele permaneça
 * totalmente visível com uma margem de segurança de 10 pixels das bordas.
 */
function moveButton() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    // Define uma margem de segurança para evitar que o botão toque nas bordas
    const safetyMargin = 10;

    // Calcula a área máxima disponível para o canto superior esquerdo do botão
    const maxX = viewportWidth - buttonWidth - safetyMargin;
    const maxY = viewportHeight - buttonHeight - safetyMargin;

    // A posição mínima é a própria margem de segurança
    const minX = safetyMargin;
    const minY = safetyMargin;

    // Gera uma posição aleatória dentro da área segura (entre o mínimo e o máximo)
    // A fórmula é: Math.random() * (max - min) + min
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    // Aplica a nova posição ao botão
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('click', moveButton);

yesButton.addEventListener('click', () => {
    question.textContent = 'EU SABIA! TE AMO! ❤️';
    question.style.color = '#FFD700'; 
    document.querySelector('.buttons').style.display = 'none';
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '&#10084;';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = Math.random() * 1 + 1 + 'rem';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);