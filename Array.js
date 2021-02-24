let array = [100, 0, 50, -1, 90,-248923]

let max = getMax(array);
let min = getMin(array);
console.log(max);
console.log(min);
console.log(array.length);

function getMax(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}

function getMin(array){
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}