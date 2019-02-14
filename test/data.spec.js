require('../src/data.js');

const LOL = {
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
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      blurb: "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
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
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      blurb: "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
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
    },
    Fiora: {
      version: "6.24.1",
      id: "Fiora",
      key: "114",
      name: "Fiora",
      title: "the Grand Duelist",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Fiora.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
      blurb: "''I have come to kill you for the sake of honor. And though you possess none, still you die.''<br>The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. ...",
      info: {
        attack: 10,
        defense: 4,
        magic: 2,
        difficulty: 3
      },
      image: {
        full: "Fiora.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Assassin"],
      partype: "MP",
      stats: {
        hp: 550,
        hpperlevel: 85,
        mp: 300,
        mpperlevel: 40,
        movespeed: 345,
        armor: 24,
        armorperlevel: 3.5,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 150,
        hpregen: 8.25,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.7,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 3.3,
        attackspeedoffset: 0,
        attackspeedperlevel: 3.2
      }
    },
    Jhin: {
      version: "6.24.1",
      id: "Jhin",
      key: "202",
      name: "Jhin",
      title: "the Virtuoso",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Jhin.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
      blurb: "''Art requires a certain...cruelty.''<br><br>Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's ...",
      info: {
        attack: 10,
        defense: 2,
        magic: 6,
        difficulty: 6
      },
      image: {
        full: "Jhin.png",
        sprite: "champion1.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Marksman", "Assassin"],
      partype: "MP",
      stats: {
        hp: 540,
        hpperlevel: 85,
        mp: 300,
        mpperlevel: 50,
        movespeed: 330,
        armor: 20,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 550,
        hpregen: 6,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53,
        attackdamageperlevel: 4,
        attackspeedoffset: 0,
        attackspeedperlevel: 0
      }
    },
    MasterYi: {
      version: "6.24.1",
      id: "MasterYi",
      key: "11",
      name: "Master Yi",
      title: "the Wuju Bladesman",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/MasterYi.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
      blurb: "Through the ancient martial art of Wuju, Master Yi has tempered his body and sharpened his mind until thought and action have become one. Though he chooses to enter into violence as a last resort, the grace and speed with which he wields his blade ...",
      info: {
        attack: 10,
        defense: 4,
        magic: 2,
        difficulty: 4
      },
      image: {
        full: "MasterYi.png",
        sprite: "champion2.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Fighter"],
      partype: "MP",
      stats: {
        hp: 598.56,
        hpperlevel: 92,
        mp: 250.56,
        mpperlevel: 42,
        movespeed: 355,
        armor: 24.04,
        armorperlevel: 3,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 7.59,
        hpregenperlevel: 0.65,
        mpregen: 7.255,
        mpregenperlevel: 0.45,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60.04,
        attackdamageperlevel: 3,
        attackspeedoffset: -0.08,
        attackspeedperlevel: 2
      }
    },
    Anivia: {
      version: "6.24.1",
      id: "Anivia",
      key: "34",
      name: "Anivia",
      title: "the Cryophoenix",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
      blurb: "Anivia is a being of the coldest winter, a mystical embodiment of ice magic, and an ancient protector of the Freljord. She commands all the power and fury of the land itself, calling the snow and bitter wind to defend her home from those who would ...",
      info: {
        attack: 1,
        defense: 4,
        magic: 10,
        difficulty: 10
      },
      image: {
        full: "Anivia.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Support"],
      partype: "MP",
      stats: {
        hp: 467.6,
        hpperlevel: 70,
        mp: 396.04,
        mpperlevel: 50,
        movespeed: 325,
        armor: 21.22,
        armorperlevel: 4,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 600,
        hpregen: 5.57,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 51.376,
        attackdamageperlevel: 3.2,
        attackspeedoffset: 0,
        attackspeedperlevel: 1.68
      }
    },
    Annie: {
      version: "6.24.1",
      id: "Annie",
      key: "1",
      name: "Annie",
      title: "the Dark Child",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Annie.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
      blurb: "There have always been those within Noxus who did not agree with the evils perpetrated by the Noxian High Command. The High Command had just put down a coup attempt from the self-proclaimed Crown Prince Raschallion, and a crackdown on any form of ...",
      info: {
        attack: 2,
        defense: 3,
        magic: 10,
        difficulty: 6
      },
      image: {
        full: "Annie.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage"],
      partype: "MP",
      stats: {
        hp: 511.68,
        hpperlevel: 76,
        mp: 334,
        mpperlevel: 50,
        movespeed: 335,
        armor: 19.22,
        armorperlevel: 4,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 575,
        hpregen: 5.42,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 50.41,
        attackdamageperlevel: 2.625,
        attackspeedoffset: 0.08,
        attackspeedperlevel: 1.36
      }
    },
    Karthus: {
      version: "6.24.1",
      id: "Karthus",
      key: "30",
      name: "Karthus",
      title: "the Deathsinger",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Karthus.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
      blurb:
        "''Death is not the end of the journey, it is just the beginning...''<br><br>The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath,...",
      info: {
        attack: 2,
        defense: 2,
        magic: 10,
        difficulty: 7
      },
      image: {
        full: "Karthus.png",
        sprite: "champion1.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mage"],
      partype: "MP",
      stats: {
        hp: 516,
        hpperlevel: 75,
        mp: 372.48,
        mpperlevel: 61,
        movespeed: 335,
        armor: 20.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 450,
        hpregen: 6.42,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 45.66,
        attackdamageperlevel: 3.25,
        attackspeedoffset: 0,
        attackspeedperlevel: 2.11
      }
    },
    Leblanc: {
      version: "6.24.1",
      id: "Leblanc",
      key: "7",
      name: "LeBlanc",
      title: "the Deceiver",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Leblanc.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
      blurb:
        "Every city has its dark side, even one whose reputation is already of a questionable hue. Noxus - though its name is already invoked with a mixture of reverence and revulsion - is no exception to this simple truth. Deep within the winding dungeons ...",
      info: {
        attack: 1,
        defense: 4,
        magic: 10,
        difficulty: 9
      },
      image: {
        full: "Leblanc.png",
        sprite: "champion1.png",
        group: "champion",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Mage"],
      partype: "MP",
      stats: {
        hp: 516,
        hpperlevel: 80,
        mp: 334,
        mpperlevel: 50,
        movespeed: 340,
        armor: 21.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 525,
        hpregen: 7.4,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 54.88,
        attackdamageperlevel: 3.5,
        attackspeedoffset: 0,
        attackspeedperlevel: 1.4
      }
    },
    Ryze: {
      version: "6.24.1",
      id: "Ryze",
      key: "13",
      name: "Ryze",
      title: "the Rune Mage",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ryze.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
      blurb:
        "''Take care with this world. What is made can be unmade.''<br><br>Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with a boundless constitution and ...",
      info: {
        attack: 2,
        defense: 2,
        magic: 10,
        difficulty: 7
      },
      image: {
        full: "Ryze.png",
        sprite: "champion2.png",
        group: "champion",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Fighter"],
      partype: "MP",
      stats: {
        hp: 558.48,
        hpperlevel: 86,
        mp: 400,
        mpperlevel: 50,
        movespeed: 340,
        armor: 21.552,
        armorperlevel: 3,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 550,
        hpregen: 7,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 55.04,
        attackdamageperlevel: 3,
        attackspeedoffset: 0,
        attackspeedperlevel: 2.112
      }
    },
  }
};

