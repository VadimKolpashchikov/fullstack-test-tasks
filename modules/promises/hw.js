'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network error occurred');
    }

    return response.json();
  });
}

fetchData(url)
  .then(({ abilities }) => fetchData(abilities[0].ability.url))
  .then((pokemon) => {
    pokemon.effect_entries.forEach((e) => {
      if (e.language.name === 'en') {
        console.log(e.effect);
      }
    });
  })
  .catch((error) => console.log(error));
