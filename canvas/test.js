const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let player = new Image();
player.src = './assets/images/role/role.png';

const spriteWidth = 64;
const spriteHeight = 64;

let gameFrame = 0;
let staggerFrame = 6;

let animationState = [
    {
        name:'down',
        frames:3
    },
    {
        name:'left',
        frames:3
    },
    {
        name:'right',
        frames:3
    }
]

let spriteAnimations = {};

animationState.forEach((state, index) => {
    let frame = {
        loc:[]
    }
    for(let i = 0; i < state.frames; i++){
        let x = spriteWidth * i;
        let y = spriteHeight * index;
        frame.loc.push({ x, y });
    }
    spriteAnimations[state.name] = frame;
})

console.log(spriteAnimations)

let playerState = 'left';
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor( gameFrame / staggerFrame ) % spriteAnimations[playerState].loc.length;
    let frameX = spriteAnimations[playerState].loc[position].x;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(player, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();