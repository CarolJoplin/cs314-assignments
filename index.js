"use strict";

/* 4. Create a function that asks for a true/false from the user ( confirm() ) 
        and handles the answer from the user with an if/else statement. */
// Finished 

function confirmFunction() {
    let confirmResponse = confirm("If true, press ok. If false, press cancel.");
    if (confirmResponse) {
        console.log(confirmResponse);
    } else {
        console.log(confirmResponse);
    }
} 

/* 6. Be sure to call both functions so that they execute when your script is run. */
confirmFunction();

/* 5. Now rewrite that function (but keep that original function in your code) 
        and use a ternary operator instead of an if/else statement. */
// Finished

function confirmFunction() {
    let confirmResponse = confirm("If true, press ok. If false, press cancel.");
    confirmResponse = confirmResponse==true ? console.log(confirmResponse) : console.log(confirmResponse);
}

/* 6. Be sure to call both functions so that they execute when your script is run. */
confirmFunction();

/* 7. Create a function that asks a user for a NUMBER input ( prompt() ) and handle the users
    response with an alert based on what they type. You should handle the cases of nothing being entered, 
    ‘cancel’ being selected, and something other than a number being entered. 
    With each case, a different alert() message should be shown to the user. */

function numberFunction() {
    let promptResponse = prompt("Enter a number: ");
    if (promptResponse === "") {
        // user pressed OK, but the input field was empty
        // Finished 10:33
        alert("You did not input anything");
        let nothingResponse = prompt("Enter a number: ");
        console.log(nothingResponse);
    } else if(promptResponse && !isNaN(promptResponse)) {
        // Finished 10:33
        console.log(promptResponse);
        alert(`You Entered '${promptResponse}'`);
    } else if (isNaN(promptResponse)) {
        // if user input a string
        // Finished 
        alert("You did not enter a number. Please enter a number")
        let stringResponse = prompt("Enter a number: ");
        console.log(stringResponse);
    } else if (!promptResponse){
        // user pressed cancel
        // Finished 10:33
        alert("You pressed cancel");
        console.log("cancel");
   }
}

/* 8. Be sure to call this function so that it executes when your script is run. */
numberFunction();

/* 9. You will create a constructor function that constructs an object that contains at least 3
    key-value pairs. One of the key-value pairs must be a function that references another
    key in that object. */
function User(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

/* 11. Use your constructor to construct an object. */
let myUser = new User("Carol", "Joplin", "23");
console.log("User", myUser);

/* 10. You will create a function that makes a copy of an object and has the option of adding an
    additional key-value pair to the object. There are multiple ways you could do this, so
    interpret it in a way that makes sense to you. */
function copyUser(givenUser) {
    
    console.log("sisUser", givenUser);

    /* 12. Then use your copy function to make a copy (not by reference) of that object and add
        another key-value pair to the new copied object. */

    //clone sisUser object
    // let clone = {};
    // for (let key in sisUser) {
    //     clone[key] = sisUser[key];
    // }

    // console.log("clone", clone);

    //clone sisUser object (equivalent to above)
    const clone = Object.assign({}, givenUser);
    console.log("clone", clone);
    
    //add attribute
    let from ={from: "WA"};
    Object.assign(clone, from);
    console.log("clone after 'from' added:", clone);

}

let sisUser = new User("Lauren", "Joplin", "26");
copyUser(sisUser);


/* 15. Create a function declaration that takes 2 strings and has an optional 3rd string
    parameter. If there is no 3rd parameter, provide a default. This function will return a
    single string incorporating these 3 parameters. */
// Finished 

// function showMessage(firstName, lastName, message="Hello") { //can specify result that's not 'undefined'
// 	    console.log(firstName + ' ' + lastName + ' - ' + message);
// }
// showMessage('Carol', 'Joplin');

/* 16. Now comment out the above, and rewrite the function as a function expression. */
// Finished 

// let showMessage = function(firstName, lastName, message="Hello") { //can specify result that's not 'undefined'
//      console.log(firstName + ' ' + lastName + ' - ' + message);
// }
// showMessage('Carol', 'Joplin');

/*17. Now comment out the above, and rewrite the function expression using an arrow
function. Make this arrow function as short as possible. */
//Finished

let showMessage = (firstName, lastName, message="Hello") => {console.log(firstName + ' ' + lastName + ' - ' + message);}
showMessage('Carol', 'Joplin');