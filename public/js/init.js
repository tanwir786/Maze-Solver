const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];
const valid = (i, j) => {
    if (i <= 9 && j <= 9 && i >= 0 && j >= 0) return true;
    return false;
}


let matrix, vis, dis, inTime, outTime, Timer;
const initialise = () => {
    matrix = [], vis = [], inTime = [], outTime = [], dis = [];
    for (let i = 0; i <= 9; i++) {
        let row = [], v = [], v1 = [], xx = [];
        for (let j = 0; j <= 9; j++) {
            let box = document.querySelector(`#r${i}c${j}`);
            if (box.style.backgroundColor === 'white') row.push(1);
            else row.push(0);
            v.push(0);
            v1.push(0);
            xx.push(10000000);
        }
        inTime.push(v);
        outTime.push(v1);
        matrix.push(row);
        vis.push(v);
        dis.push(xx);
    }
}