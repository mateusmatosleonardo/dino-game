const dino = document.querySelector('.dino')
const bg = document.querySelector('.bg')
let position = 0;
let isJump = false

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJump){
            jump()
        }
    }
}

function jump(){
    // posição inicial
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
    let randomTime = Math.random() * 6000
    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    bg.appendChild(cactus)
    let leftInterval = setInterval(()=>{
        cactusPosition -= 6;
        cactus.style.left = cactusPosition + 'px'
        if(cactusPosition < 60){
            clearInterval(leftInterval)
            bg.removeChild(cactus)
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-hover">Fim de jogo</h1>';
        }else{
            cactusPosition -= 6;
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)
    setTimeout(createCactus, randomTime)
}
createCactus()
document.addEventListener('keyup', handleKeyUp)