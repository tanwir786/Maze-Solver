
const dfs = (i, j) => {
    vis[i][j] = 1;
    inTime[i][j] = ++Timer;
    if (i === 0 && j === 9) {
        for (let t = 1; t <= Timer; t++) {
            for (let I = 0; I <= 9; I++) {
                for (let J = 0; J <= 9; J++) {
                    let box = document.querySelector(`#r${I}c${J}`);
                    if (inTime[I][J] === t) {
                        setTimeout(function () {
                            box.style.backgroundColor = 'blue';
                        }, 300 * t);
                    }
                    if (outTime[I][J] === t) {
                        setTimeout(function () {
                            box.style.backgroundColor = 'Magenta';
                        }, 300 * t);
                    }
                }
            }
        }
        let box = document.querySelector(`#r${0}c${9}`);
        setTimeout(function () {
            box.style.backgroundColor = '#a1ff0a';
        }, 300 * Timer);
        return;
    }
    for (let k = 0; k < 4; k++) {
        let x = i + dx[k], y = j + dy[k];
        if (valid(x, y) && !vis[x][y] && matrix[x][y] === 1) {
            dfs(x, y);
        }
    }
    outTime[i][j] = ++Timer;
}
const DFS = () => {
    if (Timer > 0) {
        alert("First reset the grid!!");
        return;
    }
    Timer = 0;
    initialise();
    dfs(9, 0);
    if (!vis[0][9]) alert('No Path Found');
}


