

const data =  POKEMON.pokemon;

const imprimirLista = document.getElementById('imprimir-lista');

const print=(name,type,img) => {
    let result = `<section> <img src="${img}"> nombre: ${name} Tipo: ${type}</section>`
    imprimirLista.insertAdjacentHTML("beforeend",result);
    return result;
}

data.forEach(element => {
    let name=element.name;
    let type=element.type;
    let img=element.img;
    print(name,type,img);
});


//let result = `<section><img src="${img}"> nombre: ${name} Tipo: ${type}</section>`