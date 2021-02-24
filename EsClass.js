class People {
    constructor(fio, age) {
        this.fio = fio;
        this.age = age;
    }
}

class Tester extends People {
    constructor() {
        super("Орешина Юлия Романовна");
    }

    inf() {
        console.log(this.fio + "- тестер");
    }
}

new Tester().inf();

