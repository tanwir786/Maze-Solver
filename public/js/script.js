const randomize = () => {
    let grid = document.querySelector('#grid');
    grid.innerHTML = '';
    Timer = 0;
    for (let i = 0; i <= 9; i++) {
        let divs = document.createElement('div');
        divs.setAttribute('id', `r${i}`);
        divs.setAttribute('class', 'myRow');
        grid.appendChild(divs);
    }
    for (let i = 0; i <= 9; i++) {
        let row = document.querySelector(`#r${i}`);
        for (let j = 0; j <= 9; j++) {
            let box = document.createElement('div');
            let rand = Math.floor(Math.random() * 10) + 1;
            if (i === 0 && j === 9) rand = 5, box.innerHTML = 'End';
            if (i === 9 && j === 0) rand = 5, box.innerHTML = 'Start';
            if (rand > 7) box.style.backgroundColor = 'black';
            else box.style.backgroundColor = 'white';
            box.setAttribute('class', 'box');
            box.setAttribute('id', `r${i}c${j}`);
            row.appendChild(box);
        }
    }
}
randomize();