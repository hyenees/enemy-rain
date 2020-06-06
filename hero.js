const hero = document.querySelector('.hero');
const bg = document.querySelector('#bg');

function heroMove(e){
    const left = getComputedStyle(hero).left;
    const heroPosition = Number(left.slice(0,left.length-2));

    if(e.keyCode===37){
        hero.classList.remove('right');
        hero.classList.add('left');
        hero.style.left = (heroPosition - 3) + 'px';
        if(hero.getBoundingClientRect().x < bg.getBoundingClientRect().x){
            hero.style.left = heroPosition + 'px';
        }
    }
    if(e.keyCode===39){
        hero.classList.remove('left');
        hero.classList.add('right');
        hero.style.left = (heroPosition + 3) + 'px';
        if(hero.getBoundingClientRect().right > bg.getBoundingClientRect().right){
            hero.style.left = heroPosition + 'px';
        }
    } 
}

window.addEventListener('keydown',heroMove);

