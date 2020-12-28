const dbconnection = require('../DB/Connection');


function Usuario(req, res) {
    try {
        var pet = req.params;
        var id = decodeURI(pet.id);
        var clave = decodeURI(pet.clave);
        const query = `SELECT * FROM USUARIO WHERE usuario='${id}' and clave='${clave}';`;
        console.log(query);


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send(rows);
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function UpdateUsuario(req, res) {
    try {
        const petp = req.params;
        const pet = req.body;
        var id = decodeURI(pet.id);
        const query = `UPDATE USUARIO set 
        nombres='${pet.nombres}',apellidos='${pet.apellidos}',telefono=${pet.telefono},direccion='${pet.direccion}' 
        where codigo_usuario=${petp.id}`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send({ detail: "Cambios realizados con éxito." });
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function DeleteUsuario(req, res) {
    try {
        const pet = req.params;
        var id = decodeURI(pet.id);
        const query = `DELETE FROM USUARIO WHERE codigo_usuario='${id}';`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send({ detail: "Eliminación realizada con éxito." });
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function GetGradosUsuario(req, res) {
    try {
        const query = `SELECT nombre_grado FROM GRADO;`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send(rows);
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function GetGrados(req, res) {
    try {
        const query = `select  u.nombres,u.apellidos,reg.nombre_grado,reg.descripcion,reg.fecha_registro
                    from (
                        SELECT  r.codigo_usuario,g.nombre_grado,r.descripcion,r.fecha_registro
                        FROM   REGISTRO_GRADO AS r, GRADO as g
                        where r.codigo_grado=g.codigo_grado
                        order by r.fecha_registro desc LIMIT 18446744073709551615) as reg, 
                        USUARIO as u
                    where 
                            u.codigo_usuario=reg.codigo_usuario
                    group by u.codigo_usuario;`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send(rows);
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function GetAreas(req, res) {
    try {
        const query = `SELECT a.nombre_area,sum(case when r.codigo_usuario is null then 0 else 1 end) total
                    FROM AREA as a
                    LEFT JOIN REGISTRO_AREA as r
                    ON a.codigo_area = r.codigo_area
                    group by a.codigo_area order by total desc;`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send(rows);
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

module.exports = {
    Usuario,
    UpdateUsuario,
    GetGrados,
    GetGradosUsuario,
    GetAreas
}