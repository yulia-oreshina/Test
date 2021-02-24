let user = {};
user.name = "Artem";
user.surname = "Ognev";

user.name = "Fedor";
delete user.surname;

console.log(user);