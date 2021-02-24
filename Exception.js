try {

    function deleted(a, b) {
        let del = a / b;
        if (b === 0 || isNaN(b), b === Infinity) {
            throw new SyntaxError("Не надо так делать");
        } else
            return del;
    }

    console.log(deleted(2, -9));
} catch (e) {
    console.log("Error:" + e.message);
}
