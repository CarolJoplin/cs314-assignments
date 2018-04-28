/* NAME: CAROL JOPLIN
   DATE: APRIL 23, 2018
   ASGN: JS-JQUERY
   FILE: INDEX.JS
*/

$.ajax({}).done().fail().always();

$.ajax({
	url: 'https://jsonplaceholder.typicode.com/users/',
   dataType : "json",
})
	
.done(function( response ) {
	displayUserData(response);
})
	
	
.fail(function( status, errorThrown ) {
	console.log("Error: ", errorThrown);
	console.log("Status: ", status);
})
	
.always(function() {
	console.log("Request is complete!");
})


//displayUserData
//name
//email
//company

function displayUserData(data) {

    for(let user of data) {

        let userContainer = document.createElement('div');
        userContainer.id = user.id;
		userContainer.className = 'user-container';
        
        let userName = document.createElement('h4');
        userName.className = 'user-name';
        userName.innerHTML = user.name;

        let email = document.createElement('p');
        email.className = 'user-email';
		email.innerHTML = user.email;
		
		// company name
		let companyName = document.createElement('p');
        companyName.className = 'user-company-name';
		companyName.innerHTML = user.company.name;
		
		let albumsButton = document.createElement('button');
        albumsButton.id = `albums-button-${user.id}`;
		albumsButton.innerHTML = 'Albums';

		let todosButton = document.createElement('button');
        todosButton.id = `todos-button-${user.id}`;
		todosButton.innerHTML = 'Todos';

        $('.user').append(userContainer);
		$(`#${user.id}`).append(userName);
		$(`#${user.id}`).append(companyName);
		$(`#${user.id}`).append(email);

		$(`#${user.id}`).append(albumsButton);
		$(`#${user.id}`).append(todosButton);
		
		// toggle between albums and todos:
		/*
			The closest I was able to come to this isn't EXACT toggle functionality.

			What it does have:
				- Ability to toggle between albums and todos.
			What it lacks:
				- Ability to toggle between albums and todos by clicking albums and todos buttons
					respectively, and having each of those lists appear at the click of a button.
			
			Having both lines uncommented results in a lack of list collapse functionality.
		*/

        // albums button event listener
        $(`#albums-button-${user.id}`).click((event) => {
			
			albumsButtonClick(event, user.id);
			$(`#outer-todos-container-${user.id}`).toggle();

		});
		
		// todos button event listener
		$(`#todos-button-${user.id}`).click((event) => {
			
			todosButtonClick(event, user.id)
			//$(`#outer-albums-container-${user.id}`).toggle();
			
		});
		
    }
}

// if you know todos is clicked, hide albums and visa versa
function albumsButtonClick(event, userId) {

	if(event.target.dataset.loaded) 
		// grab comments' container and toggle it off
		$(`#outer-albums-container-${userId}`).toggle();
	
	else // all this:
		$.ajax({
			url: `https://jsonplaceholder.typicode.com/users/${userId}/albums/`,
			dataType : "json",
		})
	
		.done(function( response ) {
			// adding an attribute to the button when the data has loaded
			$(event.target).attr('data-loaded', 'true');
			displayAlbums(response);
		})
	
		.fail(function( status, errorThrown ) {
			console.log("Error: ", errorThrown);
			console.log("Status: ", status);
		})
	
		.always(function() {
			console.log("Request is complete!");
		})

}

function displayAlbums(albums) {
	let outerAlbumsContainer = document.createElement('div');
	outerAlbumsContainer.classList = 'outerAlbumsContainer';
	outerAlbumsContainer.id = `outer-albums-container-${albums[0].userId}`;
	$(`#${albums[0].userId}`).append(outerAlbumsContainer);

	outerAlbumsContainer.style.border = '2px';
	
	for (let album of albums) {
		
		let albumContainer = document.createElement('div');
		albumContainer.id = 'album-container-' + album.id;
		albumContainer.className = 'album-container';
		
		let albumTitle = document.createElement('h5');
		albumTitle.className = 'album-container';
		albumTitle.innerHTML = album.title;

		$(outerAlbumsContainer).append(albumContainer);
		$(`#album-container-${album.id}`).append(albumTitle);
		$(`${album.userId}`).append(outerAlbumsContainer);
	
	}

}

function todosButtonClick(event, userId) {

	if(event.target.dataset.loaded)
		//grab todos container and toggle it off
		$(`#outer-todos-container-${userId}`).toggle();
	
	else // all this:
	$.ajax({
		url: `https://jsonplaceholder.typicode.com/users/${userId}/todos/`,
		dataType : "json",
	})
	
	.done(function( response ) {
		$(event.target).attr('data-loaded', 'true');
		displayTodos(response);
	})
	
	.fail(function( status, errorThrown ) {
		console.log("Error: ", errorThrown);
		console.log("Status: ", status);
	})
	
	.always(function() {
		console.log("Request is complete!");
	})
}

function displayTodos(todos) {
	
	let outerTodosContainer = document.createElement('div');
	outerTodosContainer.classList = 'outerTodosContainer';
	outerTodosContainer.id = `outer-todos-container-${todos[0].userId}`;
	$(`#${todos[0].userId}`).append(outerTodosContainer);
	
	for (let todo of todos) {
		
		let todoContainer = document.createElement('div');
		todoContainer.id = 'todo-container-' + todo.id;
		todoContainer.className = 'todo-container';
		
		let todoTitle = document.createElement('h5');
		todoTitle.className = 'todo-container';
		todoTitle.innerHTML = todo.title;

		$(outerTodosContainer).append(todoContainer);
		$(`#todo-container-${todo.id}`).append(todoTitle);
		$(`${todo.userId}`).append(outerTodosContainer);
	
	}
	
}
