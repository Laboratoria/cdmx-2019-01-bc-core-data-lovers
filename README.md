# Data Lovers

## Índice

- [Preámbulo](#preámbulo)
- [Descripción](#resumen-del-proyecto)
- [Consideraciones generales](#consideraciones-generales)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Parte obligatoria](#parte-obligatoria)
- [Parte opcional](#parte-opcional-hacker-edition)
- [Consideraciones técnicas](#consideraciones-técnicas)
- [Primeros pasos](#primeros-pasos)
- [Contenido de referencia](#contenido-de-referencia)
- [Checklist](#checklist)

---

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data [aquí](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida [aquí](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, entiende quién es tu usuario y qué
necesita saber o ver exactamente; luego podrás construir la interfaz que le
ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

- [Indicadores de desarrollo del Banco Mundial](src/data/worldbank/worldbank.json)
  de algunos países (Brasil, Chile, México y Perú). Estos datos incluyen
  indicadores demográficos, económicos y comerciales.
- [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](pokemongolive.com).
- [Steam noticias](src/data/steam/steam.json):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
- [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).
- [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicicleta, ...).

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Como aclaración,
con cálculo agregado nos referimos a distintos cálculos que puedes hacer con
la data que tienes para mostrar información aún más relevante a los usuarios.
Una opción serían cálculos estadísticos como el promedio, el máximo o el mínimo,
por ejemplo, si tenemos una colección que representa a un grupo de personas,
y cada persona está representada como un _objeto_ con una _propiedad_ `altura`,
podríamos elegir calcular la altura promedio en el grupo entre otras cosas.

## Consideraciones generales

- Este proyecto se debe resolver en duplas.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
- Tiempo para completarlo: 3 semana divididas en 3 sprints (una entrega del producto funcional al término de cada sprint).

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

- Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
- Pensar en las **necesidades de los usuarios** para crear historias de usuario.
- Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de tu
  trabajo.
- Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
- Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
- Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
- Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
- **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
- **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
- Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## Parte Obligatoria

Los criterios para considerar que has completado este proyecto son:

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

#### Prototipo de baja fidelidad

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

## Parte Opcional (Hacker edition)

Features/características extra sugeridas:

- En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json`
  de cada set datos.
- Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
- 100% Coverage

## Pruebas

Las pruebas automatizadas para este sistema requieren de una instalación simple a través del comando npm install. Los tests verifican que se realice el filtrado y el orden de la data. Analiza que la función filtrar sea función y permita el filtrado de la información por país e indicadores; Analiza que la función ordenar, sea función y permita el orden de la información de forma ascendente o descentente.

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

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno de estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)



### Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

---

###UX/UI

##Antecedentes
Por medio de investigación, se identificó a los usuarios mas interesados en una aplicación que ofrezca los servicios de filtrado y orden de información estadística poblacional femenina. El grupo al que le pareció mas útil fue a personas que trabajan en ONG de dicadas a la implementación de programas sociales en países como México, Perú, Brasil y Chile.

##Problemas que presenta el usuario
Frustración al realizar una busqueda de datos estadisticos poblacionales en otros sitios.
Necesidad de consultar datos estadísticos poblacionales de forma rápida y consisa.

##Objetivos
Utilizar las opciones de filtrar y ordenar para que realicen lo siguiente:
Filtrar data por pais y porr indicador.
O
Funcionalidad
El usuario puede ingresar el mensaje que necesite transformar, este puede incluir números, mayúsculas, minúsculas y espacios; además de esto, puede elegir el número de posiciones a las que desee desplazar su mensaje.
Cliente Modelo (Experiecia de usuario)
Mario Salgado es un hombre de 25 años al cuál simpre le ha interesado la tecnología y las aplicaciones que le ofrezcan algo con lo cual innovar su entorno. Últimamente esta interesado en una forma de mandar cierta información a sus contactos personales y de trabajo. Se encuentra con varios problemas al querer realizar esto; en su trabajo muchas veces utilizan su computadora sin pedir permiso y cuando le llegan correos o mensajes con temas personales o profesiolnales delicados, han logrado tener acceso a ellos; en su celular encuentra un problema similar, cuando llega a prestar su teléfono, alguien en su entorno lo toma o simplemente llegan a leer el mensaje desde la distancia. Al utilizar Ceasar Code Message Mario ha logrado evitar esto, pues no solo ha logrado proteger sus mensajes, además ha tenido un buen momento gracias a su interés por aplicaciones que le ofrezcan cosas útile y novedosas.

Boceto
Al utilizar el boceto, los usuarios se sintieron confundidos con el uso de las cajas, pues olvidaban poner el número de desplazamiento (offset) al momento de intentar decifrar/cifrar el mensaje; también expresaron sentir que los botones eran muy pequeños y por lo tanto difíciles de utilizar, en este sentido, les gustaría poder tener un botón que no solo finalíce la aplicación y los retorne al inicio, si no también un botón que les permita limpiar los campos para poder empezar de nuevo sin tener que regresar o borrar los mensajes manualmente; expresaron agrado por el detalle de ver su nombre impreso en pantalla, pues les hizo sentir cierto grado de personalización y confianza; por último expresaron gran aceptación por el fondo utilizado en la primer pantalla, sin embargo los encabezados y el color de fondo en las otras dos pantallas no fueron del agrado visual, expresando que no les hacia sentir que estaban utilizando una aplicación dedicada a cifrar mensajes. Si deseas consultar físicamente ingresa al siguiente link: (https://marvelapp.com/8204i2d/screen/52336642).

Resultado Final
- 
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
- [ ] UI: Permite filtrar data en base a una condición.

