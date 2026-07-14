// Primitive Data Types(Call by Value)
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score= 100 
const scoreValue= 100.33

const isLoggedIn= false
const Temp= null
let userEmail;

const id=Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 23274843938888968n  // n makes it bigInt

//javascript is dynamically typed

//Reference Type(Non primitve)  they are object type
// Arrays, Objects, Functions func is object function

const heroes = ["Ironman","Thor","Hulk"]
//Object in curly braces 
let myObj = {
    name: "hitesh",
    age: 20
}

//Function can be treted as var too

const myFunc = function(){
    console.log("Pukhraj");
}

console.log(typeof bigNumber);
console.log(typeof Temp);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ****************************

//Stack(Primitive) and Heap(Non primitive)
//In stack we get a copy and in Heap we directly change on original value

let myYTname ="Pukhraj"

let anothername=myYTname
anothername="cc"

console.log(anothername);

let user1={
    email: "hjd",
    upi: "udj"
}

let user2 = user1

user2.email="ehdjgc"

console.log(user1.email);
