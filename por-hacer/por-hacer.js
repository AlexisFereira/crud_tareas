const fs =require('fs');
const colors =require('colors');

let listadoPorHacer = []

const cargarPorHacer = ()=>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch (e) {
        listadoPorHacer=[];
    }
}

const guardaDB = ()=>{

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json',data,(err)=>{
        if(err) console.log(err);
    })
}


const crear =(descripcion)=>{

    cargarPorHacer();
    let porHacer = {
        descripcion,
        completado:false
    }
    listadoPorHacer.push(porHacer);
    guardaDB()
    return porHacer;
}

const getListado = ()=> {
    cargarPorHacer();
    return listadoPorHacer;
}


const actualizar = (descripcion,completado) =>{
    cargarPorHacer()

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion.toLowerCase() === descripcion.toLowerCase())
    if(index>=0){
        listadoPorHacer[index].completado = completado;
        guardaDB()
        return true;
    }else{
        return false;
    }

}


const borrar = (descripcion)=>{
    cargarPorHacer()

    let filtrado = listadoPorHacer.filter(item => item.descripcion !== descripcion)

    if(filtrado.length === listadoPorHacer.lenght){
        return 'No se logró borrar la tarea'
    }else{
        listadoPorHacer= filtrado
        guardaDB()
        return 'Tarea borrada con éxito';
    }

}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}