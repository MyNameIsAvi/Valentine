const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const container = document.querySelector('.container');
const question = document.querySelector('.question');
const bunny = document.querySelector('.bunny');
const bunnyRight = document.querySelector('.bunny-right');

const questionBank = [
    "Pleaseee Breannaaaa!!",
    "You really should say yes:)",
    "I promise you'll have a good Valentine!",
    "Don't make the bunnies sad :(",
    "But I love you!",
    "I will give you kids:)"
];

function createConfetti() {
    setInterval(() => {
        for (let i = 0; i < 100; i++) { // Number of confetti per interval
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            // Adjust confetti left position to ensure full coverage
            confetti.style.left = `${Math.random() * 100}vw`;  // Full viewport width coverage
            confetti.style.animationDelay = `${Math.random() * 1}s`; // Random delay of up to 1 second
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;

            document.body.appendChild(confetti);

            // Remove confetti after 5 seconds
            setTimeout(() => confetti.remove(), 5000);
        }
    }, 500); // Generate new confetti every 500ms
}

function handleYes() {
    question.textContent = "Thank you! You've made the right decision!";
    question.classList.add('thank-you');
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    bunny.style.display = 'none';  // Hide bunny after clicking "Yes"
    bunnyRight.style.display = 'none';  // Hide right bunny after clicking "Yes"
    createConfetti();
}

function handleNo() {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.transform = `translate(${newX}px, ${newY}px)`;

    const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentFontSize + 4}px`; // Increases font size of "Yes" button

    // Change the question to a random one from the bank
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    question.textContent = questionBank[randomIndex];
}
