const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const role = new Image();
role.src = './assets/images/role/role.png';
const spriteWidth = 64;
const spriteHeight = 64;

let gameFrame = 0;
let staggerFrame = 8;

let directionX = 0;
let directionY = 0;
let speed = 8;

let spriteAnimations = {};
let animationState = [
    {
        name:'down',
        frames:3
    },
    {
        name:'left',
        frames:3,
    },
    {
        name:'right',
        frames:3
    }
];

animationState.forEach((state,index)=>{
    let frames = {
        loc:[]
    }
    for(let i = 0; i < state.frames; i++){
        let positionX = spriteWidth * i;
        let positionY = spriteHeight * index;
        frames.loc.push({ x: positionX, y: positionY })
    }
    spriteAnimations[state.name] = frames;
})

console.log(spriteAnimations)

let playerState = 'right';
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor( gameFrame / staggerFrame ) % spriteAnimations[playerState].loc.length;
    let frameX = spriteAnimations[playerState].loc[position].x;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(role, frameX, frameY, spriteWidth, spriteHeight, directionX, directionY, spriteWidth, spriteHeight )
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();

document.addEventListener('keydown',e=>{
    let reg = /(up|down|left|right)/i;
    if(reg.test(e.key)){
        switch(RegExp.$1){
            case 'Down':
                playerState = 'down';
                directionY += speed;
                break; 
                case 'Up' :
                    playerState = 'down';
                    directionY -= speed;
                break;
            case 'Left':
                playerState = 'left';
                directionX -= speed;
                break;
            case 'Right':
                playerState = 'right';
                directionX += speed;
                break;
        }
    }
})