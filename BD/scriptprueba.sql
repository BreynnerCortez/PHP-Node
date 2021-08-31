create database prueba;
use prueba;
CREATE TABLE USUARIO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    usermname VARCHAR(255),
    password VARCHAR(255),    
    UNIQUE(usermname)
);

CREATE TABLE COMENTARIO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_movie INT,
    comment VARCHAR(255)
);

SELECT * FROM prueba.usuario;
SELECT * FROM prueba.comentario;