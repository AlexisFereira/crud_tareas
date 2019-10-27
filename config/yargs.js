const descripcion = {
    alias: "-d",
    demand: true,
    desc: 'Descripcion de una tarea'
}

const completado={
    alias: 'c',
    default: true,
    desc:'Marca como compleatdo una tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza un a tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}