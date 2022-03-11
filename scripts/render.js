render = {
	postElementName(pokemon) {
		// FUNÇÃO PARA ADICIONAR '00' A ESQUERDA PARA USAR A DATA BASE DO POKEDEX ONLINE
		// https://www.pokemon.com/br/pokedex/
		// NÃO ESTOU USANDO A API PARA RETORNAR AS IMAGENS!!!!!!!!
		let id = ('000' + pokemon.id).slice(-3);

		let post = `<div class="card_pokemon normal">
        <h2>Nome: ${pokemon.name} N°${pokemon.id}</h2>
        <div id="card_info">
            <div id="poke_img">
			<img width="80%" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" />
			</div>
            <div id="infos">
                <div class="information">
                    <h5>Altura:</h5>
                    <p>${pokemon.height * 10} cm</p>
                </div>
                <div class="information">
                    <h5>Peso:</h5>
                    <p>${pokemon.weight / 10} kg</p>
                </div>
                <div class="information">
                    <h5>Abilidades:</h5>
                    ${this.abilities(pokemon)}
                </div>
                <div class="information">
                    <h5>Tipos:</h5>
                    ${this.type(pokemon)}
                </div>
            </div>
        </div>
    </div>`;

		let divpokes = document.getElementById('pokes');
		divpokes.innerHTML = post;
		divpokes.dataset.represent = 'unique';
	},

	type(pokemon) {
		let allTypes = '';
		pokemon.types.forEach((element) => {
			let type = `<p>${element.type.name}</p>`;
			allTypes += type;
		});
		return allTypes;
	},

	abilities(pokemon) {
		let allAbilities = '';
		pokemon.abilities.forEach((element) => {
			let ability = `<p>${element.ability.name}</p>`;
			allAbilities += ability;
		});
		return allAbilities;
	},

	postElementMoves(pokemon) {
		let allMoviments = '';
		pokemon.moves.forEach((movement) => {
			let movimentsPost = `<div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Movimento : ${movement.move.name}</h5>
                                <p class="card-text">Level para aprender: ${movement.version_group_details[0].level_learned_at}</p>
                                <p class="card-text">Metodo de aprendizagem: ${movement.version_group_details[0].move_learn_method.name}</p>
                                <p class="card-text">Versão do jogo: ${movement.version_group_details[0].version_group.name}</p>
                            </div>
	                    </div>`;
			allMoviments += movimentsPost;
		});
		return allMoviments;
	},
};
