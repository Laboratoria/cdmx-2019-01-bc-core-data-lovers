# LatinoEduca

## Índice


- [Introducción](#introducción)
- [Descripción](#resumen-del-proyecto)
- [Problema](#problema)
- [Consideraciones Técnicas](#Consideraciones-técnicas)
- [Proceso de diseño](#historias-de-usuario)
- [Diseño de interfaz](#prototipado)
- [Testeos de usabilidad](#testeos-de-usabilidad)
- [Herramientas](#Herramientas)



## Introducción

La educación se ha convertido en un tema de agenda y detectar las falencias de los sistemas educativos en los diferentes países es una prioridad para el progreso y desarrollo de las naciones. Sin embargo, a pesar de los múltiples esfuerzos, todavía queda mucho camino por recorrer; y eso es lo que está sucediendo en el mundo, América Latina.

De acuerdo con los datos actualizados del Instituto de Estadística de la Unesco, un total de 617 millones de niños y adolescentes en todo el mundo carecen de un nivel mínimo en lectura y matemáticas. Según el organismo internacional, más de 387 millones de niños con edad para estar en primaria (un 56  por ciento) y 230 millones de adolescentes con edad para cursar el primer ciclo de secundaria (un 61  por ciento) no alcanzan ese nivel mínimo, [ver fuente](https://www.semana.com/educacion/articulo/informe-unesco-sobre-educacion-en-america-latina/542592).


## Resumen del proyecto 🚀

LatinoEduca se crea con el objetivo de brindar datos estadísticos confiables sobre educación en una selección de países latinoamericanos, a saber Perú, Chile, Brasil y México. Está dirigido a investigadorxs, estudiantes y profesores del ámbito educativo. El alcance máximo para los datos es que sean utilizados como fundamento de proyectos y justificación para propuestas de mejora continua de la educación en Latinoamérica. La app tiene la ventaja de ofrecer objetividad al tener como fuente de información la base de datos del Banco Mundial.


## Problema 

La construcción de proyectos académicos y escolares del área educativa requieren datos recientes, confiables y objetivos para que puedan servir. La investigación, sea novel o con experiencia, implica invertir tiempo en la búsqueda de información útil para iniciar un proceso. Aunado, navegar por internet, en ocasiones se asemeja más al naufragio, debido a la enorme cantidad de portales con indicadores y que no siempre tienen la facilidad para que el usuario acceda directamente a las bases de datos; así, se requiere explorar diversas rutas y lo peor, no hay certeza de encontrar lo deseado. 
En consecuencia, LatinoEduca busca disminuir tiempos de búsqueda y ofrece la opción de manejar los datos.


## Consideraciones técnicas 📋
1. Antes que nada, asegúrate de tener un 📝 editor de texto en condiciones, algo como [Atom](https://atom.io/) , [Visual Code](https://code.visualstudio.com/), [Sublime  Text](https://www.sublimetext.com/3) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una 🐚 [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell), que es un programa que interpreta líneas de comando (command-line interpreter) así como tener [git](https://git-scm.com/) instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una *shell* (terminal) instalada por defecto (y probablemente `git` también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win), aunque recomendaría que consideres probar 🐧 GNU/Linux como tu Sistema Operativo.
3. Haz tu propio 🍴 [fork](https://help.github.com/articles/fork-a-repo/) de este repositorio de tu cohort. Solo selecciona en el menú la opción.
4. ⬇️ Clona tu *fork* a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm` `install`. Esto asume que has instalado [Node.js](https://nodejs.org/en/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las 🚥 pruebas unitarias (unit tests) con el comando `npm` `run` `test`.
7. ¡Listo! 🚀

## Historias de usuario
La primera historia consistió en:
A. El colectivo de investigación busca conocer los indicadores de alfabetismo en LatinoAmérica (mujeres) para conocer su comportamiento por año.

Conforme el proyecto fue creciendo, se escribieron las siguientes: 
1. Yo como investigadorx quiero entrar a la aplicación y escoger un país para conocer sus índices de educación.
2. Yo como investigadorx quiero ordenar de forma ascendente y/o descendente los datos por indicador para analizarlo.
3. Yo como investigadorx quiero obtener el promedio del indicador revisado para analizar el grupo de datos.

## Diseño de la Interfaz de Usuario

### Prototipo de baja fidelidad


El proyecto se da inicio con un sketch a mano alzada que crea una interfaz sencilla para iniciar. Para darle dinamismo, utilizamos Marvel, [ver proyecto](https://marvelapp.com/599360f).



![marvel](https://i.ibb.co/vPT8hHV/proto.png)



#### Prototipo de alta fidelidad

En nuestra sección de prototipado de alta fidelidad utilizamos Figma esta herramienta era muy sencilla de utilizar e hicimos lo que podría ser un acercamiento a lo que requeriamos en nuestra html, sin embargo optamos por utilizar bootstrap que nos facilito el diseño que no era responsive como queríamos.

![Figma](https://i.ibb.co/yVq1LdK/fig1.jpg)
![Figma](https://i.ibb.co/hmv8PRk/fig2.jpg)
![Figma](https://i.ibb.co/SJZWb4T/fig3.jpg)


## Testeos de usabilidad

En esta sección se presenta los hallazgos recientes en primer lugar y posteriormente, se podrá leer la información recabada para el sprint 3.

####Segunda prueba

El testeo fue realizado con cinco personas. Se les asignó una tarea a ejecutar, tenían que ubicar el indicador **Fuerza laboral con educación intermedia, varones (%de la fuerza laboral)** para el país de Perú y ordenarlos de manera ascendente.


Al observarlas fue posible detectar que las participantes tuvieron dificultad para encontrar el área de datos, pues las primeras secciones se interponían e incluso causaban olvido sobre la consigna. En este sentido, alguna pregunto sobre la existencia de algún botón para acceder al lugar indicado.


La introducción les permitió reconocer el tipo de sitio, pero se requiere mayor contexto en el área de datos, pues no es clara.


La información desplegada por indicador, aparece debajo de los selectores y esto hace creer que no sucede algo, por lo que es necesario ajustar la presentación.


[![Prueba1](https://i.ibb.co/0sFS7y1/prueba1.jpg)]
[![Prueba2](https://i.ibb.co/wrR9XfJ/prueba2.jpg)]
[![Prueba3](https://i.ibb.co/bFvGF1L/prueba3.jpg)]


####Primera Prueba


Para obtener la retroalimentación de los usuarios se decidió probar la web app con cinco personas dedicadas al ámbito educativo y vinculadas a la investigación. Las opiniones resultaron cruciales para determinar el valor de LatinoEduca 
en las vidas académicas de los participantes, así como para los ajustes en diseño y el tipo de datos a presentar.

La prueba de usabilidad se realizó vía remota. Para ello, hicimos una breve descripción sobre la tarea a realizar; después, se enviaron los links de la página y del formulario; finalmente, se mandó la confirmación de recibido. 

El diseño del formulario siguió el [Modelo de Test de Usuario](https://www.guiadigital.gob.cl/guia-v2/capitulos/05/anexos/pauta-test-usuario.pdf), el cual contempla las siguientes áreas:

* Identidad
* Contenido
* Navegación
* Gráfica Web
* Búsqueda
* Feedback
* Utilidad

Decidimos medir identidad, contenido, gráfica web y utilidad para cuidar la longitud de la encuesta y así, evitar el cansancio de los participantes. El [formulario final](https://docs.google.com/forms/d/e/1FAIpQLSc_zHhqktDf9rxAoEnxsFJObdydUYgXQmMr9mc71A8LrH6lfA/viewform) que se implementó en Google forms, consta de ocho preguntas, mezcladas entre abiertas y de selección múltiple.  

Ahora bien, para **identidad** se obtuvo que el 80% logra identificar la institución a la que pertenece el sitio. Aquí, quisimos obtener de manera precisa cómo es que se dieron cuenta y utilizamos la pregunta dos, esto nos permitió verificar la pertinencia de la página inicial; en este sentido, la respuesta fue positiva en al menos el 80%, quedando una usuaria con duda.


[![identidad](https://i.ibb.co/H7wdQfX/Usabilidad1.png)]


También, quisimos explorar si al usuario le parecia claro el tipo de audiencia a la cual está dirigida la web app. Las respuestas nos ayudaron a confirmar la identidad al obtener respuestas vinculadas con las historias de usuario.


[![audiencia](https://i.ibb.co/CQxLLJx/Usabilidad2.png)]


El área de **contenido** nos reveló que a los usuarios muestra les quedó claro en un 80% el contenido principal del portal, en este caso se ofertan una serie de indicadores educativos por país y la posibilidad de organizarlos de manera ascendente y descendente. Esta sección recibió observaciones de mejora, se solicita mayor información sobre lo qué hace específicamente la web app.


[![contenido](https://i.ibb.co/cyB4QPZ/usabilidad3.png)]


Las opiniones sobre la  **gráfica web** nos indican que la apariencia de la web app requiere mejoras para lograr ser atractiva y equilibrada. Los participantes señalan el uso del color como un medio para lograr el cometido.

[![gráfica-web](https://i.ibb.co/P14gVrn/usabilidad4.png)]

Un punto importante para valorar la web app es la utilidad, sin ella no hay sentido de construir un producto. Los usuarios representan una muestra pequeña, pero significativa, pues utilizan constantemente datos para justificar los proyectos o trabajos escolares. El 80% coincide en que es útil. En opinión de los usuarios, depende de los elementos gráficos, de ahí, que sea necesario incorporar gráficas para mejorar la interpretación de los datos.

[![utilidad](https://i.ibb.co/jWm9JFv/usabilidad5.png)]

Finalmente, se buscó obtener una apreciación sobre el sitio en general y que el gusto del usuario quedara al descubierto. La mayoría coincide en el valor positivo de los datos y su presentación. Tener la posibilidad de ordenarlos, le suma a la utilidad. Por supuesto, esto nos da indicio para las futuras versiones, pues al agregar más opciones para manejar la data mayor riqueza tendrá el sitio. 

[![positivo-negativo](https://i.ibb.co/37LtVNk/usabilidad6.png)] 

En conclusión, las áreas fuertes son identidad y contenido; mientras que, las de oportunidad son gráfica web y utilidad. La retoalimentación arrojó luz sobre los siguientes pasos a seguir.

## Herramientas

Las app se construyó con: 

* Vanilla Js
* HTML
* CSS
* Bootstrap
* Testing mediante Jasmine
