


const mario = document.querySelector('.mario');
var bloco = document.querySelector('.bloco');
let pulo = 0;


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

function contabilizarPulo(event){
    if(event.keyCode === 32){
        pulo++;
        console.log(pulo);
    }
    if(pulo > 3){
        bloco.style.display = 'none';
    }
}


document.addEventListener('keydown', contabilizarPulo);
document.addEventListener('keydown', jump);
