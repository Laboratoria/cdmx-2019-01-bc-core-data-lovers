var lista = POKEMON.map(function(data){
    return '<li>'+data.name+' '+data.num+'</li>'
  })
  document.getElementById("list").innerHTML = lista;