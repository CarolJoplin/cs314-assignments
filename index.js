/* NAME: CAROL JOPLIN
   DATE: APRIL 23, 2018
   ASGN: JS-AND-JQUERY
   FILE: INDEX.JS
*/

$.ajax({}).done().fail().always();


$('#buttonClickPost').click(() => {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com',
		dataType : "post",
	})
	
    .done(function( response ) {
		displayPosts(response);
	})
	
	
	.fail(function( status, errorThrown ) {
		console.log("Error: ", errorThrown);
		console.log("Status: ", status);
	})
	
	.always(function() {
		console.log("Request is complete!");
	})
	
})

function displayPosts(data) {
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
}

// if you know todos is clicked, hide albums and visa versa
let commentsLoaded = false;

function commentsButtonClick(postId) {
	//console.log(event);
	console.log(postId);
	if(commentsLoaded) // do nothing
		// grab comments' container and toggle it off
		return;
	else // all this:
	$.ajax({
		url: `https://jsonplaceholder.typicode.com/posts/${post.id}/`,
		dataType : "json",
	})
	
	.done(function( response ) {
		commentsLoaded = true;
		displayComments(response)
		console.log(response);
	})
	
	.fail(function( status, errorThrown ) {
		console.log("Error: ", errorThrown);
		console.log("Status: ", status);
	})
	
	.always(function() {
		console.log("Request is complete!");
	})
}

function displayComments(comments) {
	for (let comment of comments) {
		//console.log(comment);
		
		let commentContainer = document.createElement('div');
		commentContainer.id = 'comment-container-' + comment.id;
		commentContainer.className = 'comment-container';
		
		let commentTitle = document.createElement('h4');
		commentTitle.className = 'comment-title';
		commentTitle.innerHTML = comment.title;
		let commentBody = document.createElement('p');
		commentBody.className = 'comment-body';
		commentBody.innerHTML = comment.body;
		
		$(`#${comment.postId}`).append(commentContainer);
		$(`comment-container-#${comment.id}`).append(commentTitle);
		$(`#comment-container-${comment.id}`).append(commentBody);
	
	}
}
