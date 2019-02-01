
const data =  POKEMON.pokemon;

const imprimirLista = document.getElementById('imprimir-lista');

const print=(name,type) => {
    let result = `<p>nombre: ${name} Tipo: ${type}</p>`
    imprimirLista.insertAdjacentHTML("beforeend",result);
    return result;
}

data.forEach(element => {
    let name=element.name;
    let type=element.type;
    print(name,type);
});

