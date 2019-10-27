const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')


let comando = argv._[0];

switch (comando) {
    case'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case'listar':
        console.log(porHacer.getListado())
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log('==== Pendiente por hacer ========'.green)
            console.log( tarea.descripcion , 'Compleatado: '+ tarea.completado)
            console.log('================================='.green)
        }
        break;
    case'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado)
        break;
    case'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado)
        break;

    default: console.log("No se reconoce el comando")

}