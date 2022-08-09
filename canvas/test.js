const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

const role = new Image();
role.src = './assets/images/role/role.png';

const spriteWidth = 64;
const spriteHeight = 64;

let gameFrame = 0;

let i = 0;
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(role, spriteWidth * i, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    if(gameFrame % 5 === 0){
        i = i >= 2 ? 0 : i + 1;
    }
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();