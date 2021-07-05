# CataLOL:  League of Legends Catalogue

## Índice

- [Preámbulo](#preámbulo)
- [Descripción](#resumen-del-proyecto)
- [UX Design](#UX-Design)
- [Herramientas y construcción](#Herramientas-y-construcción)
- [Contribuciones](#contribuciones)
- [Reproducción del proyecto](#reproducción-del-proyecto)
- [Checklist](#checklist)

---

## Preámbulo

El mundo de los videojuegos está revolucionando la interacción y necesidad de información de los usuarios; 
las diferentes plataformas disponibles hace que su alcance sea amplio y se proyecte en aspectos diarios de los usuarios que los frecuentan.

League of Legends es un juego de plataforma en línea con formato multijugador.
 Fue desarrollado por Riot Games en octubre del 2009, al día de hoy su comunidad ha crecido
  expandiéndose alrededor del  mundo. La particularidad de League of Legends (LOL) es su
   complejidad en el modo de juego y sus personajes, incluyendo más de cien personajes en su catálogo.

Debido a esta variedad es común que los usuarios del juego busquen información clara, 
resumida y disponible para su uso. 
De esta necesidad nace el planteamiento de CataLOL: League of Legedens Catalogue, 
una aplicación disponible en Web y móviles que permite la navegación de los datos de los personajes, 
permite aplicar filtros de búsqueda y mostrar la información más relevante.

## Resumen del proyecto

CataLOL presenta una lista principal de los más de 100 personajes que contiene el juego , la navegación 
de esta lista es través de hacer ‘scroll’ en la interfaz. El diseño se adapta al dispositivo que se esté
 usando gracias a las herramientas de diseño implementadas.

La app permite al usuario aplicar filtro de los personajes disponibles a través de los ‘roles’, ordenar
 por menor a mayor dificultad, o viceversa y hacer una búsqueda más a fondo por nombre. Al seleccionar 
 un personaje, se despliega en una nueva ventana la información desglosada, permitiendo la interacción 
 continua entre las búsquedas y los filtros. 


##UX Desing

### Definición del usuario y su relación con el producto
El proyecto  definió como usuario meta a jóvenes de 16 años a Adultos jóvenes de 27 que sean 
jugadores recientes o medianamente experimentados en el juego.

A través de las encuestas realizadas se observó que el usuario meta busca una forma rápida
 de acceder a la información de los personajes y que la interfaz fuera sencilla, esto con 
 la intención de poder observar las características de los personajes para armar estrategias
  o encontrar aquel con el que se adapte mejor por su rol y desempeño.
Entre los datos que muestra la aplicación, los más relevantes se hallan en la distribución
 de la información por clase:
####Los Roles: 
Cada personaje tiene una serie de características que los hace más efectivos en 
un tipo de juego y línea del mapa, esto es conocido como roles los cuales pueden 
ser soporte, tanque, asesino, etc.

#### Nivel de dificultad:
Debido a la naturaleza del personaje, el tipo de habilidades y rol que tenga estos 
cuentan con cierta dificultad, esta se traduce en el conocimiento o práctica que 
requiere el usuario para usar al campeón adecuadamente. La distribución de la información 
puede presentarle al usuario una lista clasificando de manera ascendente o descendente 
la dificultad de los 134 campeones.

####Estadísticas:
Estadísticas del ataque, magia, defensa, etc, del personaje. Se presenta el número 
inicial con que empieza el juego y la cantidad de puntos que va creciendo a través 
de la ganancia de niveles.

####Utilización del producto
CataLOL está destinado a cubrir la necesidad de información que el usuario encuentre en 
su tiempo de recreación ya que está destinado a una plataforma de ocio.


### Proceso y decisiones de diseño

El proceso del diseño partió de la metodología mobile first que aborda la construcción 
de la interfaz empezando con dispositivos móviles para después ir escalando a modo web o desktop.


El  prototipo de baja fidelidad partió de esta orientación presentando una primera pantalla con el logotipo, una lista de campeones, menú desplegable y la forma en la que se desplegará la información del personaje.
![Prototipo de baja fidelidad](https://github.com/JazminDominguez/cdmx-2019-01-bc-core-data-lovers/blob/master/src/assets/prototipo-baja%20fidelidad.jpg)

En el prototipo de alta [fidelidad]https://www.figma.com/file/eLsXSzqkoLCSJSnffeydANYR/Data-Lovers-LOL?node-id=0%3A1)
se presenta la navegación de planeada que habría entre ventanas al momento de interactuar con las opciones del menú desplegable o el buscador. Se eligieron los colores azul, negro y dorado por
ser los colores más simbólicos y los que los usuarios más asocian con el juego. 

#### Cambios en el diseño

Después de aplicar la primera prueba de usabilidad se detectó que el usuario, estuviera 
o no familiarizado con el juego, presentaba una breve confusión al comenzar la interacción
con la aplicación al desplegarse toda la información sin una previa explicación o mensaje de entrada.
 Se aplicó esta mejora agregando una sección que se percibe como la página principal y 
 mensaje de bienvenida de la app.

![cambio en la interfaz](https://github.com/JazminDominguez/cdmx-2019-01-bc-core-data-lovers/blob/master/src/assets/cambio-bienvenida.JPG)



## Herramientas y construcción
El proyecto fue desarrollado con las siguientes herramientas:

- HTML 5
- CSS3
- Vanilla JavaScript
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)




## Contribuciones

[Jazmín Domínguez](https://github.com/JazminDominguez)
[Anahlí Guadarrama](https://github.com/analhi7)



### Reproducción del proyecto

Para ver más detalle de este proyecto se siguen los pasos a continuación mencionados:

1. Realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repositorio master JazminDominguez y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clonar](https://help.github.com/articles/cloning-a-repository/)
   tu :fork_and_knife: a tu computadora (copia local).
3. 📦 Instalar las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->
---

## Checklist

- [ ] Usa VanillaJS.
- [ ] No hace uso de `this`.
- [ ] Pasa linter (`npm pretest`)
- [ ] Pasa tests (`npm test`)
- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
- [ ] UI: Permite filtrar data en base a una condición.

## Checklist (Opcional)

- [ ] Consume data de forma dinámica (`fetch()`).
- [ ] Utiliza Librerías de graficas (`chart.js` ó `google chart`).
- [ ] Cobertura de coverage al 100%.
