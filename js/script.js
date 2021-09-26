const dino = document.querySelector('.dino')
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

document.addEventListener('keyup', handleKeyUp)