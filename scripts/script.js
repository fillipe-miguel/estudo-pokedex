function enviar() {
	let options = {
		metodh: 'GET',
	};

	let search = document.getElementById('search').value.toLowerCase();

	if (search) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, options)
			.then((response) => {
				if (response.status == 200) {
					response.json().then((response) => {
						render.postElementName(response);
					});
				} else {
					alert('Pokemon não encontrado!');
					throw { msg: 'Pokemon não encontrado!' };
				}
			})
			.catch((error) => {
				throw console.log(error.msg);
			});
	} else {
		alert('Preencha os campos!');
	}
}

function enviarCard(element) {
	let options = {
		metodh: 'GET',
	};

	let search = element.innerHTML;

	if (search) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, options)
			.then((response) => {
				if (response.status == 200) {
					response.json().then((response) => {
						render.postElementName(response);
					});
				} else {
					alert('Pokemon não encontrado!');
					throw { msg: 'Pokemon não encontrado!' };
				}
			})
			.catch((error) => {
				throw console.log(error.msg);
			});
	} else {
		alert('Preencha os campos!');
	}
}
