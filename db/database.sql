create database vyruz_toy_store;

use vyruz_toy_store;

CREATE TABLE toys(
	id INT(11) NOT NULL AUTO_INCREMENT,
    marca VARCHAR(65) NULL DEFAULT NULL,
    coleccion VARCHAR(75) DEFAULT NULL,
    nombre VARCHAR(200) DEFAULT NULL,
    precio INT(8) DEFAULT NULL,
    PRIMARY KEY(id)
);

show tables;
describe toys;

SELECT 2 + 3 AS RESULT;

insert into toys values (
	1,
	'Hasbro',
    'Marvel Legends Retro',
    'Fantastic Four, MR Fantastic',
    'Reed Richards tiene un cuerpo de goma y una mente cientifica brillante',
    400
);

SELECT * FROM toys;





