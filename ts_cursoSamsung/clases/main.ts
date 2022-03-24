import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

//Primera persona
let direccion1 = new Direccion(
    "Calle Primera",
    1,
    1,
    "A",
    14001,
    "Córdoba",
    "Córdoba"
)
  
let mail1 = new Mail(
    "Personal",
    "correoA@hotmail.com"
)
  
let telefono1 = new Telefono(
    "Personal",
    600000001
)
  
let persona1 = new Persona(
    'Victoria',
    'Moreno Luque',
    27,
    '12345678A',
    new Date(1994, 4, 27),
    'rojo',
    'mujer',
    [direccion1],
    [mail1],
    [telefono1],
    " "
);

//Segunda persona
let direccion2 = new Direccion(
    "Calle Segunda",
    2,
    2,
    "B",
    14002,
    "Córdoba",
    "Córdoba"
)
  
let mail2 = new Mail(
    "Personal",
    "correoB@hotmail.com"
)
  
let telefono2 = new Telefono(
    "Personal",
    600000002
)
  
let persona2 = new Persona(
    'Marisa',
    'Mallenco Anguita',
    27,
    '12345678B',
    new Date(1994, 2, 2),
    'amarillo',
    'mujer',
    [direccion2],
    [mail2],
    [telefono2],
    " "
);

//Tercera persona
let direccion3 = new Direccion(
    "Calle Tercera",
    3,
    3,
    "C",
    14003,
    "Córdoba",
    "Córdoba"
)
  
let mail3 = new Mail(
    "Personal",
    "correoC@hotmail.com"
)
  
let telefono3 = new Telefono(
    "Personal",
    600000003
)
  
let persona3 = new Persona(
    'Christian',
    'Merlo Ruiz',
    27,
    '12345678C',
    new Date(1994, 3, 3),
    'verde',
    'hombre',
    [direccion3],
    [mail3],
    [telefono3],
    " "
);
let agenda: Array<Persona> = new Array(persona1, persona2, persona3);//Array de personas

console.log("----Agenda: ----")
for(let i = 0; i < agenda.length; i++) {
    console.log(agenda[i]);
}//Bucle para recorrer el Array Agenda.

let editarPersona: Persona = agenda.filter(persona => persona.dni == "12345678A")[0]; //Filtrar la persona por DNI. DNI de la persona1.

let direccion4 = new Direccion( //Nueva dirección
  "Calle Cuarta",
  4,
  4,
  "D",
  14004,
  "Córdoba",
  "Córdoba"
)

let mail4 = new Mail( //Nuevo email
  "Privado",
  "correoD@gmail.com"
)

let telefono4 = new Telefono( //Nuevo teléfono
  "Privado",
  600000004
)

//Los métodos son creados en la clase persona
editarPersona.eliminarDireccion(direccion1); //Eliminar elemento
editarPersona.agregarNuevaDireccion(direccion4); //Añadir elemento
editarPersona.eliminarMail(mail1); //Eliminar elemento
editarPersona.agregarNuevoMail(mail4); //Añadir elemento
editarPersona.eliminarTelefono(telefono1); //Eliminar elemento
editarPersona.agregarNuevoTelefono(telefono4); //Añadir elemento

console.log("----Agenda modificada: ----")
for(let i = 0; i < agenda.length; i++) {
    console.log(agenda[i]);
}//Bucle para recorrer el Array Agenda. Se ha modificado la primera persona de la agenda. 