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
    //console.log(data);
    for(let user of data) {
        //console.log(post);
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
        
        // albums button event listener
        $(`#albums-button-${user.id}`).click((event) => {
		//albumsButtonClick(event);
		console.log(user.id);
		albumsButtonClick(user.id);
	});
		
	// todos button event listener
	$(`#todos-button-${user.id}`).click((event) => {
		//albumsButtonClick(event);
		todosButtonClick(user.id);
        });
		
        // $(albumsButton).click((event) => {
        //     albumsButtonClick(user.id);
        // });
    }
}
/*function displayPosts(data) {
    console.log(data);
    for(let post of data) {
        //console.log(post);
        let postContainer = document.createElement('div');
        postContainer.id = post.id;
        postContainer.className = 'post-container';
        
        let postTitle = document.createElement('h4');
        postTitle.className = 'post-title';
        postTitle.innerHTML = post.title;

        let postBody = document.createElement('p');
        postBody.className = 'post-body';
        postBody.innerHTML = post.body;
        
        let commentsButton = document.createElement('button');
        commentsButton.id = `button-${post.id}`;
        commentsButton.innerHTML = 'Click for comments';
        
        $('.posts').append(postContainer);
        $(`#${post.id}`).append(postTitle);
        $(`#${post.id}`).append(postBody);
        $(`#${post.id}`).append(commentsButton);
        
        // event listener
        $(`#button-${post.id}`).click((event) => {
            commentsButtonClick(event);
        });
        
        $(commentsButton).click((event) => {
            commentsButtonClick(post.id);
        });
    }
}*/

// if you know todos is clicked, hide albums and visa versa
// let commentsLoaded = false;

//let albumsLoaded = false;
function albumsButtonClick(userId) {
	//console.log(event);
	console.log(userId);
	
	if(event.target.dataset.loaded) 
		// grab comments' container and toggle it off
		$(`#outer-albums-container-${userId}`).toggle();
		
	else // all this:
		$.ajax({
			url: `https://jsonplaceholder.typicode.com/albums/`,
			//url: `https://jsonplaceholder.typicode.com/albums/${userId}/`,
			dataType : "json",
		})
	
		.done(function( response ) {
			//albumsLoaded = true;
			//console.log("data-loaded, true");
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
	// console.log(album.userId);
	// console.log(album.id);
	// console.log(album.title);
	// console.log(album);
	let outerAlbumsContainer = document.createElement('div');
	//console.log(`outer-container-${album.userId}`);
	//outerAlbumsContainer.id = 'outer-albums-container-' + albums[0].userId;
	outerAlbumsContainer.id = `outer-albums-container-${albums[0].userId}`;
	//console.log(`outerContainer: ${outerContainer.id}`);
	$(`${albums[0].userId}`).append(outerAlbumsContainer);
	
	for (let album of albums) {
		//console.log(comment);

		// let outerAlbumsContainer = document.createElement('div');
		// //outerAlbumsContainer.id = 'outer-albums-container-' + albums[0].userId;
		// outerAlbumsContainer.id = 'outer-albums-container-' + albums[0].userId;
		// $(`${albums[0].userId}`).append(outerAlbumsContainer);
		
		let albumContainer = document.createElement('div');
		albumContainer.id = 'album-container-' + album.id;
		albumContainer.className = 'album-container';
		
		let albumTitle = document.createElement('h5');
		//albumTitle.className = 'album-title';
		albumTitle.className = 'album-container';
		albumTitle.innerHTML = album.title;

		$(`#${album.userId}`).append(albumContainer);
		$(`#album-container-${album.id}`).append(albumTitle);
		$(`${album.userId}`).append(outerAlbumsContainer);
		console.log(`${album.userId} added to outerAlbumsContainer`);
		//$(`#comment-container-${comment.id}`).append(commentBody);
	
	}
}

//let todosLoaded = false;
function todosButtonClick(userId) {
	//console.log(event);
	//console.log(postId);
	if(event.target.dataset.loaded)
		// grab todos container and toggle it off
		$(`#outer-todos-container-${userId}`).toggle();
	else // all this:
	$.ajax({
		url: `https://jsonplaceholder.typicode.com/todos/`,
		//url: `https://jsonplaceholder.typicode.com/albums/${userId}/`,
		dataType : "json",
	})
	
	.done(function( response ) {
		//todosLoaded = true;
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
	//console.log(todos);
	let outerTodosContainer = document.createElement('div');
	outerTodosContainer.id = 'outer-todos-container-' + todos[0].userId;
	$(`${todos[0].userId}`).append(outerTodosContainer);
	
	for (let todo of todos) {
		//console.log(comment);

		// let outerTodosContainer = document.createElement('div');
		// outerTodosContainer.id = 'outer-todos-container-' + todos[0].userId;
		// $(`${todos[0].userId}`).append(outerTodosContainer);
		
		let todoContainer = document.createElement('div');
		todoContainer.id = 'todo-container-' + todo.id;
		todoContainer.className = 'todo-container';
		
		let todoTitle = document.createElement('h5');
		todoTitle.className = 'todo-container';
		todoTitle.innerHTML = todo.title;

		$(`#${todo.userId}`).append(todoContainer);
		$(`#todo-container-${todo.id}`).append(todoTitle);
		$(`${todo.userId}`).append(outerAlbumsContainer);
	
	}
}
