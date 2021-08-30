create database prueba;
use prueba;
CREATE TABLE USUARIO (
    codigo_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255),
    apellidos VARCHAR(255),
    telefono INT,
    fecha_nac DATE,
    direccion VARCHAR(255),
    usuario VARCHAR(255),
    clave VARCHAR(255)
);

INSERT INTO USUARIO(nombres,apellidos,telefono,fecha_nac,direccion,usuario,clave) 
VALUES ('Breynner Miguel','Cortez Sic',2257,'1995-01-25','Ciudad de Guatemala','brc','123');
