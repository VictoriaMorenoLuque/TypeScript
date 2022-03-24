"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
//Primera persona
var direccion1 = new direccion_1.Direccion("Calle Primera", 1, 1, "A", 14001, "Córdoba", "Córdoba");
var mail1 = new mail_1.Mail("Personal", "correoA@hotmail.com");
var telefono1 = new telefono_1.Telefono("Personal", 600000001);
var persona1 = new persona_1.Persona('Victoria', 'Moreno Luque', 27, '12345678A', new Date(1994, 4, 27), 'rojo', 'mujer', [direccion1], [mail1], [telefono1], " ");
//Segunda persona
var direccion2 = new direccion_1.Direccion("Calle Segunda", 2, 2, "B", 14002, "Córdoba", "Córdoba");
var mail2 = new mail_1.Mail("Personal", "correoB@hotmail.com");
var telefono2 = new telefono_1.Telefono("Personal", 600000002);
var persona2 = new persona_1.Persona('Marisa', 'Mallenco Anguita', 27, '12345678B', new Date(1994, 2, 2), 'amarillo', 'mujer', [direccion2], [mail2], [telefono2], " ");
//Tercera persona
var direccion3 = new direccion_1.Direccion("Calle Tercera", 3, 3, "C", 14003, "Córdoba", "Córdoba");
var mail3 = new mail_1.Mail("Personal", "correoC@hotmail.com");
var telefono3 = new telefono_1.Telefono("Personal", 600000003);
var persona3 = new persona_1.Persona('Christian', 'Merlo Ruiz', 27, '12345678C', new Date(1994, 3, 3), 'verde', 'hombre', [direccion3], [mail3], [telefono3], " ");
var agenda = new Array(persona1, persona2, persona3); //Array de personas
console.log("----Agenda: ----");
for (var i = 0; i < agenda.length; i++) {
    console.log(agenda[i]);
} //Bucle para recorrer el Array Agenda.
var editarPersona = agenda.filter(function (persona) { return persona.dni == "12345678A"; })[0]; //Filtrar la persona por DNI. DNI de la persona1.
var direccion4 = new direccion_1.Direccion(//Nueva dirección
"Calle Cuarta", 4, 4, "D", 14004, "Córdoba", "Córdoba");
var mail4 = new mail_1.Mail(//Nuevo email
"Privado", "correoD@gmail.com");
var telefono4 = new telefono_1.Telefono(//Nuevo teléfono
"Privado", 600000004);
//Los métodos son creados en la clase persona
editarPersona.eliminarDireccion(direccion1); //Eliminar elemento
editarPersona.agregarNuevaDireccion(direccion4); //Añadir elemento
editarPersona.eliminarMail(mail1); //Eliminar elemento
editarPersona.agregarNuevoMail(mail4); //Añadir elemento
editarPersona.eliminarTelefono(telefono1); //Eliminar elemento
editarPersona.agregarNuevoTelefono(telefono4); //Añadir elemento
console.log("----Agenda modificada: ----");
for (var i = 0; i < agenda.length; i++) {
    console.log(agenda[i]);
} //Bucle para recorrer el Array Agenda. Se ha modificado la primera persona de la agenda. 
