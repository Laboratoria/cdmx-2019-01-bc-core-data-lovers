# LOL Lovers (Data Lovers)

## Introducción

Como **tercer proyecto** del bootcamp de Laboratoria, se planteó el reto de crear por parejas una interfaz donde se pudieran visualizar, consultar e interactuar con la data entregada (Pokemon, LOL, STEAM, Injuries, Banco Mundial). En nuestro caso elegimos la data de League of legends (LOL) dando como reultado el proyecto LOL Lovers.

## Preámbulo

League of Legends es un videojuego online en el que los usuarios (particularmente los principiantes) necesitan conocer las caracteristicas de sus campeones. Nosotras basadas en las entrevistas a jugadores contruimos la interfaz con los datos del rol a desempeñar (tank, fighter, mage, assassin, adc, support), la dificultad de manejo del campeon, los niveles de ataque, defensa, magia, .

## Build status

Terminado

## Code Style

- Vanilla Javascript
 
## Screenshots

![probando](https://i.ibb.co/WNhZskn/Captura-de-pantalla-2019-02-19-a-la-s-00-00-15.png)
*Pantalla de Inicio en mobile*


![probando](https://i.ibb.co/qWQVcNY/Captura-de-pantalla-2019-02-19-a-la-s-01-46-13.png)
*Pantalla de inicio en web*

![probando](https://i.ibb.co/JKgG8zZ/Captura-de-pantalla-2019-02-19-a-la-s-01-54-48.png)


## Tech
Desarrollado con:

-  HTML5
-  CSS3
- Javascript (ES6)

## Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

---
## Features

El objetivo de nuestra página es que el jugador tenga rápido acceso la información mas relevante de los campeones.

La pagina permite al usuario:

* Ver las diferentes listas de roles
* Dar clic sobre la tarjeta de un personaje para obtener información mas detallada
* Hacer busqueda por nombre del campeón
* Conocer el promedio de ataque de todos los campeones
 

* Utiliza la interfaz en móviles y web

* Realizar pruebas unitarias

## Algunos detalles técnicos

* Por el momento la página no cuenta menús desplegables, se planean para la siguiente estapa.

## Instalación

Para poder utilizar el código, realizar modificaciones o contribuir al proyecto es necesario:

- Tener un editor de textos instalado (Visual Studio Code, Atom, Sublime, etc.)
- Realizar un fork del repositorio
- Clonarlo el fork a la computadora donde se vaya a trabajar
- Tener instalado Node.js
- Instalar las dependencias del proyecto con el comando *npm install*

## Archivos

El *boilerplate* de este proyecto contiene la siguiente estructura de archivos, así como toda la configuración de dependencias y tests.

8 directories, 17 files
```
La carpeta `data/` dentro del _boilerplate_ incluye un extracto de la data que podemos usar tanto en los tests como en la interfaz en sí. Todos los datos usados son ficticios, y su uso no afecta ni perjudica a ninguna persona o individuo moral.

### Carpeta src

**data.js**
En este archivo se encuentran las funciones que permiten la manipulación de datos a través de arreglos y objetos. Contiene toda la funcionalidad que corresponde a obtener, procesar y manipular datos.

**main.js**
Este archivo contiene todo el código y funciones relacionadas con mostrar en pantalla los datos solicitados por el usuario y obtenidos de las funciones ejecutadas en data.js

**index.html**
Contiene la maquetación base de nuestro sitio y sobre la que se agregan elementos del DOM de acuerdo a las necesidades de la interfaz, también contiene los links a las hojas de estilo y archivos de Javascript que dan estilo y funcionalidad a la página.

**style.css**
Aquí se encuentra todo el código relacionado a los estilos necesarios para todos los elementos de la interfaz

### UX

En este documento se encuentra documentado el proceso de diseño realizado para la elaboración de la interfaz, eso incluye la aplicación de entrevistas, encuestas y pruebas de usuario, así como la elaboracion de sketches, wireframes y prototipos.

## Tests

Para correr los test del proyecto es necesario:

- Tener instalado Node.js
- Instalar las dependencias del proyecto con el comando 

```javascript
npm install
```

- Ejecutar desde la terminal las pruebas unitarias con el comando

```javascript
npm run test
```

## ¿Cómo usar LOL Lovers?
Para ingresar a la plataforma de LOL Lovers, se debe contar con acceso a interner e ingresar a la [liga](https://cristalgarcia.github.io/cdmx-2019-01-bc-core-data-lovers/src/)
En la parte superior del menú se encuentran las opciones que pueden ser visitadas, también se encuentra un buscador para encontrar al campeon de su preferencia y por ultimo se puede dar clic en las tarjetas de los diferentes campeones para conocer una informacion mas detallada de cada uno.

## Colaboradoras
- [Cristal Grisel García Gutiérrez](https://github.com/Cristalgarcia)
- [Evaluz Vazquez Espinosa](https://github.com/eve2921/)


## Checklist

- [x] Usa VanillaJS.
- [x] No hace uso de `this`.
- [x] Pasa linter (`npm pretest`)
- [x] Pasa tests (`npm test`)
- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [x] Incluye historias de usuario en `README.md`.
- [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [x] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [x] UI: Permite filtrar data en base a una condición.

## Checklist (Opcional)

- [ ] Consume data de forma dinámica (`fetch()`).
- [ ] Utiliza Librerías de graficas (`chart.js` ó `google chart`).
- [ ] Cobertura de coverage al 100%.
