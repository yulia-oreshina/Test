let cat = {
    name: "Васька",
    age: 1,
    sleeping: true,
  }

let dog = {
    __proto__: cat
}
console.log(dog);