	function retrieveRepos() {
	const user = "felipegust";
	const container = document.getElementById("main");

	axios.get(`https://api.github.com/users/${user}/repos`).then((result) => {
		let { data } = result;
		data.forEach((element) => {

			container.insertAdjacentHTML(
				"beforeend",
				`<div class="post">
					<img src="https://github.com/${user}/${element.name}/blob/master/foto.jpg?raw=true" class="post"/>
					<a class="projectTitle" href="${element.svn_url}">${element.name}</a>
				</div>`
			);
		});
	});
}
