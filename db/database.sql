create database vyruz_toy_store;

use vyruz_toy_store;

CREATE TABLE
    toys (
        id INT (11) NOT NULL AUTO_INCREMENT,
        marca VARCHAR(65) NULL DEFAULT NULL,
        coleccion VARCHAR(75) DEFAULT NULL,
        nombre VARCHAR(200) DEFAULT NULL,
        descripcion VARCHAR(600) DEFAULT NULL,
        precio INT (8) DEFAULT NULL,
        PRIMARY KEY (id)
    );

show tables;

describe toys;

SELECT
    2 + 3 AS RESULT;

ALTER TABLE toys ADD imagen longblob NOT NULL;

INSERT INTO
    toys
VALUES
    (
        1,
        'Hasbro',
        'Marvel Legends Retro',
        'Fantastic Four, MR Fantastic',
        'Reed Richards tiene un cuerpo de goma y una mente cientifica brillante',
        400,
        'http://drive.google.com/uc?export=view&id=1zt8mYES-mfRUvEaotvvfAmE8k6lFO-kE'
    ),
    (
        2,
        'Hasbro',
        'Marvel Legends Retro',
        'Fantastic Four, The Thing',
        'Cuando los golpes no son suficientes, The Thing usa su fuerza sobrehumana para dar palizas',
        400,
        'http://drive.google.com/uc?export=view&id=1fNn-IJMA3vBum8TtmRIvapAhyhzBaI-F'
    );

SELECT
    *
FROM
    toys;