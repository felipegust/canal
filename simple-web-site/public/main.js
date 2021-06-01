function retrieveRepos() {
	const user = "felipegust";
	const container = document.getElementById("main");

	axios.get(`https://api.github.com/users/${user}/repos`).then((result) => {
		let { data } = result;
		data.forEach((element) => {
			container.insertAdjacentHTML(
				"beforeend",
				`<div class="post">
					<img  class="post" src="https://github.com/${user}/${element.name}/blob/master/foto.jpg?raw=true"/>
					<a class="projectTitle" href="${element.svn_url}">${element.name}</a>
				</div>`
			);
		});
	});
}

function showHome() {
	document.getElementById("main").style.display = 'grid';
	document.getElementById("sobre").style.display = 'none';

	document.getElementById("homeLink").classList.add("clicked")
	document.getElementById("aboutLink").classList.remove("clicked")
}

function showAbout() {
	document.getElementById("main").style.display = 'none';
	document.getElementById("sobre").style.display = 'grid';
	
	document.getElementById("homeLink").classList.remove("clicked")
	document.getElementById("aboutLink").classList.add("clicked")
}

