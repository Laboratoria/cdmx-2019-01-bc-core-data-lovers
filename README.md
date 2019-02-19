# Data Lovers

### Preámbulo
Los Indicadores Demográficos Básicos constituyen una operación estadística conformada
por una colección de indicadores que permiten analizar cómo inciden los fenómenos
demográficos.

Su objetivo es proporcionar la intensidad, las principales características, la dinámica y la
evolución de los fenómenos demográficos sobre la población residente.

Concretamente pueden ser muy útiles para la implementación de programas sociales, pues muestran el estado en el que se encuentra y ha ido evolucionando una sociedad.
### Definición del producto

El propósito de este producto, es facilitar el acceso de información demográfica femenina, que utilizan las ONG (Organización No Gubernamental)para la planificación de servicios sociales (programas infancia, juventud, salud
reproductiva, mercado de trabajo, envejecimiento) de México, Perú, Chile y Brasil.

El diseño se penso tomando en cuenta los estandares y consistencia visual de los sitios Web de organizaciones que proporcionan información estadistica de tipo poblacional. 

El logo integra los colores representativos de cada país y el nombre porque dichos países pertenecen a América Latina.
Lo anterior con la finalidad de que la aplicación cuente con una identidad gráfica.
### Historias de usuario


1. Yo como usuario quiero poder filtrar la data por país y por indicador.
- La definición de terminado se cumplirá cuando muestre los datos de los filtros seleccionados, pase los test implementados, así como las pruebas de usabilidad y el códgio se haya incorporado en GitHub.

2. Yo como usuario quiero poder ordenar de forma ascendente y descendente la data obtenida.
- La definición de terminado se cumplirá cuando se muestre la información en orden ascendente o descendente, pase los test implementados, así como las pruebas de usabilidad y el códgio se haya incorporado en GitHub.

3. Yo como usuiario quiero poder visualizar de forma gráfica la información.
- La definición de terminado se cumplirá cuando se muestre la información en gráficas, pase los test implementados, así como las pruebas de usabilidad y el códgio se haya incorporado en GitHub.


### Diseño de la Interfaz de Usuario

![prototipo-BajaFidelidad](https://i.ibb.co/2yp8s8W/20190215-122218.jpg")

- A traves de la investigación nos percatamos que al consultar este tipo de información, el usuario tiene que llevar a cabo mas de un paso, por lo que este diseño se creó pensando en una interfaz formal y accesible para el usuario.
#### Prototipo de alta fidelidad

![pantalla1](https://i.ibb.co/ZYZ0V0y/p1.png)


![pantalla2](https://i.ibb.co/YRpRD6K/p2.png)

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tus propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

- `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

- `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

- `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son propuestas de funciones que podrías implementar.

El archivo `src/data.js` debe tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

**Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM**. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).




### Pruebas

![pruebas](https://i.ibb.co/wRWCdDj/2019-02-18-2.png)

Las pruebas automatizadas para este sistema requieren de una instalación simple a través del comando npm install. Los tests verifican que se realice el filtrado y el orden de la data. Analiza que la función filtrar sea función y permita el filtrado de la información por país e indicadores; Analiza que la función ordenar, sea función y permita el orden de la información de forma ascendente o descentente.Analiza que la función de valor máximo/mínimo traiga el valor indicado de acuerdo a la selección.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```
### Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

---

## UX/UI


### Antecedentes
Por medio de investigación, se identificó a los usuarios mas interesados en una aplicación que ofrezca los servicios de filtrado y orden de información estadística poblacional femenina. El grupo al que le pareció mas útil fue a personas que trabajan en ONG de dicadas a la implementación de programas sociales en países como México, Perú, Brasil y Chile.


### Problemas que presenta el usuario
Frustración al realizar una busqueda de datos estadisticos poblacionales en otros sitios.
Necesidad de consultar datos estadísticos poblacionales de forma rápida y consisa.

### Cliente Moldelo
Una ONG dedicada a la implementación de programas sociales en América Latina, esta buscando implementar un programa de salud reproductiva para mujeres jóvenes de entre 20 y 30 años, sin embargo necesita realizar un análisis de estadísticas demógraficas para decidir en que país, entre México, Chile, Perú y Brasil, es más útil su presencia. Para est utiliza la información que se encuentra en el Banco Mundial de Desarollo; sin embargo, le es muy tedioso y tardado buscar entre toda la información y el flujo de la misma página esto, pues la página cuenta con demasiados apartados y contenido innesesario para este propósito. 
Al presentarles este producto, los integrantes de la ONG se mostraron gratamente sorprendidos por la accesibilidad de la información, la claridad de las instrucciones y la presentación gráfica de la misma; de esta forma su tarea se facilitaría y sería mucho más rápida la toma de desiciones en este sentido.

### Objetivos
Utilizar las opciones de filtrar y ordenar para que realicen lo siguiente:
Filtrar data por pais y por indicador.
Ordenar la información de forma ascendente y descendente.
Visualizar la información de forma gráfica.


### Boceto
Al utilizar el boceto original los usuarios expresaron una buena reacción con los colores utilizados en la misma, pues en su criterio es un color que expresa seriedad y logran relacionarlo con los colores en este tipo de sitios; en cuanto al fondo utilizado, se mostraron de acuerdo en la utilización de un fondo blanco, pues de esta forma le es más agradable la visualización de la información; sin embargo les confunde un poco  el que no se muestre un logo o nombre del sitio, pues no sabrían como identificarnos.

En cuanto a los apartados, agradecen contar con una breve introducción del objetivo de la página, sin embargo, les gustaría tener mayor información sobre el mismo tema; también les gustaría que existiera un apartado para poder entrar en contacto con los creadores para consultas o dudas que se puedad presentar.

También expresaron que les gustaría obtener un análisis preliminar de los datos obtenidos, pues eso les facilitaría la lectira de la información que se muestre.


### Resultado Final
![pantalla1.1](https://i.ibb.co/SB9Gryb/1.png)
- Se decidió agregar un logo y nombre como fondo en las pantallas para que sea fácil idenrtificarnos.

![pantalla2.1](https://i.ibb.co/wBfkVLh/2.png)
![pantalla3.1](https://i.ibb.co/dBbmbZK/2-5.png)
- Se agregó una explicación de la gráfica, asi como la opción de limpiar los campos y volver a empezar.

![pantalla4.1](https://i.ibb.co/qBJsCxM/6.png" )
- Se agregó un apartado de próposito para informar a los usuarios lo que se pretende aportar.

![pantalla4.1](https://i.ibb.co/WFTL4ZG/4.png
)
- Se agregó un apartado de contacto para poder recibir comentarios, asi como una barra de redes sociales.

### Autores
Olga Contreras y Elizabeth Monroy.
### Agradecimientos
A todo el equipo de Laboratoria.





