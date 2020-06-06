const btn = document.querySelector('button');
const container = document.querySelector('.container');
const enemy = document.querySelector('.enemy');
const time = document.querySelector('.time');
let seconds = Number(time.textContent);

function clone(){
    const enemyClone = enemy.cloneNode(true);
    container.appendChild(enemyClone);
    enemyClone.style.top = '0px'
    start(enemyClone);
}

function init(){
    start(enemy);
    const timer = setInterval(()=>{
        seconds = seconds - 1  
        time.innerHTML = seconds
        if(seconds === 0){
            clearInterval(timer);
        } 
    },1000);
    const enemyAppear = setInterval(clone, 3000);
    setTimeout(()=>{clearTimeout(enemyAppear)},60000);
}

btn.addEventListener('click',init,{once:true})