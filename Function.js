function checkMin(a, b) {
    return (a < b) ? a : b;
}

console.log(checkMin(2, 5))

function pow(x, n) {
    let st = Math.pow(3, 2);
    return st;
}

console.log(pow());

function fibon(n) {
    let f = [1, 2];
    if (n <= 2) {
        let result = f.slice(0, n);
        return result;
    } else {
        for (i = 0; i < n - 2; i++) {
            f.push(f[f.length - 1] + f[f.length - 2]);
        }

        let result = f;
        return result;
    }
}

console.log(fibon(15));


function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(-2));




function deleted(a, b) {
    return a / b;
}
console.log(deleted(2, 2));
