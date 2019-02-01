const dataPokemon= POKEMON.pokemon;
let printPokemon= document.getElementById('root');

const print= () => {
    printPokemon.insertAdjacentHTML('beforeend',root);
    dataPokemon.forEach(element => {
        let name= element.name;
        let image=element.img;
        print(name,image);
    });

   return print();
}