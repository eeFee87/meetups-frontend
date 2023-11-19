# Meetups

## DESCRIPCIÓN

Portal web que muestra meetups por ciudad y temática y permite inscribirse a
estos

### FUNCIONES USUARIOS ANÓNIMOS:

- Visualizar el listado de meetups ordenador por fecha más próxima (no
  aparecen los que ya han pasado). Solo debe aparecer título, foto,
  temática, localidad, fecha y hora y número de asistentes.

- Filtrar meetups por:

1. Ciudad
2. Temática

- Visualizar un meetup en detalle. Deben de aparecer los mismos datos que en listado, pero a mayores la descripción y el listado de asistentes
- Login (email y password)
- Registro (email, password, nombre, biografía y avatar)

### FUNCIONES USUARIOS REGISTRADOS:

- Lo mismo que los anónimos
- Inscribirse o darse de baja de un meetup
- Publicación de meetups (título, descripción, foto, temática, localidad y
  fecha y hora)

## Notas

Para iniciar la aplicación, debe ejecutar `npm run dev`.

## TODO

- En el fichero .env.example del frontend viene declarada la variable REACT_APPBACKEND. Es incorrecto, al usar Vite las variables de entorno han de empezar por VITE. En lugar de REACT_APP_BACKEND debería ser VITE_API_URL
- Si me registro sin avatar aparece un link de imagen roto en lugar de un avatar por defecto.
- Si el evento creado no tiene foto no se crea pero tampoco se informa de un error.(Poner imagen por defecto)
- Estaría bien poder ver la lista de eventos que yo he creado o lista de eventos que sigo. No se pide como requisito.
