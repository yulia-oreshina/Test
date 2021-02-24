function d(a, b, c, callback) {
    discriminant = Math.pow(b, 2) - 4 * a * c;
    alert("тест")
    callback();
}

d(9, -6, 1, function () {
    alert(discriminant)
})
