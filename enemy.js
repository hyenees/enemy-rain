const enemies = document.querySelector('.enemy');
const bgHeight = bg.offsetHeight;
const enemyHeight = enemies.offsetHeight;
const audio = new Audio('audio/dying.wav');
const counter = document.querySelector('.counter');
let count = 0;

function enemyMove(enemy){
    const fall =setInterval(()=>{
        enemy.style.backgroundPosition = 'left';
        const top= getComputedStyle(enemy).top;
        const enemyPosition = Number(top.slice(0,top.length-2));
        enemy.style.top = (enemyPosition + 1) + 'px';
       
        if(enemyPosition === bgHeight - enemyHeight) {
            clearInterval(fall);
            enemy.style.backgroundPosition='right';
            audio.play();
            setTimeout(()=>{container.removeChild(enemy)},5000);
        } 

        // kill enemy
        const heroLeft = hero.getBoundingClientRect().left;
        const heroRight = hero.getBoundingClientRect().right;
        const heroTop = hero.getBoundingClientRect().y;
        const enemyLeft = enemy.getBoundingClientRect().left;
        const enemyRight = enemy.getBoundingClientRect().right;
        const enemyBottom = enemy.getBoundingClientRect().bottom;
        
        if(heroTop < (enemyBottom - 50)){
            if((heroLeft < enemyRight && heroLeft > enemyLeft) || (heroRight < enemyRight && heroRight > enemyLeft)){
                clearInterval(fall);
                enemy.style.backgroundPosition='right';
                audio.play();
                setTimeout(()=>{container.removeChild(enemy)},5000);
                count = count + 1;
                counter.innerText = count;
            }
        }
    },10) 
}

function randomX(min,max){
    return Math.random() * (max - min) + min;
}

function start(enemy){
    const x = randomX(0, bg.offsetWidth-enemy.offsetWidth);
    enemy.style.left = x + 'px';
    enemyMove(enemy);    
}