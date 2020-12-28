/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'breycre';
flush privileges;*/

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

INSERT INTO USUARIO(nombres,apellidos,telefono,fecha_nac,direccion,usuario,clave) 
VALUES ('juan','arevalo',7788,'1980-08-30','Ciudad de Guatemala','ja','123');

CREATE TABLE GRADO (
    codigo_grado INT AUTO_INCREMENT PRIMARY KEY,
    nombre_grado VARCHAR(255)
);

INSERT INTO GRADO(nombre_grado) 
VALUES ('Diplomado');

CREATE TABLE REGISTRO_GRADO (
    codigo_usuario INT,
    codigo_grado INT,
    fecha_registro DATE,
    descripcion VARCHAR(255),
	FOREIGN KEY (codigo_usuario) REFERENCES USUARIO(codigo_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (codigo_grado) REFERENCES GRADO(codigo_grado) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY(codigo_usuario,codigo_grado)
);

INSERT INTO REGISTRO_GRADO(codigo_usuario,codigo_grado,fecha_registro,descripcion) 
VALUES (4,3,'2003/01/25','Descripcion 2.');
delete from REGISTRO_GRADO;

CREATE TABLE AREA (
    codigo_area INT AUTO_INCREMENT PRIMARY KEY,
    nombre_area VARCHAR(255)
);

INSERT INTO AREA(nombre_area) 
VALUES ('nutricion');

CREATE TABLE REGISTRO_AREA (
    codigo_usuario INT,
    codigo_area INT,
	FOREIGN KEY (codigo_usuario) REFERENCES USUARIO(codigo_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (codigo_area) REFERENCES AREA(codigo_area) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY(codigo_usuario,codigo_area)
);

INSERT INTO REGISTRO_AREA(codigo_usuario,codigo_area) 
VALUES (4,1);

select  u.nombres,u.apellidos,reg.nombre_grado,reg.descripcion,reg.fecha_registro
from (
	SELECT  r.codigo_usuario,g.nombre_grado,r.descripcion,r.fecha_registro
	FROM   REGISTRO_GRADO AS r, GRADO as g
	where r.codigo_grado=g.codigo_grado
	order by r.fecha_registro desc LIMIT 18446744073709551615) as reg, 
	USUARIO as u
where 
		u.codigo_usuario=reg.codigo_usuario
group by u.codigo_usuario;



SELECT a.nombre_area,count(*) as total
FROM AREA as a
LEFT JOIN REGISTRO_AREA as r
ON a.codigo_area = r.codigo_area
group by a.codigo_area order by total desc;