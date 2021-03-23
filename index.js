let container = document.getElementById('container');


for (let i = 0; i < 9; i++){
    container.innerHTML = 
    `
        <img class = 'img${i}'src="./assets/autumn.jpg" alt="">
        <img class = 'img${i}'src="./assets/coves.jpg" alt="">
        <img class = 'img${i}'src="./assets/joshuatree.jpg" alt="">
        <img class = 'img${i}'src="./assets/palmtrees.jpg" alt="">
        <img class = 'img${i}'src="./assets/river.jpg" alt="">
        <img class = 'img${i}'src="./assets/sanddunes.jpg" alt="">
        <img class = 'img${i}'src="./assets/snow.jpg" alt="">
        <img class = 'img${i}'src="./assets/waterfall.jpg" alt="">
        <img class = 'img${i}'src="./assets/wetforest.jpg" alt="">
    `
}

setInterval(function(){
    let counter = Math.round(Math.random()*8);
    let dynImg = container.children[counter];

    let prop = Math.round(Math.random()*7);

    switch(prop) {
        case 0:
            dynImg.classList.add('flipU');
            break;
        case 1:
            dynImg.classList.add('flipD');
            break;
        case 2:
            dynImg.classList.add('flipL');
            break;
        case 3:
            dynImg.classList.add('flipR');
            break;
        case 4:
            dynImg.classList.add('up');
            break;
        case 5:
            dynImg.classList.add('down');
            break;
        case 6:
            dynImg.classList.add('left');
            break;
        case 7:
            dynImg.classList.add('right');
    }
}, 2000);