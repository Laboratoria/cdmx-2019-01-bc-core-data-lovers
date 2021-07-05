require('../src/data.js');

let muestra = {
  type: "champion",
  format: "standAloneComplex",
  version: "6.24.1",
  data: {
    Aatrox: {
      version: "6.24.1",
      id: "Aatrox",
      key: "266",
      name: "Aatrox",
      title: "the Darkin Blade",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      blurb:
        "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Aatrox.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "BloodWell",
      stats: {
        hp: 537.8,
        hpperlevel: 85,
        mp: 105.6,
        mpperlevel: 45,
        movespeed: 345,
        armor: 24.384,
        armorperlevel: 3.8,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 150,
        hpregen: 6.59,
        hpregenperlevel: 0.5,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60.376,
        attackdamageperlevel: 3.2,
        attackspeedoffset: -0.04,
        attackspeedperlevel: 3
      }
    },
    Ahri: {
      version: "6.24.1",
      id: "Ahri",
      key: "103",
      name: "Ahri",
      title: "the Nine-Tailed Fox",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      blurb:
        "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      },
      image: {
        full: "Ahri.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Assassin"],
      partype: "MP",
      stats: {
        hp: 514.4,
        hpperlevel: 80,
        mp: 334,
        mpperlevel: 50,
        movespeed: 330,
        armor: 20.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 550,
        hpregen: 6.505,
        hpregenperlevel: 0.6,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53.04,
        attackdamageperlevel: 3,
        attackspeedoffset: -0.065,
        attackspeedperlevel: 2
      }
    }
  }
};

let dataToArray = [];
for (const key in muestra.data) {
  if (muestra.data.hasOwnProperty(key)) {
    const element = muestra.data[key];
    let objetoVacio = {
      name: element.name,
      tag: element.tags,
      splash: element.splash,
      title: element.title,
      difficulty: element.info.difficulty,
      attack: element.info.attack,
    }
    dataToArray.push(objetoVacio)
  }
}

//Window.lol es un objeto
describe('lol es un objeto', () => {
  it('window.lol is an object', () => {
    expect(typeof window.lol).toBe('object');
  });
});

//Función iterarData para convertir la data LOL de un objeto a un array 
describe('Debería de ser una función', () => {
  it('is a function', () => {
    expect(typeof window.lol.iterarData).toBe('function');
  });
});

//Función filtrado por roles  
describe('Filtra, devuelve un arreglo de los campeones filtrados', () => {
  it('filtroDataRoles is a function', () => {
    expect(typeof window.lol.filtroDataRoles).toBe('function');
  });
  it('Should returns the objetc Aatrox if we select Tank', () => {
    expect(window.lol.filtroDataRoles('Tank', dataToArray)[0]).toEqual(dataToArray[0]);
  });
});


//si filtrado por busqueda es una función
describe('Filtra, debería devolver un arreglo del id del campeo correspondiente al valor del input search', () => {
  it('filterBySearch is a function', () => {
    expect(typeof window.lol.filterBySearch).toBe('function');
  });

  // si el filtrado por busqueda retorna el campeon por el input 
  it('Deberia regresar un arreglo con los campeones cuyo nombre coincidan con la A', () => {
    const result = window.lol.filterBySearch('Aatrox', dataToArray);
    for (let element of result) () => {
      expect(element.name).toMatch('Aatrox');
    }
  });
  it('Deberia regresar un arreglo vacio cuando busca que coincidan con la tx', () => {
    const result = window.lol.filterBySearch('tx', dataToArray);
    expect(result.length).toBe(0);
  });
});


//Función desplegar la tarjeta completa del campeon que fue seleccionado 
describe('selectCharacter, retorna el arreglo con rl personaje por el id indicado', () => {
  it('selectCharacter is a function', () => {
    expect(typeof window.lol.selectCharacter).toBe('function');
  });

  // Retorna la tarjeta completa del campeon si es seleccionada 
  it('Deberia regresar un arreglo del campeon  cuyo nombre coincidan con el id de Atrox', () => {
    const resultCharacter = window.lol.selectCharacter('Aatrox', dataToArray);
    for (let element of resultCharacter) () => {
      expect(element.id).toMatch('Aatrox');
    }
  });
  it('No deberia regresar un arreglo del campeon Atrox si el id seleccionada es Ahri ', () => {
    const resultCharacter = window.lol.selectCharacter('Ahri', dataToArray);
    for (let element of resultCharacter) () => {
      expect(element.id).not.toBe('Ahri');
    }
  });
});


//Función sort
describe('Ordenar, devuelve un arreglo de champions ordernado por dificultad de manera ascendente', () => {
  it('sortByDifficulty es una funcion', () => {
    expect(typeof window.lol.sortByDifficulty).toBe('function');
  });
  it('Dado la muestra, si ordena de manera descendente, Ahri es el primer elemento', () =>{
    expect(window.lol.sortByDifficulty(-1, dataToArray)[0].name).toBe('Ahri');
  });
  it('Dado la muestra, si ordena de manera ascendente, Aatrox es el primer elemento', () =>{
    expect(window.lol.sortByDifficulty(1, dataToArray)[0].name).toBe('Aatrox');
  });
});

//Reduce
describe('Reduce, devuelve el promedio del arreglo de attack de los campeones', () => {
  it('averageAttack es una funcion', () => {
    expect(typeof window.lol.averageAttack).toBe('function');
  });
  it('Debería regresar el promedio de attack de los campeones ', () =>{
    expect(window.lol.averageAttack(dataToArray)).toBe(5.5);
  });
});



