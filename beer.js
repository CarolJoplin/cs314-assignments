/* NAME: CAROL JOPLIN
   ASGN: FINAL
   FILE: BEER.JS
*/

$.ajax({}).done().fail().always();

$.ajax({
	url: 'https://api.punkapi.com/v2/beers/',
	dataType: "json",
})

.done(function (response) {
	console.log(response);
	displayBeerData(response);
})


.fail(function (status, errorThrown) {
	console.log("Error: ", errorThrown);
	console.log("Status: ", status);	
})

.always(function () {
	console.log("Request is complete!");
})

function displayBeerData(data) {

	for (let beer of data) {

		let beerContainer = document.createElement('div');
		beerContainer.id = beer.id;
		beerContainer.className = 'beer-container';

		let beerName = document.createElement('h4');
		beerName.className = 'beer-name';
		beerName.innerHTML = beer.name;

		let beerTagline = document.createElement('h5');
		beerTagline.className = 'beer-tagline';
		beerTagline.innerHTML = beer.tagline;

		let beerDescription = document.createElement('p');
		beerDescription.className = 'beer-description';
		beerDescription.innerHTML = beer.description;

		let foodPairingButton = document.createElement('button');
		foodPairingButton.id = `food-pairing-button-${beer.id}`;
		foodPairingButton.innerHTML = 'Food Pairing';

		$('.beer').append(beerContainer);
		$(`#${beer.id}`).append(beerName);
		$(`#${beer.id}`).append(beerTagline);
		$(`#${beer.id}`).append(beerDescription);

		$(`#${beer.id}`).append(foodPairingButton);
		console.log("Elements created!");

		/* details button event listener */
		$(`#food-pairing-button-${beer.id}`).click((event) => {
			//console.log(`#food-pairing-button-${beer.id} clicked`);
			foodButtonClick(event, beer.id, beer.food_pairing);
		});

	}
}

function foodButtonClick(event, beerId, foodPairing) {
	if(event.target.dataset.loaded)
		$(`#outer-beers-container-${beerId}`).toggle();
	else
		$.ajax({
		url: `https://api.punkapi.com/v2/beers/${beerId}`,
		dataType: "json",
		})

		.done(function (response) {
			$(event.target).attr('data-loaded', 'true');
			//console.log(response);
			displayFood(response);
		})

		.fail(function (status, errorThrown) {
			console.log("Error: ", errorThrown);
			console.log("Status: ", status);
		})

		.always(function () {
			console.log("Request is complete!");
		})

}

// DISPLAYS ALL FOOD PAIRINGS FOR ALL BEERS
function displayFood(beers) {
	let outerBeersContainer = document.createElement('div');
	outerBeersContainer.classList = 'outerBeersContainer';
	outerBeersContainer.id = `outer-beers-container-${beers[0].id}`;
	$(`#${beers[0].id}`).append(outerBeersContainer);

	outerBeersContainer.style.border = '2px';


	//functional code to get whole comma-separated list of food pairings
	for (let beer of beers) {

		let foodContainer = document.createElement('div');
		foodContainer.id = `food-container-${beer.id}`;
		foodContainer.className = 'food-container';

		
		let foodName = document.createElement('h5');
		foodName.className = 'food-container';
		foodName.innerHTML = beer.food_pairing;

		$(outerBeersContainer).append(foodContainer);
		$(`#food-container-${beer.id}`).append(foodName);
		$(`${beer.food_pairing}`).append(outerBeersContainer);

	}

}
