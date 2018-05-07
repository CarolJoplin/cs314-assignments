'use strict'

let submitForm = document.getElementById("submitButton");
//let formContainer = document.getElementsByClassName("formContainer");

let outerFormContainer = document.createElement("div");
outerFormContainer.classList = 'outerFormContainer';

submitForm.onclick = function() {
    
    let name = document.getElementById("firstName").value;
    
    let nameText = document.createElement('p');
    nameText.id = 'myName';
    nameText.innerHTML = name;
    
    let email = document.getElementById("emailBox").value;
    let emailText = document.createElement('p');
    emailText.id = 'myEmail';
    emailText.innerHTML = email;

    let textArea = document.getElementById("txtArea").value;
    let textAreaText = document.createElement('p');
    textAreaText.id = 'myTxtArea';
    textAreaText.innerHTML = textArea;

    $(outerFormContainer).append(name);
    $(outerFormContainer).append(email);
    $(outerFormContainer).append(textArea);

    $('.formContainer').append(outerFormContainer);

};
