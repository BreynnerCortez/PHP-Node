const dbconnection = require('../DB/Connection');
const request = require('request');

function registerUser(req, res) {
    try {
        const body = req.body;
        const query = `
        INSERT INTO USUARIO(name,usermname,password)
        VALUES('${body.name}','${body.username}','${body.password}');`;

        if (body.username != null && body.username != '' && body.password != null && body.password != '') {
            dbconnection.query(query, (err, rows, fields) => {
                if (err) {
                    if (err.errno == 1062) {
                        res.json({ metodo: "registerUser", codigo: 0, mensaje: "Usuario repetido intente con otro nombre de usuario", user: -1 });
                    } else {
                        res.json(err);
                    }
                } else {
                    res.send({ metodo: "registerUser", codigo: 1, usuario: rows.insertId });
                }
            });
        } else {
            const respuesta = { metodo: "registerUser", codigo: 0, mensaje: "Error en los parametros enviados para registrar usuario.", user: -1 };
            return res.json(respuesta);
        }
    } catch (error) {
        console.log(error);
        const respuesta = { metodo: "registerUser", codigo: 0, mensaje: "Error en la consulta, revise los parametros ingresados", user: -1 };
        return res.json(respuesta);
    }
}

function getShow(req, res) {
    try {
        const params = req.params;
        request('https://api.tvmaze.com/shows/' + params.id, { json: true }, (err, res2, body) => {
            if (err) { return console.log(err); }
            res.send(body);
        });

    } catch (error) {
        console.log(error);
        const respuesta = { metodo: "getShow", codigo: 0, mensaje: "Error en la consulta, revise los parametros ingresados", show: -1 };
        return res.json(respuesta);
    }
}


function getShows(req, res) {
    try {
        request('https://api.tvmaze.com/shows', { json: true }, (err, res2, body) => {
            if (err) { return console.log(err); }
            res.send(body);
        });

    } catch (error) {
        console.log(error);
        const respuesta = { metodo: "getShows", codigo: 0, mensaje: "Error en la consulta, revise los parametros ingresados", shows: -1 };
        return res.json(respuesta);
    }
}

function registerComment(req, res) {
    try {
        const body = req.body;
        const query = `
        INSERT INTO COMENTARIO(id_movie,comment)
        VALUES(${body.id_movie},'${body.comment}');`;

        if (body.id_movie != null && body.id_movie != '' && body.comment != null && body.comment != '') {
            dbconnection.query(query, (err, rows, fields) => {
                if (err) {
                    res.json(err);
                } else {
                    res.send({ metodo: "registerComment", codigo: 1, comment: rows.insertId });
                }
            });
        } else {
            const respuesta = { metodo: "registerComment", codigo: 0, mensaje: "Error en los parametros enviados para registrar un comentario.", user: -1 };
            return res.json(respuesta);
        }
    } catch (error) {
        console.log(error);
        const respuesta = { metodo: "registerComment", codigo: 0, mensaje: "Error en la consulta, revise los parametros ingresados", comment: -1 };
        return res.json(respuesta); comment
    }
}

function getComments(req, res) {
    try {
        const params = req.params;
        const query = `
        SELECT * FROM COMENTARIO
        WHERE id_movie=${params.id};`;
        dbconnection.query(query, (err, rows, fields) => {
            if (err) {
                res.json(err);
            } else {
                res.send({ metodo: "getComments", codigo: 1, comments: rows });
            }
        });
    } catch (error) {
        console.log(error);
        const respuesta = { metodo: "getComments", codigo: 0, mensaje: "Error en la consulta, revise los parametros ingresados", comments: -1 };
        return res.json(respuesta);
    }
}


module.exports = {
    registerUser,
    getShows,
    getShow,
    registerComment,
    getComments
}