##DataLovers Personas lesionadas dependiendo su medio de transporte

##Preámbulo 
En el gremio de los especialistas, sociedad civil, académicos o curiosos de lo urbano, saben que un factor importante para entender lo que acontece en ellas, y especialmente en temas de seguridad vial, son las bases de datos. Tener bases de datos homologadas de percances viales es fundamental para evaluar políticas públicas y proponer soluciones. 
Los problemas a los que nos enfrentamos
Durante todo el proceso de desarrollo de esta aplicación web nos enfrentamos a diferentes dificultades entre las más relevantes fue saber procesar la data para generar nuevos datos (en este caso relevantes al usuario) e identificar las funciones precisas para devolver los datos necesarios.
La manipulación del DOM, es importante tener muy clara la estructura del documento para poder avanzar, si no hay retrocesos que pueden demorar mucho.
Por último, la coordinación de tiempo derivado del trabajo en equipo y la falta de práctica de uso de GITHUB colaborativo. Sin embargo, creemos que es una tarea que se tiene que ir aprendiendo conforme a la práctica.

##Lo aprendido

A trabajar en equipo y mejorar nuestra comunicación dentro del mismo. 
Aprender a poner en práctica algunas de las técnicas fundamentales de las distintas fases del proceso del Design Thinking.
Manipulación de datos.
Iteración de datos complejos.
Nuevos métodos de Javascript.
Refactorización de código.
Web responsive design.
Sintaxis y uso de tests.

##Metodología, proceso de diseño e implementación de UX
Para el presente proyecto incorporamos la metodología Design Thinking, que a su vez es una metodología ágil que nos ayuda a adaptarnos fácilmente a los cambios e imprevistos que surgieron en los tres sprints de duración del proceso de diseño. 
(imagen png proceso Design Thinking)
UX Research
Un método utilizado fue la búsqueda de soluciones análogas a la misma problemática de nuestro usuario. Estas son experiencias de interfaz y de usuario previas con problemas similares. La visualización de la información o de data es un tema que popularizado por la transversalidad de usuarios que recurren a ellas. Es por eso, que más empresas y manejadores de datos deben implementar interfaces que ayuden a la interpretación de la misma, así como que facilite su acceso, manejo y entendimiento. 
Ejemplos de visualizadores de data existen bastantes últimamente ya que existen herramientas que tienen gráficas predeterminadas que sólo requieren que se le vincule la base de datos. 
(imagen de bases de datos)
 
Durante la búsqueda se encontraron MindSets útiles para implementar en nuestro desarrollo como son:

Barra de menú lateral izquierda: Es un menú que puede desplegarse para hacerse más específico o también retraerse para permitir visualizar toda la información de la pantalla, el usuario promedio se ha adaptado a este tipo de menú desde la interfaz de Facebook por lo que su implementación puede cortar la brecha de curva de aprendizaje para el desarrollo de la solución.

Scroll Infinito: Otro regalo de la interfaz de Facebook, el usuario no encuentra molestia alguna en visualizar la información mediante un scroll infinito, de hecho lo prefiere a un refrescamiento de pantalla.

De Mayor a menor: En los DashBoards se entiende que la información se verá presentada de lo general a lo particular por lo que el usuario siempre tendrá a primera vista información global antes de algo particular, si no es que lo predeterminó en algún setting.

##Los usuarios y clientes

Historias de usuarios:

1. saber el número de lesionados(as) por modo de transporte del año 2001 al 2016. 

2. como ciudadana(o) estadounidense quiero una aplicación que me permita comparar por año el número de lesionados en los cinco diferentes modos de transportes urbanos. 

¿Quiénes son los principales usuarios de producto?

Especialistas en espacio público y movilidad urbana que quieren estudiar los datos para poder hacer conjeturas, hipótesis para la creación de futuras políticas públicas en torno a medios de transporte.  Mencionan que los datos, así como su interpretación y lectura son fundamentales para que existan leyes de movilidad que den prioridad a los actores más vulnerables.


¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Entender las acciones tomadas a partir del número de incidentes viales del 2006 a la fecha. 

¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Queremos comparar los incidentes viales de los últimos 10 años que es cuando a nivel mundial se ha intentado hacer un cambio de paradigma sobre cómo estamos construyendo las ciudades. Si bien existe el factor humano que puede, los incidentes podrían prevenirse si existen políticas que cuidan la vida de quienes conducen los medios de transporte: las personas. 

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

La data proporcionada para este ejercicio es un archivo JSON que debemos implementar en un servidor local o desde un link en un servidor externo. Esta data tipo árbol cuenta con información dentro de objetos y arreglos por año (desde 1960) y por veinte modos de transporte que va desde aéreo, marítimo y terrestre.

##Ideas de prototipado:

![sketch_lowfidelity](https://raw.githubusercontent.com/UnaTal/cdmx-2019-01-bc-core-data-lovers/ramaTalia/src/images/sketch_lowfidelity)

