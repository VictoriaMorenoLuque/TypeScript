import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

//Primera persona
let direccion1 = new Direccion(
    "Calle Fez",
    26,
    1,
    "A",
    14009,
    "Córdoba",
    "Córdoba"
)
  
let mail1 = new Mail(
    "Personal",
    "victoriamorenoluque@hotmail.com"
)
  
let telefono1 = new Telefono(
    "Personal",
    622070755
)
  
let persona1 = new Persona(
    'Victoria',
    'Moreno Luque',
    27,
    '12345678A',
    new Date(1994, 4, 27),
    'morado',
    'mujer',
    [direccion1],
    [mail1],
    [telefono1],
    " "
);

//Segunda persona
let direccion2 = new Direccion(
    "Calle Greta",
    16,
    2,
    "B",
    14009,
    "Córdoba",
    "Córdoba"
)
  
let mail2 = new Mail(
    "Personal",
    "maria16@hotmail.com"
)
  
let telefono2 = new Telefono(
    "Personal",
    655070755
)
  
let persona2 = new Persona(
    'María',
    'León Reyes',
    29,
    '12345678B',
    new Date(1992, 3, 16),
    'azul',
    'mujer',
    [direccion2],
    [mail2],
    [telefono2],
    " "
);

//Tercera persona
let direccion3 = new Direccion(
    "Calle Alexandría",
    8,
    3,
    "C",
    14009,
    "Córdoba",
    "Córdoba"
)
  
let mail3 = new Mail(
    "Personal",
    "MerloChristian@hotmail.com"
)
  
let telefono3 = new Telefono(
    "Personal",
    677070755
)
  
let persona3 = new Persona(
    'Christian',
    'Merlo Ruiz',
    27,
    '12345678C',
    new Date(1994, 8, 3),
    'rojo',
    'hombre',
    [direccion3],
    [mail3],
    [telefono3],
    " "
);

console.log("Personas registradas: ")
console.log(persona1);
console.log(persona2);
console.log(persona3);

let agenda: Array<Persona> = new Array(persona1, persona2, persona3); //Array de personas

let editarPersona: Persona = agenda.filter(persona => persona.dni == "12345678A")[0]; //Filtrar la persona por DNI. DNI de la persona1.

let direccion4 = new Direccion( //Nueva dirección
  "Calle Montilla",
  18,
  4,
  "D",
  14009,
  "Córdoba",
  "Córdoba"
)

let mail4 = new Mail( //Nuevo email
  "Privado",
  "victoriamorenoluque@gmail.com"
)

let telefono4 = new Telefono( //Nuevo teléfono
  "Privado",
  600070755
)

editarPersona.direcciones.pop(); //Eliminar elemento
editarPersona.direcciones.push(direccion4); //Añadir elemento
editarPersona.mails.pop(); //Eliminar elemento
editarPersona.mails.push(mail4); //Añadir elemento
editarPersona.telefonos.pop(); //Eliminar elemento
editarPersona.telefonos.push(telefono4); //Añadir elemento

console.log("Personas registradas con Persona1 modificada: ")
console.log(persona1);
console.log(persona2);
console.log(persona3);