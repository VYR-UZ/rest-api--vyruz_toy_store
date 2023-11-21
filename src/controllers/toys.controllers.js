import { pool } from "../db.js";

export const getToys = (request, response) => response.send('Obteniendo juguetes');

//Es una consulta asincrona
export const createToys = async (request, response) => {
    const { marca, coleccion, nombre, descripcion, precio, imagen } = request.body;

    //Del objeto solo queremos las filas, guardamos la respuesta en una constante
    const [filas] = await pool.query('INSERT INTO toys (marca, coleccion, nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?, ?, ?)', [marca, coleccion, nombre, descripcion, precio, imagen])

    //console.log(request.body);

    //Regresa las filas insertadas
    //Debe regresar los mismos datos que se insertaron
    response.send({
        id: filas.insertId,
        marca,
        coleccion,
        nombre,
        descripcion,
        precio,
        imagen
    });
};

export const updateToys = (request, response) => response.send('Actualizando juguete');

export const deleteToys = (request, response) => response.send('Eliminando juguete');