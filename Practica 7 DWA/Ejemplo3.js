// Objeto que contiene propiedades con otros objetos
const estudiante = {
    nombre: 'Lisseth',
    edad: 27,
    direccion: {
        calle: 'Colonia Beltran, pasaje #2 Sexta Avenidad Norte',
        ciudad: 'La Union'
    },
    materias: ['Ciencias', 'Programacion', 'Bases de Datos']
};

// Acceso d la propiedades derivadas
console.log(estudiante.direccion.ciudad)
console.log(estudiante.materias[1])