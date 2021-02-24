let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 2);
        this.b = +prompt('b?', 8);
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());