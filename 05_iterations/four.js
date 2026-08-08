const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in loop 
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {//print keys ie index
    //console.log(programming[key]);
}

// const map = new Map() //cant be iterated
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//for...of requires an iterable; for...in requires enumerable properties.

// for (const key in map) {
//     console.log(key);
// }