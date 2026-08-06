// Dates

let myDate = new Date()  //date ka object 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0, 23)  (Year,Month,Date)  Month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) (Year,Month,Date,Hours,Minutes)
// let myCreatedDate = new Date("2023-01-14") YY-MM-DD 
let myCreatedDate = new Date("01-14-2023") //MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //returns milisecond from 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

//when month single digit start from 0 but when 2 digits start from 1