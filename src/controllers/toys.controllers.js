import { request, response } from "express";
import { pool } from "../db.js";

export const getToys = async (request, response) => {
    const [filas] = await pool.query('SELECT * FROM toys');
    response.json(filas);
};

export const getToy = async (request, response) => {
    const [filas] = await pool.query('SELECT * FROM toys WHERE ID = ?', [request.params.id]);

    //Si no existe el id
    if (filas.length <= 0) {
        return response.status(404).json(
            {
                message: 'El juguete no existe'
            }
        );
    };

    response.json(filas[0]);
};

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