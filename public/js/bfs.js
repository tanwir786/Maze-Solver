
const bfs = () => {
    let q = new Queue;
    let path = [];
    q.add([9, 0]);
    vis[9][0] = 1;
    dis[9][0] = 0;
    Timer = 0;
    while (q.size()) {
        let Q = new Queue;
        while (q.size()) {
            let u = q.front();
            q.pop();
            let i = u[0], j = u[1];
            path.push([Timer, i, j]);
            if (i === 0 && j === 9) {
                for (let el of path) {
                    let t = el[0], I = el[1], J = el[2];
                    let box = document.querySelector(`#r${I}c${J}`);
                    setTimeout(function () {
                        box.style.backgroundColor = 'blue';
                    }, 300 * t);
                }

                let pathmoves = [[0, 9]], dist = dis[0][9];
                while (i != 9 || j != 0) {
                    if (i > 0 && dis[i - 1][j] == dist - 1) {
                        pathmoves.push([i - 1, j]);
                        i--;
                    }
                    if (i + 1 <= 9 && dis[i + 1][j] == dist - 1) {
                        pathmoves.push([i + 1, j]);
                        i++;
                    }
                    if (j > 0 && dis[i][j - 1] == dist - 1) {
                        pathmoves.push([i, j - 1]);
                        j--;
                    }
                    if (j + 1 <= 9 && dis[i][j + 1] == dist - 1) {
                        pathmoves.push([i, j + 1]);
                        j++;
                    }
                    dist--;
                }
                for (let l = pathmoves.length - 1; l >= 0; l--) {
                    let I = pathmoves[l][0], J = pathmoves[l][1];
                    let box = document.querySelector(`#r${I}c${J}`);
                    setTimeout(function () {
                        box.style.backgroundColor = 'yellow';
                    }, 300 * Timer + 100 * (l + 1));
                }
                return;
            }
            for (let k = 0; k < 4; k++) {
                let x = i + dx[k], y = j + dy[k];
                if (valid(x, y) && !vis[x][y] && matrix[x][y] === 1) {
                    vis[x][y] = 1;
                    dis[x][y] = 1 + dis[i][j];
                    Q.add([x, y]);
                }
            }
        }
        Timer++;
        q = Q;
    }
}
const BFS = () => {
    if (Timer > 0) {
        alert("First reset the grid!!");
        return;
    }
    initialise();
    bfs();
    if (!vis[0][9]) {
        alert("Path not found");
        return;
    }

}

