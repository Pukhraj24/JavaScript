const accountID = 14453
let accountEmail = "pukhrajgoenka@gmail.com"
var accountPassword= "Pukhraj"
accountCity="Yamuna Nagar"

// accountID=2  //not allowed

accountEmail="hcg@gjc.com"
accountPassword="833"
accountCity="Agra" //way to declare variable
let accountState;

console.log(accountID);
/*
Prefer not to use var beacuse of issue in
block scope and functional scope
*/
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])