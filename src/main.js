//Variable para los indicadores de cada pais
const dataChl= WORLDBANK.CHL.indicators;
console.log(dataChl)
const dataBra= WORLDBANK.BRA.indicators;
console.log(dataBra)
const dataMex= WORLDBANK.MEX.indicators;
console.log(dataMex)
const dataPer= WORLDBANK.PER.indicators;
console.log(dataPer)

//funcion para traer el elemento del HTML donde vamos a pintar los indicadores
//const indicator= document.getElementById("indicator");
//funcion para imprimir elementos en el HTML
/*const printChl=(indicatorName)=> {
    let result=`<h3>${indicatorName}</h3>`
    indicator.insertAdjacentHTML("beforeend",result);
    }
dataChl.forEach(element =>{
    let indicatorName=element.indicatorName;
    printChl(indicatorName)
});*/

/*
$(document).ready(function(){
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
})*/