let characterPos = 0;
let characterVerticalPos = 0;
const characterSpeed = 8;
const characterVerticalSpeed = 8;

const gameContainer = document.querySelector(".game-container");
const gameContainerWidth = gameContainer.offsetWidth;
const gameContainerHeight = gameContainer.offsetHeight;

const character = document.querySelector(".character");

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowRight":
            characterPos += characterSpeed;
            break;
        case "ArrowLeft":
            characterPos -= characterSpeed;
            break;
        case "ArrowUp":
            characterVerticalPos += characterVerticalSpeed;
            break;
        case "ArrowDown":
            characterVerticalPos -= characterVerticalSpeed;
            break;
    }

    if (characterPos < 0) {
        characterPos = 0;
    } else if (characterPos > gameContainerWidth - character.offsetWidth) {
        characterPos = gameContainerWidth - character.offsetWidth;
    }

    if (characterVerticalPos < 0) {
        characterVerticalPos = 0;
    } else if (characterVerticalPos > gameContainerHeight - character.offsetHeight) {
        characterVerticalPos = gameContainerHeight - character.offsetHeight;
    }

    character.style.left = characterPos + "px";
    character.style.bottom = characterVerticalPos + "px";
});

console.log("commit");