const newArrayInfo = window.lol.showData(LOL.data);

//Test que confirma que window.lol es un objeto
describe('window.lol', () => {
  it('is an object', () => {
    expect(typeof window.lol).toBe('object');
  });
});

//Test de la función para filtrar por rol
describe('filterByRol', () => {
  it('is a function', () => {
    expect(typeof window.lol.filterByRol).toBe('function');
  });
  it('Should returns the object Aatrox if we select Tank', () => {
    expect(window.lol.filterByRol(newArrayInfo, 'Tank')[0].name).toEqual('Aatrox');
  });
  it('Should returns the object Ahri if we select Assassin', () => {
    expect(window.lol.filterByRol(newArrayInfo, 'Assassin')[0].name).toEqual('Ahri');
  });
});

// Test de la función para ordenar por ataque
describe('sorterByAttack', () => {
  it('is a function', () => {
    expect(typeof window.lol.sorterByAttack).toBe('function');
  });
  it('Should return the object Fiora if we select sort by Attack', () => {
    expect(window.lol.sorterByAttack(newArrayInfo, 'attack')[0].name).toEqual('Fiora');
  });
  it('Should return the object Master Yi if we select sort by Attack', () => {
    expect(window.lol.sorterByAttack(newArrayInfo, 'attack')[2].name).toEqual('Master Yi');
  });
});

// Test de la función para ordenar por magia
describe('sorterByMagic', () => {
  it('is a function', () => {
    expect(typeof window.lol.sorterByMagic).toBe('function');
  });
  it('Should return the object LeBlanc if we select sort by Magic', () => {
    expect(window.lol.sorterByMagic(newArrayInfo, 'magic')[3].name).toEqual('LeBlanc');
  });
  
});

// Test de la función para ordenar por defensa
describe('sorterByDefense', () => {
  it('is a function', () => {
    expect(typeof window.lol.sorterByDefense).toBe('function');
  });
});

// Test de la función para buscar por nombre
describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof window.lol.filterByName).toBe('function');
  });
});
