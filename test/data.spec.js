require('../src/data.js');

describe('window.lol', () => {
  it('es un objeto', () => {
    expect(typeof window.lol).toBe('object');
  })
})

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
      tags: element.tags,
      img: element.img,
      title: element.title,
      id: element.id,
      splash: element.splash,
      difficulty: element.info.difficulty,
      attack: element.info.attack,
    }
    dataToArray.push(objetoVacio)
  }
}

describe('filtroDataRoles', () => {
  it('is a function', () => {
    expect(typeof window.lol.filtroDataRoles).toBe('function');
  })
})

describe('iterarData', () => {
  it('is a function', () => {
    expect(typeof window.lol.iterarData).toBe('function');
  });
});
describe('filter by name', () => {
  it('is a function', () => {
    expect(typeof window.lol.filterByName).toBe('function');
  })
})

//describe('filtoDataRoles', () => {
//it('Deberia devolver el obj Alistar si es igual a Tank', () => {
 // expect(window.lol.filtroDataRoles('Tank', window.lol.dataToArray)).toEqual(window.dataToArray.Alistar.tags[0])
//})

  it('Should returns the object Aatrox if we select Tank', () => {
    expect(window.lol.filtroDataRoles('Tank', dataToArray)[0]).toEqual(dataToArray[0]);
  })

  it('Should returns the object Ahri if we select Mage', () => {
    expect(window.lol.filtroDataRoles('Mage', dataToArray)[0]).toEqual(dataToArray[1]);
  })

//test del filtro que trae el campeón que se busca por nombre

it('Debería regresar un arreglo de campeones cuyo nombre coincidan con la A', () => {
const result = window.lol.filterByName('Aatrox',dataToArray);
for(let element of result)() => {
  expect(element.name).toMatch('Aatrox');
}
})

it('Debería regresar un arreglo vacio con busqueda que coincida con tx', () =>{
  const result = window.lol.filterByName('tx', dataToArray);
  expect(result.length).toBe(0);
})

/*//filtro por dificultad ascendente
describe('Ordenar, devuelve un arreglo de campeones ordenado por dificultad', () =>{
  it('Es una función', () =>{
    expect(typeof window.lol.sortByDifficultyAsc).toBe('function');
  });
  it('Dado la muestra, si ordena de manera ascendente, Aatrox es el primer elemento', () =>{
    expect(window.lol.sortByDifficultyAsc(dataToArray)[0].name).toBe('Aatrox');
  });
  it('Dado la muestra, si ordena de manera ascendente,Ahri es el segundo elemento', () => {
    expect(window.lol.sortByDifficultyAsc(dataToArray)[1].name).toBe('Ahri');
  });
  it('Dado la muestra, si pedimos el personaje Amumu debería dar un arreglo vacío', () =>{
    expect(window.lol.sortByDifficultyAsc(dataToArray)[0].name.Amumu).toBe();

})})*/

//filtro por dificultad descendente
describe('Ordenar, devuelve un arreglo de campeones ordenado por dificultad', () =>{
  it('Es una función', () =>{
    expect(typeof window.lol.sortByDifficulty).toBe('function');
  });
  it('Dado la muestra, si ordena de manera descendente, Ahri es el primer elemento', () =>{
    expect(window.lol.sortByDifficulty(1, dataToArray)[0].name).toBe('Aatrox');
  });
  it('Dado la muestra, si ordena de manera ascendente, Ahri es el primer elemento', () =>{
    expect(window.lol.sortByDifficulty(-1, dataToArray)[0].name).toBe('Ahri');
  });
  it('Dado la muestra, si pedimos el personaje Amumu debería dar un arreglo vacío', () =>{
    expect(window.lol.sortByDifficulty(0, dataToArray)[0].name).toBe('Ahri');

})})


//filtro de selección de personaje

it('Debería devolver un arreglo del personaje Aatrox cuyo nombre coincida con el id de Aatrox', () => {
 
  const resultCharacter = window.lol.selectCharacter('Aatrox',dataToArray);
  for(let element of resultCharacter)() => {
    expect(element.id).toMatch('Aatrox');
  }
  })
  
  it('No debería devolver un arreglo del personaje Aatrox si se selecciona el id Ahri', () =>{
    const resultCharacter = window.lol.selectCharacter('Ahri',dataToArray);
    for(let element of resultCharacter)() => {
      
    expect(element.id).not.toBe('Aatrox');
  
  }});

  //Función que entrega el promedio de ataque de todos los campeones
describe('Calcula el promedio de ataque de los campeones', () =>{
  it('Es una función', () =>{
    expect(typeof window.lol.averageAttack).toBe('function');
  });
  it('Debería retornar el promedio de ataque entre Aatrox y Ahri', () =>{
    expect(window.lol.averageAttack(dataToArray)).toBe(parseFloat(5.5));
  })})
