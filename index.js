'use strict'

/* Scroll To */
// FINISHED
let oneButton = document.getElementById('oneButton');
// https://www.w3schools.com/jsref/met_element_scrollintoview.asp
let scrollOne = document.getElementById('one');

let twoButton = document.getElementById('twoButton');
let scrollTwo = document.getElementById('two');

let threeButton = document.getElementById('threeButton');
let scrollThree = document.getElementById('three');

let fourButton = document.getElementById('fourButton');
let scrollFour = document.getElementById('four');

let fiveButton = document.getElementById('fiveButton');
let scrollFive = document.getElementById('five');

oneButton.onclick = function() {
    console.log('First Button Clicked');
    // scroll to functionality
    scrollOne.scrollIntoView();
}

twoButton.onclick = function() {
    console.log('Second Button Clicked');

    // scroll to functionality
    scrollTwo.scrollIntoView();
}

threeButton.onclick = function() {
    console.log('Third Button Clicked');

    // scroll to functionality
    scrollThree.scrollIntoView();
}

fourButton.onclick = function() {
    console.log('Fourth Button Clicked');

    // scroll to functionality
    scrollFour.scrollIntoView();
}

fiveButton.onclick = function() {
    console.log('Fifth Button Clicked');

    // scroll to functionality
    scrollFive.scrollIntoView();
}

/* 1. Pick Background Color */
// FINISHED
let blueButton = document.getElementById('blue');
let greenButton = document.getElementById('green');

blueButton.onclick = function() {
    console.log("blue background");
    document.getElementById("one").style.backgroundColor="lightblue";
}

greenButton.onclick = function() {
    console.log("Green background");
    document.getElementById("one").style.backgroundColor="lightgreen";
}


/* 2. Click For Pink/Orange */
// FINISHED
let toggleButton = document.getElementById("colortoggle");

toggleButton.onclick = function() {
    if(toggleButton.innerText==="Click for pink!"){
        toggleButton.innerText="Click for orange!"
        //console.log(toggleButton.innerText);
        document.getElementById("two").style.backgroundColor="lightpink";
    } else {
        toggleButton.innerText="Click for pink!"
        //console.log(toggleButton.innerText);
        document.getElementById("two").style.backgroundColor="orange"; 
    }
}

/* 3. Add Input Text To List */

// FUNCTIONAL
function addFunction() {
    let button = document.getElementById("submitButton");
    button.onclick = addItem;
}   
  
function addItem() {
    var textInput = document.getElementById("item");  
    var text = textInput.value;   
    var ul = document.getElementById("ul");  
    var li = document.createElement("li");  
    li.innerHTML = text;    
    if (ul.childElementCount == 0) {  
        ul.appendChild(li);       
    }
    else {
        ul.insertBefore(li, ul.firstChild);
    }
}


addFunction();

/* 4. Remove Item Clicked */

let rlist = document.getElementById('removeList');

function removeItem(e) {
    e.target.remove();
}

rlist.addEventListener('click', removeItem, false);

/* 5. Highlight Item */
/* I tried all of the commented out non-jQuery, pure JavaScript code
    and for whatever reason, only the jQuery would work, even though
    I'm pretty sure I translated the jQuery into pure JS correctly */

//let hlist = document.getElementById('highlightList');
//let hitems = hlist.getElementsByTagName("li");

// hitems.onclick = function() {
//     // hitems.classList.remove('clicked');
//     // this.classList.add('clicked');

// }

// function selectItem(e) {
//     hlist.classList.remove('clicked');
//     //e.target.style.backgroundColor = 'lightblue';
//     e.target.classList.add('clicked');
// }

// hlist.addEventListener('click', selectItem, false);


// $("#list3 li").click(function () {
//     $("#list3 li").removeClass('clicked');
//     $(this).addClass('clicked');

// });

$(document).ready(function () {
    $("#highlightList li").click(function () {
        $("#highlightList li").removeClass('clicked');
        $(this).addClass('clicked');

    });
});