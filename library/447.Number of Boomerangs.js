function numberOfBoomerangs(points) {
    let len = points.length,
        res = 0;

    for (let i = 0; i < len; i++) {
        let map = new Map();
        for (let j = 0; j < len; j++) {
            if (i === j) {
                continue;
            }
            let dis = getDistance(points[i], points[j]);
            map.set(dis, (map.get(dis) || 0) + 1)
        }

        for (let value of map.values()) {
            res += value * (value - 1)
        }
    }

    return res;
}

function getDistance(i, j) {
    return Math.pow(i[0] - j[0], 2) + Math.pow(i[1] - j[1], 2)
}
