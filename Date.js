function formatDate(date) {

    let dd = date.getDate();

    let mm = date.getMonth();

    let yy = date.getFullYear();

    return dd + '.' + mm + '.' + yy;
}

let d = new Date(1996, 11, 10);
console.log(formatDate(d));