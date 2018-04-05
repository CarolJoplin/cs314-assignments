/* Carol Joplin
   index.js
   js-strings-arrays
*/

/* 1. Char Swap - Write a JavaScript function to create a new string from an input string from the user 
     swapping the position of first and last characters. 
     The string length entered by the user must be greater than or equal to 1. */
//FINISHED
function charSwap () {
    let userString = prompt("Please enter a string: ");
    
    // if cancel was pressed: 
    if(!userString){
        alert("You pressed 'Cancel'.");
        console.log("You must not like numbers.");
    } else {
        let letterArray = userString.split("");
        //if (!isNaN(letterArray)){
            //alert("Please only use letters.");
            //charSwap();
        //} else {
        // swap first and last elements
        let temp = 0;
  
        if (letterArray[1] === undefined){
            alert(userString);
        } else {
            temp = letterArray[0];
            letterArray[0] = letterArray[letterArray.length-1];
            letterArray[letterArray.length-1] = temp;

            let newString = letterArray.join("");
            alert(newString);
            console.log(newString);
        }
    }
}
//charSwap();

/* 2. Hi String - Write a JavaScript function that asks for a string from the user 
      and returns a new string adding "Hi" in front of the input string. 
      If the input string begins with "Hi" then return the original string.   
      The string length entered by the user must be greater than or equal to 1.*/
// FINISHED
function hiString() {
    let userString = prompt("Please enter a string: ");
    if(userString.length >= 1) {
        if(userString == 'Hi') {
            console.log(userString);
        } else {
            userString = 'Hi' + userString;
            console.log(userString);
        }
    } else {
        alert("Please enter a string of length one or more");
        hiString();
    }

}
//hiString();

/* 3. Three Chars to Front - Write a JavaScript function to create a new string from an input string
      taking the last 3 characters and adding them to the front of the string. 
      The string length entered by the user must be at least 3 characters long.*/
// FINISHED
function threeCharsToFront() {
    let userString = prompt("Please enter a string greater than three characters");

    /*let userArray = userString.slice('');

    // takes first three characters and puts them at the end
    let newString = userString[0] + userString[1] + userString[2];

    userString = userString.slice(3);
    userString = userString + newString;

    console.log(`newString = ${newString}`);
    console.log(`userString = ${userString}`); */

    // take last three characters and put them at the front
    //let userArray = userString.slice('');
        
    if(userString.length >= 3) {
        let subStr = userString.substr(length-3);

        userString = subStr + userString.slice(0, length-3);

        console.log(userString);
        alert(userString);
    } else {
        alert("Please enter a string greater than three characters.");
        threeCharsToFront();
    }
}
//threeCharsToFront();

/* 4. Strings to Sentence - Write a JavaScript function that asks for a list of items from the user separated by commas. 
      Convert this to an array without the commas or extra spaces. 
      Alert the items back to the user with a single saying that is formed using backticks (``). 
        Example:
        input from user: blue, dogs, chocolate
        output from function: My favorite color is blue, dogs are awesome, and I love chocolate! */
// FINISHED
function stringsToSentence() {
    let userString = prompt("Please enter your first, middle and last name in a comma-separated list: ");
    // if cancel was pressed
    if(!userString){
        alert("You pressed 'Cancel'.");
        console.log("You must not have a name.");
    } else {
        let commas = userString.split(', ');
        // if values were input
        
        // if numbers are present
        if(!isNaN(commas[0]) || !isNaN(commas[1]) || !isNaN(commas[2])){
            alert("Please only use letters.");
            stringsToSentence();
        } else {
            // if comma split works
            if(commas[1] !== undefined){
                console.log(`Your first name is '${commas[0]}', your middle name is '${commas[1]}', and your last name is '${commas[2]}'.`);
            }
            // if no commas in string
            else if(commas[1] === undefined) {
                // use space as a split: 
                //let noCommas = userString.split(' ');
                //console.log(`Your first name is '${noCommas[0]}', your middle name is '${noCommas[1]}', and your last name is '${noCommas[2]}'.`);
            
                // use alert to prompt for comma-separated list
                alert("Please enter a comma-separated list");
                stringsToSentence();
            }
            // if ok was pressed when there was no input
            else if(userString === undefined) {
                alert("Please tell me your name.");
                stringsToSentence();
            }
        }
    }
}
//stringsToSentence();

/* 5. Upper or Lower - Write a JavaScript function that asks for a string from the user 
      and creates a new string from that string where the first 3 characters are lowercase. 
      If the string length entered by the user is less than 3 convert all the characters in upper case. */
//FINISHED
function upperOrLower() {
    let userString = prompt("Please enter a string.");

    if(!userString){
        alert("You pressed 'Cancel'.");
        console.log("You must not have a name.");
    } else { 
        if(userString.length >= 3) {
            userString = userString[0].toLowerCase() + userString[1].toLowerCase() + userString[2].toLowerCase() + userString.substr(3);
            alert(userString);
            console.log(userString);
        } else {
            userString = userString.toUpperCase();
            alert(userString);
            console.log(userString);
        }
    }
}
//upperOrLower();

/* 6. Integer Swap - Write a JavaScript function that asks for a comma separated list of numbers from the user 
      and swap the first and last elements of a given array of integers. Alert the result to the user. 
      The array length given from the user should be at least 1. */
