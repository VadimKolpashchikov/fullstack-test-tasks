'use strict';

const xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');

xhr1.addEventListener('load', function () {
  if (this.status >= 200 && this.status < 300) {
    try {
      const data = JSON.parse(this.responseText);
      const firstAbility = data.abilities[0].ability;

      const xhr2 = new XMLHttpRequest();
      xhr2.open('GET', firstAbility.url);

      xhr2.addEventListener('load', function () {
        if (this.status >= 200 && this.status < 300) {
          const data = JSON.parse(this.responseText);
          const effectEntries = data.effect_entries;

          effectEntries.forEach((e) => {
            if (e.language.name === 'en') {
              console.log(e.effect);
            }
          });
        }
      });

      xhr2.send();
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log(`Error: ${e}`);
      }
    }
  } else {
    console.log('Network error occurred');
  }
});

xhr1.send();
