
function showText(responseAsText) {
	return document.createElement(element);
}
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
	.then((resp) => resp.json())
	.then(function(data) {
		let placeholders = data.results;
		return placeholders.map(function(placeholder) {
			let li = createNode("li"),
				span = createNode("span");
				li.innerHTML = `${placeholder.title}`;
				span.innerHTML= `${placeholder.body}`;
				append(li, span);
				append(ul, li);

		})
	})
	.catch(function(error) {
		console.log(error);
	});