function integerSwap() {
    let userString = prompt("Please enter a comma-separated list of at least one integer: ");
    // if cancel was pressed
    if(!userString){
        alert("You pressed 'Cancel'.");
        console.log("You must not like numbers.");
    } else {
        let commaInts = userString.split(', ');
        // if values were input:
        
        // if strings are present
        // problem with this: says all ints are strings or doesn't catch strings
        if(isNaN(commaInts)) {
            // if comma split works
            if(commaInts[1] !== undefined){
                // swap first and last elements
                let temp = 0;
  
                if (commaInts[1] === undefined){
                    alert(commaInts);
                }else{
                    temp = commaInts[0];
                    commaInts[0] = commaInts[commaInts.length-1];
                    commaInts[commaInts.length-1] = temp;

                    alert(commaInts);
                    console.log(commaInts);
                }
                
            
            // if no commas in string
            } else if(commaInts[1] === undefined) {
                // use space as a split: 
                //let noCommas = userString.split(' ');
                //console.log(`Your first name is '${noCommas[0]}', your middle name is '${noCommas[1]}', and your last name is '${noCommas[2]}'.`);
            
                // use alert to prompt for comma-separated list
                alert("Please enter a comma-separated list");
                integerSwap();
            }
            // if ok was pressed when there was no input
            else if(userString === undefined) {
                alert("Please tell me your favorite numbers.");
                integerSwap();
            }
        } else { //if (isNaN(commaInts)) {
            alert("Please only use numbers.");
            integerSwap();
        }
    }
}
//integerSwap();

/* 7. Longest String - Write a JavaScript function that asks for a comma separated list of strings from the user 
      and alerts the longest string from the given array of strings. */
function longestString() {
    let userString = prompt("Please enter a comma-separated list of strings: ");
    
    // if cancel was pressed
    if(!userString){
        alert("You pressed 'Cancel'.");
        console.log("You must not like numbers.");
    } else {
    // if values were input:
        let userArr = userString.split(', ');

        // if strings are present
        // problem with this: says all ints are strings or doesn't catch strings
        if(!Number.isInteger(userArr)) {
            // if comma split works
            if(userArr[1] !== undefined){
                let longest = userArr.reduce(function (a, b) { return a.length > b.length ? a : b; });
                console.log(longest);
            }

            // if no commas in string
            else if(userArr[1] === undefined) {
                // use space as a split: 
                //let noCommas = userString.split(' ');
                //console.log(`Your first name is '${noCommas[0]}', your middle name is '${noCommas[1]}', and your last name is '${noCommas[2]}'.`);
        
                // use alert to prompt for comma-separated list
                alert("Please enter a comma-separated list");
                longestString();
            }
            // if ok was pressed when there was no input
            else if(userString === undefined) {
                alert("Please tell me your favorite numbers.");
                longestString();
            }
        } else {
            alert("Please only use numbers.");
            longestString();
        }
    }
}
//longestString();

/* 8. Largest Even Number - Write a JavaScript function that asks for a comma separated list of numbers from the user. 
      Convert this list to an array of numbers and alert the largest even number from the array of integers. */
function longestEvenNumber() {
    let userString = prompt("Please enter a comma-separated list of ints: ");
        
    // if cancel was pressed
    if(!userString){
        alert("You pressed 'Cancel'.");
        console.log("You must not like numbers.");
    } else {
    // if values were input:
        let userArr = userString.split(', ');
        //console.log(!isNaN(userArr));
        // if strings are present
        // problem with this: says all ints are strings or doesn't catch strings
        if(!Number.isInteger(userArr)) {
            // if comma split works
            if(userArr[1] !== undefined){
                let evens = [];
                for (let i = 0; i < userArr.length; i++) {
                    if(parseInt(userArr[i]) % 2 === 0) {
                    evens.push(userArr[i]);
                    }
                }
                let biggest = 0;
                for (let j = 0; j < userArr.length; j++) {
                    if(userArr[j] > biggest) {
                        biggest = userArr[j];
                    }
                }
                console.log(parseInt(biggest));
                alert(parseInt(biggest));
            }
    
            // if no commas in string
            else if(userArr[1] === undefined) {
                // use space as a split: 
                //let noCommas = userString.split(' ');
                //console.log(`Your first name is '${noCommas[0]}', your middle name is '${noCommas[1]}', and your last name is '${noCommas[2]}'.`);
            
                // use alert to prompt for comma-separated list
                alert("Please enter a comma-separated list");
                longestEvenNumber();
            // if ok was pressed when there was no input
            } else if(userString === undefined) {
                alert("Please tell me your favorite even numbers.");
                longestEvenNumber();
            }
        } else {
            alert("Please only use numbers.");
            longestEvenNumber();
        }
    }
}
//longestEvenNumber();

/* 9. Current Day Time - Write a JavaScript function that alerts the current day and time in the following format:
        Example:
        Today is Friday.
        It is 4:00PM. */
// FINISHED
function currentDayTime() {
    let now = new Date();
    
    let time = new Date();
    hours = now.getHours();

    let minutes = new Date();
    minutes = now.getMinutes();

    // determine am or pm
    ampm = (hours >= 12) ? "PM" : "AM";

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
            break;
        case 1:
            day = "Monday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
            break;
        case 2:
            day = "Tuesday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
            break;
        case 3:
            day = "Wednesday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
            break;
        case 4:
            day = "Thursday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
            break;
        case 5:
            day = "Friday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
            break;
        case 6:
            day = "Saturday";
            alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`)
    }
}
//currentDayTime();

/* 10. Unlimited Function - Write a JavaScript function that accepts an unlimited number of
       arguments and prints them out in a single string in a single alert. */
//FINISHED
function unlimitedFunction() {
    // need:
        // cancel case
        // empty string + ok button
    let userUnlimited = prompt("Please enter a comma-separated list of at least one argument: ");
    
    // if cancel was pressed
    if(!userUnlimited){
        alert("You pressed 'Cancel'.");
        console.log("You must not like numbers.");
    } else if (userUnlimited === undefined) {
        alert("Please insert arguments");
        unlimitedFunction();
    } else {
        alert(userUnlimited);
        console.log(userUnlimited);
    }
}
//unlimitedFunction();