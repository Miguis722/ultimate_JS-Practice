/* 
Character of TV */
let name = "Tanjiro";
let anime = "Demon slayer";
let age = 16;

let personaje = {
    name: name,
    anime: anime,
    age: age,
};

console.log(personaje)
console.log(personaje.name)
console.log(personaje.anime)
console.log(personaje.age)

console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje['llave'] = 16;

// if we dont need already a information that is inside of a 
// we use delete and the location of the item that we want to delete.

delete personaje.anime;

console.log(personaje)