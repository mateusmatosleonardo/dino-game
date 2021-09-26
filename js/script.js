const dino = document.querySelector('.dino')
const bg = document.querySelector('.bg')
let isJump = false

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJump){
            jump()
        }
    }
}

function jump(){
    let position = 0; // posição inicial
    isJump = true
    let upInterval = setInterval(()=>{
        if(position >= 150){
            clearInterval(upInterval)
            isJump = false
        let downInterval = setInterval(()=>{
            if(position <= 0){
                clearInterval(downInterval)
            }else{
                position -= 20;
                dino.style.bottom = position + 'px'
            }
        }, 20)    
        }else{
        // subindo
        position += 20
        dino.style.bottom = position + 'px'
        }
    }, 20)
}

function createCactus(){
    const cactus = document.createElement('div')
    let cactusPosition = 1000;
    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    bg.appendChild(cactus)
    let leftInterval = setInterval(()=>{
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px'
    }, 20)
}
createCactus()
document.addEventListener('keyup', handleKeyUp)