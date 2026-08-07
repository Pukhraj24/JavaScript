const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)n//Arrays wont merge (array ke andr array aa jayega) push worsk on original array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) makes a  new array while merging 
// console.log(allHeros);

//spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //array ke andr array ko normal return kr deta hai 
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //bool
console.log(Array.from("Hitesh")) //from converts it to array
console.log(Array.from({name: "hitesh"})) // interesting as it cant diectly convert to array confused bec keys ka bnau ya valuue ka ya dono isliye 
//returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //return new array from set of elements