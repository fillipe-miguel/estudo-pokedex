var search = 0;
var allcards = '';
function showall() {
	let pokesDiv = document.getElementById('pokes');

	if (pokesDiv.dataset.represent == 'unique' || pokesDiv.innerHTML == '') {
		pokesDiv.innerHTML = `<div id="pokes_all" class="card_pokemon all"></div><div id="btn_showmore" class="d-grid gap-2 mt-2"><button onclick="showall()" class="btn btn-primary" type="button" >Carregar mais</button></div>`;
		pokesDiv.dataset.represent = 'all';
	}

	let options = {
		metodh: 'GET',
	};

	for (var i = 0; i < 3; i++) {
		search += 1;

		let id = ('000' + search).slice(-3);

		console.log(`search: ${search} ${i}`);

		fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, options)
			.then((response) => {
				return response.json();
			})
			.then((pokemon) => {
				allcards += `<div class="information"><img id="poke_img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" / > <h2 onclick="enviarCard(this)">${pokemon.name}</h2> </div>
				`;
			});

		if (i == 2) {
			setTimeout(() => {
				document.getElementById('pokes_all').innerHTML = allcards;
				console.log('estou auiq');
			}, 100);
		}
	}
}

{
	/* <div class="card_pokemon all"></div>; */
}
