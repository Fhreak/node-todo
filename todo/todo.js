const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}


const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json');
    }catch (err){
        listadoToDo = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoToDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoToDo.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoToDo.push(porHacer);

    guardarDB();

    return porHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== descripcion)
    if(listadoToDo.length === nuevoListado.length){
        return true;
    }else {
        listadoToDo = nuevoListado;
        guardarDB();
        return false
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}