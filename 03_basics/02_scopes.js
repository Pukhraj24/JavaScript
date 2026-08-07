//var c = 300 //function ke bahar bhi aa jata hai if we use var
let a = 300
if (true) {
    let a = 10 //let bahar nhi aata
    const b = 20 //const bahar nhi aata
    // console.log("INNER: ", a); //block scope
    
}
//var global scope



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
//can use before declaration
function addone(num){
    return num + 1
}



addTwo(5)
//hoisting in this way we can call before declaration
const addTwo = function(num){ //can be called expression
    return num + 2
}