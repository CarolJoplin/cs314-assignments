/* NAME: CAROL JOPLIN
   DATE: APRIL 23, 2018
   ASGN: JS-JQUERY
   FILE: INDEX.JS
*/

$.ajax({}).done().fail().always();


//$('#buttonClickUser').click(() => {
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
//});

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
		
        let albumsButton = document.createElement('button');
        albumsButton.id = `albums-button-${user.id}`;
		albumsButton.innerHTML = 'Albums';

		let todosButton = document.createElement('button');
        todosButton.id = `todos-button-${user.id}`;
		todosButton.innerHTML = 'Todos';
		
		// company name
        
        $('.user').append(userContainer);
        $(`#${user.id}`).append(userName);
		$(`#${user.id}`).append(email);

		$(`#${user.id}`).append(albumsButton);
		$(`#${user.id}`).append(todosButton);
        
        // albums button event listener
        $(`#albums-button-${user.id}`).click((event) => {
			//albumsButtonClick(event);
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
	//console.log(postId);
	if(event.target.dataset.loaded) // do nothing
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
//console.log(albums);
	for (let album of albums) {
		//console.log(comment);

		let albumsOuterContainer = document.createElement('div');
		//albumsOuterContainer.id = 'outer-albums-container-' + albums[0].userId;
		albumsOuterContainer.id = 'outer-albums-container-' + albums.userId;
		$(`${albums[0]}.userId`).append(albumsOuterContainer);
		
		let albumContainer = document.createElement('div');
		albumContainer.id = 'album-container-' + album.id;
		albumContainer.className = 'album-container';
		
		let albumTitle = document.createElement('h5');
		//albumTitle.className = 'album-title';
		albumTitle.className = 'album-container';
		albumTitle.innerHTML = album.title;

		$(`#${album.userId}`).append(albumContainer);
		$(`#album-container-${album.id}`).append(albumTitle);
		//$(`#comment-container-${comment.id}`).append(commentBody);
	
	}
}

//let todosLoaded = false;
function todosButtonClick(userId) {
	//console.log(event);
	//console.log(postId);
	if(event.target.dataset.loaded) // do nothing
		// grab comments' container and toggle it off
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
	console.log(todos);
	for (let todo of todos) {
		//console.log(comment);

		let todosOuterContainer = document.createElement('div');
		todosOuterContainer.id = 'outer-todos-container-' + todos[0].userId;
		$(`${todos[0]}.userId`).append(todosOuterContainer);
		
		let todoContainer = document.createElement('div');
		todoContainer.id = 'todo-container-' + todo.id;
		todoContainer.className = 'todo-container';
		
		let todoTitle = document.createElement('h5');
		todoTitle.className = 'todo-container';
		todoTitle.innerHTML = todo.title;

		$(`#${todo.userId}`).append(todoContainer);
		$(`#todo-container-${todo.id}`).append(todoTitle);
	
	}
}
