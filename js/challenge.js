
function showText(responseAsText) {
	const message = document.getElementById("placeholders");
	message.textContent = responseAsText;
}
function readResponseAsText(response) {
	return response.text;
}

function logError(error) {
	console.log("Looks like there was a problem: \n", error);
}

function validateResponse(response) {
	if(!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

function fetchText(pathToResource) {
	fetch(pathToResource)
		.then(validateResponse)
		.then(readResponseAsText)
		.then(showText)
		.catch(logError);
	}

	fetchText("https://jsonplaceholder.typicode.com/posts");