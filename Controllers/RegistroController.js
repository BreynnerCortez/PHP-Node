const dbconnection = require('../DB/Connection');

function Registrar(req, res) {
    try {
        const pet = req.body;
        const query = `INSERT INTO USUARIO (nombre,correo,clave,telefono) VALUES(
            '${pet.nombre}',
            '${pet.correo}',
            '${pet.clave}',
            ${pet.telefono})`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send({ detail: "Registro hecho con exito.", data: rows.insertId });
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function Usuarios(req, res) {
    try {
        const query = `SELECT * FROM USUARIO;`;


        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                res.send(rows);
                console.log(rows);
            }
        });
    } catch (error) {
        res.json({ response: "Problema con Json" });
    }
}

function Usuario(req, res) {
    try {
        var pet = req.params;
        var id = decodeURI(pet.id);
        const query = `SELECT * FROM USUARIO WHERE nombre='${id}';`;


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
        const pet = req.params;
        var id = decodeURI(pet.id);
        const query = `UPDATE USUARIO SET telefono=${pet.numero} where nombre='${id}';`;


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
        const query = `DELETE FROM USUARIO WHERE nombre='${id}';`;


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

module.exports = {
    Registrar,
    Usuarios,
    Usuario,
    UpdateUsuario,
    DeleteUsuario
}