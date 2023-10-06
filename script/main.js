let characterPos = 0;
const characterSpeed = 8;
let isjump = false;

const gameContainer = document.querySelector(".game-container");
const gameContainerWidth = gameContainer.offsetWidth;

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
            if(isjump === false){
                jump();
            }
            break;
    }

    if (characterPos < 0) {
        characterPos = 0;
    } else if (characterPos > gameContainerWidth - character.offsetWidth) {
        characterPos = gameContainerWidth - character.offsetWidth;
    }

    character.style.left = characterPos + "px";
});

function jump(){
    if(!isjump){
        isjump = true;
        console.log(character.offsetHeight)
        let jumpHeight = 100;
        let jumpDuration = 300;
        character.style.transform = `translateY(-${jumpHeight}px)`;
        setTimeout(()=>{       
            character.style.transform = `translateY(0)`;
            isjump = false;
        }, jumpDuration);
    }
}