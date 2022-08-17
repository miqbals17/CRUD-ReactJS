'use strict'

const connection = require('./database');
const resp = require('./response')

exports.home = (req, res) => {
    resp.connected("API Connected!", res)
}

exports.show = (req, res) => {
    connection.query('SELECT * FROM kutipan', (err, rows) => {
        if (err) {
            throw err;
        } else {
            // res.json(rows);
            // res.end();
            resp.connected(rows, res);
        }
    })
}

exports.add = (req, res) => {
    const data = {
        nama: req.body.nama,
        quote: req.body.quote
    }

    connection.query(`INSERT INTO kutipan (nama, quote) VALUES (?,?)`, [data.nama, data.quote],(err) => {
        if (err) {
            throw err;
        } else {
            resp.connected("Quote Berhasil diTambahkan!", res);
        }
    })
}

exports.edit = (req, res) => {
    const data = {
        id_kutipan: req.body.id_kutipan,
        nama: req.body.nama,
        quote: req.body.quote
    }

    connection.query('SELECT * FROM kutipan WHERE kutipan.id_kutipan=?', data.id_kutipan, (err, rows) => {
        if (err) {
            throw err;
        } else {
            if (rows.length) {
                connection.query('UPDATE kutipan SET nama=?, quote=? WHERE id_kutipan=?', [data.nama, data.quote, data.id_kutipan], (err) => {
                    if (err) {
                        throw err;
                    } else {
                        resp.connected("Quote Berhasil diUbah!", res);
                    }
                })
            } else {
                resp.connected("Id Tidak diTemukan!", res)
            }
        }
    })
}

exports.del = (req, res) => {
    const data = {
        id_kutipan: req.body.id_kutipan
    }

    connection.query('SELECT * FROM kutipan WHERE kutipan.id_kutipan=?', data.id_kutipan, (err, rows) => {
        if (err) {
            throw err;
        } else {
            if (rows.length) {
                connection.query('DELETE FROM kutipan WHERE id_kutipan=?', data.id_kutipan, (err) => {
                    if (err) {
                        throw err;
                    } else {
                        resp.connected("Quote Berhasil diHapus!", res);
                    }
                })
            } else {
                resp.connected("Id Tidak diTemukan!", res);
            }
        }
    })
}