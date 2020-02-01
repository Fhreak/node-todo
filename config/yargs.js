const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        description: {
            alias: 'd',
            demand: true
        },

    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        description: {
            alias: 'd',
            demand: true,
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borrar tarea', {
        description: {
            alias: 'b',
            demand: true
        },

    })
    .help()
    .argv;

module.exports = {
    argv
}