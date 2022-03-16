"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
//Primera persona
var direccion1 = new direccion_1.Direccion("Calle Fez", 26, 1, "A", 14009, "Córdoba", "Córdoba");
var mail1 = new mail_1.Mail("Personal", "victoriamorenoluque@hotmail.com");
var telefono1 = new telefono_1.Telefono("Personal", 622070755);
var persona1 = new persona_1.Persona('Victoria', 'Moreno Luque', 27, '12345678A', new Date(1994, 4, 27), 'morado', 'mujer', [direccion1], [mail1], [telefono1], " ");
//Segunda persona
var direccion2 = new direccion_1.Direccion("Calle Greta", 16, 2, "B", 14009, "Córdoba", "Córdoba");
var mail2 = new mail_1.Mail("Personal", "maria16@hotmail.com");
var telefono2 = new telefono_1.Telefono("Personal", 655070755);
var persona2 = new persona_1.Persona('María', 'León Reyes', 29, '12345678B', new Date(1992, 3, 16), 'azul', 'mujer', [direccion2], [mail2], [telefono2], " ");
//Tercera persona
var direccion3 = new direccion_1.Direccion("Calle Alexandría", 8, 3, "C", 14009, "Córdoba", "Córdoba");
var mail3 = new mail_1.Mail("Personal", "MerloChristian@hotmail.com");
var telefono3 = new telefono_1.Telefono("Personal", 677070755);
var persona3 = new persona_1.Persona('Christian', 'Merlo Ruiz', 27, '12345678C', new Date(1994, 8, 3), 'rojo', 'hombre', [direccion3], [mail3], [telefono3], " ");
console.log("Personas registradas: ");
console.log(persona1);
console.log(persona2);
console.log(persona3);
var agenda = new Array(persona1, persona2, persona3); //Array de personas
var editarPersona = agenda.filter(function (persona) { return persona.dni == "12345678A"; })[0]; //Filtrar la persona por DNI. DNI de la persona1.
var direccion4 = new direccion_1.Direccion(//Nueva dirección
"Calle Montilla", 18, 4, "D", 14009, "Córdoba", "Córdoba");
var mail4 = new mail_1.Mail(//Nuevo email
"Privado", "victoriamorenoluque@gmail.com");
var telefono4 = new telefono_1.Telefono(//Nuevo teléfono
"Privado", 600070755);
editarPersona.direcciones.pop(); //Eliminar elemento
editarPersona.direcciones.push(direccion4); //Añadir elemento
editarPersona.mails.pop(); //Eliminar elemento
editarPersona.mails.push(mail4); //Añadir elemento
editarPersona.telefonos.pop(); //Eliminar elemento
editarPersona.telefonos.push(telefono4); //Añadir elemento
console.log("Personas registradas con Persona1 modificada: ");
console.log(persona1);
console.log(persona2);
console.log(persona3);
