##DataLovers Personas lesionadas dependiendo su medio de transporte

##Preámbulo
En el gremio de los especialistas, sociedad civil, académicos o curiosos de lo urbano, se sabe que un factor importante para entender lo que acontece en las ciudades, especialmente en temas de seguridad vial, son las bases de datos.
El tener bases de datos homologadas de percances viales es fundamental para evaluar políticas públicas y proponer soluciones.

###Problemas a los que nos enfrentamos

Durante el proceso de desarrollo de esta aplicación web nos enfrentamos a diversas dificultades, entre las más relevantes destaca el aprender a procesar la data para generar nuevos datos que sean relevantes para el usuario, para lo cual tuvimos que aprender a identificar y aplicar las funciones para devolver los datos necesarios.
De igual manera, nos dimos a la tarea de ordenar el código para facilitar el entendimiento; para lo cual separamos las funciones puras del DOM, esto con la finalidad de poder testear las funciones y simplificarlas.
Por último, la coordinación de tiempo derivado del trabajo en equipo y la falta de práctica de uso de GITHUB colaborativo. Sin embargo, creemos que es una tarea que se tiene que ir aprendiendo conforme a la práctica.

###Lo aprendido

A trabajar en equipo y mejorar nuestra comunicación dentro del mismo.
Aprender a poner en práctica algunas de las técnicas fundamentales de las distintas fases del proceso del Design Thinking.
Manipulación de datos.
Iteración de datos complejos.
Nuevos métodos de Javascript.
Refactorización de código.
Web responsive design.
Sintaxis y uso de tests.

##Metodología, proceso de diseño e implementación de UX
Para el presente proyecto incorporamos la metodología Design Thinking;la cual es una metodología ágil que nos ayuda a adaptarnos fácilmente a los cambios e imprevistos que surgieron en los tres sprints de duración del proceso de diseño.
(imagen png proceso Design Thinking)
UX Research
El método utilizado para la búsqueda de soluciones análogas a la problemática de nuestro usuario fueron las metodologías ágiles. mediante las cuales dimos solución a los diferentes problemas de visualización de los datos a los que se enfrentaban los usuarios.
Teniendo en cuenta la importancia que tiene tanto a nivel empresa, como a nivel de investigación el uso de interfaces que permitan el manejo y entendimiento de la información nos dimos a la tarea de brindar al usuario herramientas, como gráficas y tablas, que le faciliten el análisis de los datos.
(imagen de bases de datos)

Durante la búsqueda se encontraron herramientas útiles para implementar en nuestro desarrollo.

El posicionamiento del menú permite al usuario una interacción más sencilla, pues su localización familiar le permite reconocerlo a simple vista.

Al omitir el scroll infinito permite al usuario acceder a la información que desea conocer de forma rápida y sin la necesidad de saturarse con datos que no son de su interés en el momento.

De lo particular a lo general: la forma de presentar la información se da de dos formas diferentes. En primera instancia se presenta el acceso a los datos que hacen referencia a un modo particular de transporte. La segunda forma permite conocer los datos de los 5 medios en un año especifico.

##Los usuarios y clientes

Historias de usuarios:

1.  Como ciudadana(o) estadounidense quiero una aplicacion que me permita comparar por año el número de lesionados en los cinco diferentes modos de transportes urbanos.
2. saber el número de lesionados(as) por modo de transporte del año 2001 al 2016.


¿Quiénes son los principales usuarios de producto?

Especialistas en espacio público y movilidad urbana que quieren estudiar los datos para poder hacer conjeturas, hipótesis para la creación de futuras políticas públicas en torno a medios de transporte.  Para quienes los datos, así como su interpretación y lectura son, fundamentales para que existan leyes de movilidad que den prioridad a los actores más vulnerables.

¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Entender las acciones tomadas a partir del número de incidentes viales del 2001 a la fecha.

¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Queremos comparar los incidentes viales de los últimos años, que es cuando a nivel mundial se ha intentado hacer un cambio de paradigma sobre cómo estamos construyendo las ciudades. Si bien existe el factor humano que puede, los incidentes podrían prevenirse si existen políticas que cuidan la vida de quienes conducen los medios de transporte: las personas.

¿Cuándo utilizan o utilizarían el producto?

La investigación sobre movilidad urbana tiene como objetivo lograr una perfecta integración de los servicios de transporte actuales y futuros para las áreas urbanas. Los modos activos de movilidad (peatonal y de bicicletas) son una parte importante, y los investigadores ponemos mucho esfuerzo en obtener y analizar datos empíricos de varios sitios en condiciones que nos ayuden a sustentar y llevar a cabo varios grandes proyectos.

##Descubrimiento e investigación

En la fase inicial de diseño es necesario acercarnos con una curiosidad enfocada, ya que es muy fácil divagar en la amplitud de los aspectos que abarca un sujeto o tema de observación, además de que incluye una buena práctica siempre contestarnos un protocolo de preguntas base que nos ayudarán a:
Ubicar y conocer a nuestro usuario
Alinear expectativas con el usuario de lo que espera del proyecto

##Síntesis de problemáticas a resolver:

Se requiere de un nuevo sistema de procesamiento de información. En términos de UX (experiencia de usuario) y claridad de lo que se envía o pretende compartir.
Se requiere un sistema que traduzca esa información en una vista más útil.
Se requiere que todo lo anterior se traduzca en una base de datos, visualización de la información.
Es importante acceder desde un dispositivo móvil pero principalmente computadora porque generalmente se trabaja desde el escritorio.
Información importante: poder filtrar por modo de transporte y después verlo de manera general para poder comparar el número de percances entre modos.
Poder descargar la base de datos excel.
No interesa que sea increíble, interesa que sea fácil de leer.
Los datos más relevantes en los estudios urbanos son precisamente los modos hegemónicos de transporte en las ciudades: peatones, usuarios de transporte público, ciclistas, motociclistas, automovilistas.

¿Cuáles crees que son los datos más importantes a tener en cuenta para el DataByMode?

Incidentes por los cinco modos de transporte urbanos más usados: peatones, ciclistas, usuarios de transporte público, motociclistas y automovilistas.
Datos generales de los cinco modos de transporte por año
Datos de los últimos veinte años

##Base de Datos:

La data proporcionada para este ejercicio es un archivo JS que debemos implementar en un servidor local o desde un link en un servidor externo. Esta data tipo árbol cuenta con información dentro de objetos y arreglos por año (desde 1960) y por veinte modos de transporte que va desde aéreo, marítimo y terrestre.

##Ideas de prototipado:

![sketch_lowfidelity](https://raw.githubusercontent.com/UnaTal/cdmx-2019-01-bc-core-data-lovers/ramaTalia/src/images/sketch_lowfidelity)

##Implementación

Los recursos utilizados en la implementación del proyecto utilizamos:

- CSS para realizar el diseño y estilo de la página
- JS para la interacción  de la página
- HTML para dar forma y presentar la información
- Procesadores de texto Atom y Visual Studio Code.
- LMS de Laboratoria
- Figma para sketches de alta fidelidad.
- Google Charts para las gráficas

##Experiencia de usuario

MENÚ: El menú sidebar es sencillo y colapsable en dispositivos móviles, permite tener acceso a los distintos modos de transporte.

BOTONES: Colocamos la información destaca a primera vista y en una misma página para que pueda tener acceso a la información que sea su interés.

RESPONSIVE: Ya que es información que en ciertos usuarios convendría tener a la mano, la aplicación puede visualizarse tanto en dispositivos móviles como en desktop. Sin embargo, fue inicialmente pensada para tener una mejor visualización desde un dispositivo de escritorio.

Elena Hernández
Lic. en Filosofía  Laboratoria 7ta Generación Sede CDMX

Talía González y González
Diseñadora Industrial Laboratoria 7ta Generación Sede CDMX
