'use strict'

let submitForm = document.getElementById("submitButton");
//let formContainer = document.getElementsByClassName("formContainer");

let outerFormContainer = document.createElement("div");
outerFormContainer.classList = 'outerFormContainer';

let nameFormContainer = document.createElement("div");
nameFormContainer.classList = 'nameFormContainer';

let emailFormContainer = document.createElement("div");
emailFormContainer.classList = 'emailFormContainer';

let aboutFormContainer = document.createElement("div");
aboutFormContainer.classList = 'aboutFormContainer';

submitForm.onclick = function() {
    event.preventDefault();

    let name = document.getElementById("firstName").value;

    let nameText = document.createElement('h5');
    nameText.id = 'myName';
    nameText.innerHTML = name;
    
    let email = document.getElementById("emailBox").value;
    let emailText = document.createElement('h5');
    emailText.id = 'myEmail';
    emailText.innerHTML = email;

    let textArea = document.getElementById("txtArea").value;
    let textAreaText = document.createElement('h5');
    textAreaText.id = 'myTxtArea';
    textAreaText.innerHTML = textArea;

    $(nameFormContainer).append(`NAME: ${name}`);
    $(emailFormContainer).append(`EMAIL: ${email}`);
    $(aboutFormContainer).append(`ABOUT YOU: ${textArea}`);

    $(outerFormContainer).append(nameFormContainer);
    $(outerFormContainer).append(emailFormContainer);
    $(outerFormContainer).append(aboutFormContainer);
    
    $('.formContainer').append(outerFormContainer);
    $('.formContainer').toggle();

    $('#myForm')[0].reset();
};
