# Task manage / To do list

## Aclaracion
**No cuento mucha experiencia en documentaciones**, es decir el hecho de documentar que detalles son cruciales o mas complejos
en esta ocacion tratare de dar lo mejor de mi, gracias por su atencion.

## Funciones mas cruciales 

### estructura 

├─ css/<br>
│  ├─ style.css (Estilos principales)<br>
│  └─ mobile.css (Optimizaciones leves en dispositivos mobiles) <br>
├─ js/ <br>
│  ├─ script.js (logica principal)  <br>
│  └─ dom.js (construccion de tareas) <br>
├─ README.md (estas aqui) <br>
└─ index.html (pagina principal) <br>

### dom.js

cuenta con 2 funciones en su interior, entre ellas: 

- overTog(): es la encarga de ocular y mostrar el overlay como el formulario en su inerior
- newTask(): replica la estructura HTML de una tarea promedio, con los titulos y textos introducidos por el usuario

### script.js

cuanta con las funciones mas importantes con respecto al funcionamiento, tales como:

- activeTask(): registra cada tarea (activa) dependiendo en que procedimiento este incluida esta funcion.
- form.advEnetListener: cancela la recarga de la pagina, ademas de registrar la descripcion y titulo de las tareas del usuario.
- list.addEventListener: cuenta con delegaciones de eventos para la eliminacion y marcado de cada tarea individualmente.
- selector.advEnetListener: siendo la seleccion de opciones de filtrado de tareas, unicamente muestra aquellas tareas que cumplan
  con el criterio puesto en el filtro, (ej: completadas => todas las tareas completadas)

